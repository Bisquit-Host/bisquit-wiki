---
outline: deep
---

# Как вместо IP-адреса использовать свой домен?
Привязка домена к серверу необходима для того, чтобы сделать процесс подключения проще и быстрее. Обычно для подключения используется IP-адрес, который может быть длинным и сложным для запоминания (123.45.67.89:1234). Если вы привяжете домен, например, "join.bisquitmc.net", то игрокам будет проще его запомнить, что может помочь с привлечением аудитории на ваш сервер

## Подробная инструкция
::: tip Важно помнить!
Для начала вам необходимо приобрести домен и перенести его в Cloudflare
:::

1. Откройте панель управления Cloudflare

2. Выберите домен из списка ваших доменов

3. Перейдите во вкладку "DNS"

4. Создайте новую A-запись (Type A record)
     - В строке Name впишите любое название и **запомните его**
     - В IPv4 - IP-адрес своего сервера **без порта**
     - Proxy Status (оранжевое облачко) необходимо выключить
     - TTL оставьте без изменений (auto)
  
  ![a-record](/a-record.webp)

::: details Метод без A записи
Вы можете использовать адрес ноды, подробнее в 5 пункте
:::
  
5. Создайте новую SRV-запись
     - В строке Name впишите _minecraft._tcp.(поддомен который вы хотите)
     - TTL - без изменений
     - В Priority и Weight впишите 5
     - Port - порт вашего сервера
     - В Target - название A-записи.ваш_домен или (название вашей ноды).bisquit.host 

  ![srv-record](/srv-record.webp)

6. Согласено примеру сервер будет доступен по адресу join.bisquitmc.net

7. Готово!