import { cp, mkdir, readdir, rm, writeFile } from 'node:fs/promises'
import { dirname, join, relative, sep } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = dirname(fileURLToPath(import.meta.url))
const distDir = join(root, '..', 'docs', '.vitepress', 'dist')
const redirectOrigin = 'https://bisquit.host'
const redirectBasePath = '/wiki'

async function listHtmlFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true })
  const files = []

  for (const entry of entries) {
    const fullPath = join(dir, entry.name)

    if (entry.isDirectory()) {
      files.push(...await listHtmlFiles(fullPath))
      continue
    }

    if (entry.isFile() && entry.name.endsWith('.html')) {
      files.push(fullPath)
    }
  }

  return files
}

const htmlFiles = await listHtmlFiles(distDir)

for (const htmlFile of htmlFiles) {
  const relativePath = relative(distDir, htmlFile)

  if (relativePath === 'index.html' || relativePath === '404.html') {
    continue
  }

  if (relativePath.split(sep).at(-1) === 'index.html') {
    continue
  }

  const cleanPath = htmlFile.slice(0, -'.html'.length)
  const cleanIndex = join(cleanPath, 'index.html')

  await rm(cleanPath, { recursive: true, force: true })
  await mkdir(cleanPath, { recursive: true })
  await cp(htmlFile, cleanIndex)
}

function htmlFileToPathname(htmlFile) {
  const relativePath = relative(distDir, htmlFile).split(sep).join('/')

  if (relativePath === 'index.html') {
    return '/'
  }

  if (relativePath === '404.html') {
    return null
  }

  if (relativePath.endsWith('/index.html')) {
    return `/${relativePath.slice(0, -'/index.html'.length)}`
  }

  if (relativePath.endsWith('.html')) {
    return `/${relativePath.slice(0, -'.html'.length)}`
  }

  return `/${relativePath}`
}

function redirectUrl(pathname) {
  const normalizedPathname = pathname === '/' ? '' : pathname
  return `${redirectOrigin}${redirectBasePath}${normalizedPathname}`
}

function redirectPage(pathname) {
  const staticTarget = pathname ? redirectUrl(pathname) : `${redirectOrigin}${redirectBasePath}`
  const dynamicTargetExpression = pathname
    ? `new URL(${JSON.stringify(`${redirectBasePath}${pathname === '/' ? '' : pathname}`)}, ${JSON.stringify(redirectOrigin)})`
    : `new URL(${JSON.stringify(redirectBasePath)} + window.location.pathname, ${JSON.stringify(redirectOrigin)})`

  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="robots" content="noindex">
    <link rel="canonical" href="${staticTarget}">
    <meta http-equiv="refresh" content="0; url=${staticTarget}">
    <title>Redirecting...</title>
    <script>
      const target = ${dynamicTargetExpression};
      target.search = window.location.search;
      target.hash = window.location.hash;
      window.location.replace(target);
    </script>
  </head>
  <body>
    <p>Redirecting to <a href="${staticTarget}">${staticTarget}</a>.</p>
  </body>
</html>
`
}

const redirectHtmlFiles = await listHtmlFiles(distDir)

for (const htmlFile of redirectHtmlFiles) {
  await writeFile(htmlFile, redirectPage(htmlFileToPathname(htmlFile)))
}

await writeFile(
  join(distDir, '_redirects'),
  `/  ${redirectOrigin}${redirectBasePath}/  301
/*  ${redirectOrigin}${redirectBasePath}/:splat  301
`,
)

await writeFile(
  join(distDir, '_headers'),
  `/*
  X-Robots-Tag: noindex
`,
)
