---
outline: deep
---

# Как привязать динамическую карту/прочий веб сервер к домену?

В Cloudflare это можно сделать буквально за пару кликов. [Как перенести домен на Cloudflare?](/cloudflare/transfer-domain.md)

1. Создаём A запись с IP-адресом вашего сервера и включаем проксирование
![](/originrules1.png)

2. Заходим в Rules -> Origin Rules
![](/originrules2.png)

3. Нажимаем и заполняем как на скриншоте
![](/originrules3.png)

4. Жмём Deploy и пробуем заходить