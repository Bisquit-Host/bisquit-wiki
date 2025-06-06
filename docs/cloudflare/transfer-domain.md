---
outline: deep
---

# Как перенести свой домен на cloudflare?

## Подробная инструкция

1. Создайте учётную запись на [Cloudflare](https://cloudflare.com)

2. Введите домен, который вы хотите перенести на Cloudflare

![k9](/k9.png)

3. Выберите тариф, который подходит вам больше всего (обычно хватает бесплатного)

![k8](/k8.png)

4. Cloudflare предоставит вам список DNS-серверов. Скопируйте их

![k7](/k7.png)

5. Перейдите в панель управления вашим доменом и найдите раздел управления DNS-зоной. (На примере reg.ру)

![k1](/k1.png)

![k2](/k2.png)

![k3](/k3.png)

![k4](/k4.png)

![k5](/k5.png)

6. Замените текущие DNS-серверы на те, которые вы скопировали из Cloudflare. (На примере рег.ру)

![k6](/k6.png)

7. После обновления DNS-серверов начнётся процесс переноса домена на Cloudflare, обычно это занимает до 24 часов