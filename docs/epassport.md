---
outline: deep
---

# EnderaPassport
![epa](/epa.webp)

Простой и удобный плагин на систему паспортов для RP-проектов

## Покупка
Цена: 349 ₽

Контакты:
- Discord: sculmix
- Discord: turbovadim
- [Telegram](https://t.me/YolkinVadim)

Обращайтесь к Sculmix если в сети

### Команды:​
- **/passport** - просмотр своего паспорта
- **/passport new [playerName] [Возраст] [Пол] [Семейное положение] [Место жительства]** - создание нового паспорта
- **/passport delete [playerName]** - удалить паспорт игрока
- **/passport ask [playerName]** - попросить игрока показать свой паспорт
- **/passport show [playerName]** - показать игроку паспорт
- **/passport reload** - перезагрузить файл конфигурации

### Права:​
- **enderapassport.remove** - разрешает удалять паспорта игроков
- **enderapassport.reload** - разрешает перезагружать конфиг плагина
- **enderapassport.create** - разрешает создание паспортов
- **enderapassport.use** - разрешает использование паспортов, /passport [show/ask] (default: true)

### Конфигурация:​
::: details Развернуть
```yml
storage-type: "sqlite"
remote:
  host: "localhost"
  port: 3306
  dbname: "yourdbname"
  user: "youruser"
  password: "yourpassword"
  connection-parameters: "?autoReconnect=true&initialTimeout=1&useSSL=false"
passport-format:
- "<#E30056>         Паспорт"
- ""
- "<black>Name: %passport_name%"
- "Age: %passport_age%"
- "Gender:  %passport_gender%"
- "Marital Status: %passport_marital_status%"
- "City: %passport_city%"
- ""
- "Issue Date: %passport_issue_date%"
- "Issue Time:  %passport_issue_time%"
- ""
- "Issued By: %passport_issued_by%"
messages:
  invalid-age: "{prefix} Invalid age specified"
  player-not-found: "{prefix} Player not found"
  decline-ask: "{prefix} {player} declined the passport viewing request"
  ask-declined: "{prefix} Request declined"
  prefix: "<gradient:#5e4fa2:#f79459>[EnderaPassport]</gradient>"
  passport-ask: "{prefix} {player} has requested your passport <green>{yes} <red>{no}"
  reload: "{prefix} Config reloaded"
  no-permission: "{prefix} Insufficient permissions"
  view-passport: "{prefix} Passport viewed"
  show-passport: "{prefix} Passport shown"
  passport-deleted: "{prefix} Passport successfully deleted"
  passport-created: "{prefix} Passport created"
  passport-exists: "{prefix} The player already has a passport"
  passport-request: "{prefix} Passport viewing request sent"
  too-far: "{prefix} Player too far away"
  too-far-ask: "{prefix} You are too far away to request a passport"
  no-passport: "{prefix} You do not have a passport"
  no-passport-delete: "{prefix} No passport found with that name!"
  no-command: "{prefix} Such command does not exist"
  invalid-target: "{prefix} You cannot target yourself with this command"
  your-passport-created: "{prefix} Your passport has been created"
  your-passport-deleted: "{prefix} Your passport has been deleted"
  ask-no-passport: "{prefix} {player} does not have a passport"
```
:::

### Скриншоты:
![1-1](/1-1.png)
