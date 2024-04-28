---
outline: deep
---

# EnderaBank
![eba](/eba.png)

Функциональный и удобный плагин на банковскую систему с использованием руды

## Покупка
Цена: 2500 руб.

Контакты:
- Discord: sculmix
- https://t.me/YolkinVadim
- Discord: turbovadim

Обращайтесь к Sculmix если в сети.

### Команды плагина EnderaBank:​
- **/bank** - открыть меню банка
- **/bank deposit** - меню с пополнением карты
- **/bank pay (Ник/Номер счёта)** - перевести средства другому игроку
- **/bank transfer (с какого) (куда)** - перевод средств между вашими счетами
- **/bank subuser add/remove (ник) (счёт)** - добавить совладельца счёта
- **/bank newcard (дизайн)** - создать новую карту
- **/bank warn (ник) (сумма) (причина)** - выдать штраф
- **/bank unwarn (Номер штрафа)** - снять штраф
- **/bank paywarn (Номер штрафа)** - оплатить штраф

### Права плагина EnderaBank:​
- **enderabank.reload** - Разрешает перезагружать конфиг плагина
- **enderabank.newcard** - Разрешение на создание новой карты
- **enderabank.subuser** - Разрешение на добавление совладельцев
- **enderabank.sbp** - Разрешение на переводы без комиссии
- **enderabank.fbi** - Разрешение на выдачу штрафов
- **enderabank.payments** - Разрешение на переводы
- **enderabank.deposit** - Разрешение на пополнение счёта через меню

### Конфигурация плагина EnderaBank:​
::: details Развернуть
```yml
storage:
  storage-type: "h2"
  remote:
    host: "localhost"
    port: 3306
    dbname: "yourdbname"
    user: "youruser"
    password: "yourpassword"
    connection-parameters: "?autoReconnect=true&initialTimeout=1&useSSL=false"
currency-name: "АР"
government-card: 1
commission-amount: 1
card-limits:
  default: 5
  limits:
    "plus": 7
    "premium": 9
designs:
  "default":
    display-name: "Стандартный"
    item: "BAMBOO"
    model-data: 101
menu:
  title: "Банк"
  back-button:
    title: "<red>Назад"
    item: "BARRIER"
    model-data: 100
    description: []
  previous-page-item:
    title: "Предыдущая страница"
    item: "ARROW"
    model-data: 100
    description: []
  next-page-item:
    title: "Следующая страница"
    item: "ARROW"
    model-data: 100
    description: []
  main-menu:
    cards:
      title: "<gold>Карты"
      item: "PAPER"
      model-data: 100
      description:
      - "Здесь вы можете просмотреть"
      - "список всех карт к которые"
      - "вы создали или имеете к ним доступ"
      - "Баланс ваших счетов: <green>{your_balance}"
      - "Баланс доступных счетов: <green>{others_balance}"
    transactions:
      title: "<green>Транзакции"
      item: "EMERALD"
      model-data: 100
      description:
      - "Список всех транзакций"
      - "включая входящие и исходящие"
      - "переводы и штрафы"
    warnings:
      title: "<red>Штрафы"
      item: "BARRIER"
      model-data: 100
      description:
      - "Список всех штрафов"
      - "они выдаются вам за нарушения"
      - "правил и закона"
  cards-list-menu:
    title: "Счета"
    card-selector-title: "Выберите счет для пополнения"
    card-item:
      card-name: "Карта #{number}"
      description:
      - "Владелец: {owner}"
      - "Баланс: {balance}"
      - "Основной: {is_main}"
      - "Заблокирован: {is_blocked}"
    switch-to-owned:
      title: "Отображение: <red>Общие счета"
      item: "ENDER_PEARL"
      model-data: 100
      description:
      - "Нажмите чтобы переключиться на"
      - "просмотр ваших счетов"
    switch-to-coowned:
      title: "Отображение: <green> Ваши счета"
      item: "ENDER_EYE"
      model-data: 100
      description:
      - "Нажмите чтобы переключиться на"
      - "просмотр общих счетов"
  deposit-menu:
    title: "Операции со счетом #{number}"
    balance-item:
      title: "<yellow>Баланс: <aqua>{balance}{currency_name}"
      item: "EMERALD"
      model-data: 100
      description: []
    deposit1:
      title: "Пополнить на 1{currency_name}"
      item: "GOLD_NUGGET"
      model-data: 100
      description: []
    deposit10:
      title: "Пополнить на 10{currency_name}"
      item: "RAW_GOLD"
      model-data: 100
      description: []
    deposit64:
      title: "Пополнить на 64{currency_name}"
      item: "RAW_GOLD_BLOCK"
      model-data: 100
      description: []
    withdraw1:
      title: "Снять со счета 1{currency_name}"
      item: "IRON_NUGGET"
      model-data: 100
      description: []
    withdraw10:
      title: "Снять со счета 10{currency_name}"
      item: "RAW_IRON"
      model-data: 100
      description: []
    withdraw64:
      title: "Снять со счета 64{currency_name}"
      item: "RAW_IRON_BLOCK"
      model-data: 100
      description: []
  transactions-list-menu:
    title: "Список транзакций"
    transaction-item:
      title: "Транзакция #{number}"
      item: "PAPER"
      model-data: 100
      description:
      - "Отправитель: <yellow>{sender}(#{sender_card})"
      - "Получатель: <yellow>{receiver}(#{receiver_card})"
      - "Сумма: <green>{amount}"
    switch-to-owned:
      title: "Отображение: <red>Транзакции общих счетов"
      item: "ENDER_PEARL"
      model-data: 100
      description:
      - "Нажмите чтобы переключиться на"
      - "просмотр транзакций ваших счетов"
    switch-to-coowned:
      title: "Отображение: <green>Транзакции ваших счетов"
      item: "ENDER_EYE"
      model-data: 100
      description:
      - "Нажмите чтобы переключиться на"
      - "просмотр транзакций общих счетов"
  warnings-menu:
    title: "Штрафы"
    list-title: "Штрафы игрока {player}"
    paid-state: "<green>Оплачен"
    pending-state: "<red>Ожидает оплаты"
    warning-item:
      title: "Штраф #{number}"
      item: "PAPER"
      model-data: 100
      description:
      - "Выдал: {issuer}"
      - "Сумма: {amount}"
      - "Статус: {status}"
      - "Причина: {description}"
  card-actions-menu:
    title: "Управление счетом #{number}"
    subusers:
      title: "Список совладельцев"
      item: "PLAYER_HEAD"
      model-data: 100
      description:
      - "Список всех игроков, которые"
      - "имеют доступ к данному счету"
    make-main:
      title: "<yellow>Сделать основным"
      item: "PAPER"
      model-data: 100
      description:
      - "Сделать счет основным"
    lock:
      title: "<red>Заблокировать"
      item: "PAPER"
      model-data: 100
      description:
      - "Заблокировать все операции по счету"
    unlock:
      title: "<green>Разблокировать"
      item: "PAPER"
      model-data: 100
      description:
      - "Снять блокировку операций по счету"
    delete:
      title: "<red>Удалить счет"
      item: "PAPER"
      model-data: 100
      description:
      - "Полностью избавиться от счета"
  subusers-menu:
    title: "Совладельцы счета"
    player-item:
      title: "<yellow>{nickname}"
      description:
      - "Нажмите чтобы удалить совладельца"
  confirm-deletion-menu:
    card:
      title: "Подтвердить удаление #{number}"
      confirm:
        title: "<red>Подтвердить удаление"
        item: "RED_DYE"
        model-data: 100
        description: []
      cancel:
        title: "<red>Отменить"
        item: "GRAY_DYE"
        model-data: 100
        description: []
    subuser:
      title: "Подтвердить удаление?"
      confirm:
        title: "<red>Подтвердить удаление"
        item: "RED_DYE"
        model-data: 100
        description: []
      cancel:
        title: "<red>Отменить"
        item: "GRAY_DYE"
        model-data: 100
        description: []
prefix: "<gradient:#5e4fa2:#f79459>[EnderaBank]</gradient>"
messages:
  config-reloaded: "{prefix} Конфиг успешно перезагружен"
  card-created: "{prefix} <green>Карта #{number} успешно создана"
  payment-sent: "{prefix} Вы успешно отправили {amount}{currency_name} игроку {player}"
  transfer-sent: "{prefix} Вы успешно отправили {amount}{currency_name} на счёт #{account}"
  received-payment: "{prefix} Вы получили {amount}{currency_name} от {sender} на счёт #{account}"
  subuser-added: "{prefix} <green>Пользователь {nickname} был успешно добавлен как совладелец для #{account}"
  subuser-removed: "{prefix} <red>Пользователь {nickname} был успешно удален из совладельцев счёта #{account}"
  comission-taken: "{prefix} С вас удержана комиссия в размере {amount}{currency_name}"
  warn-created: "{prefix} Вы успешно выдали предупреждение #{number} игроку {player}"
  warn-received: "{prefix} Вам выстален штраф #{number} игроком {player} на сумму {amount}{currency_name} по причине: {description}"
  warn-deleted: "{prefix} Штраф #{number} успешно снят"
  warn-paid: "{prefix} Вы успешно оплатили штраф #{number}"
  true: "<green>Да"
  false: "<red>Нет"
  error-messages:
    no-command: "{prefix} <red>Такой команды не существует"
    minimal-amount: "{prefix} <red>Минимальная сумма для перевода 1{currency_name}"
    no-permission: "{prefix} <red>У вас нет разрешения для этой команды"
    no-design: "{prefix} <red>Вы должны указать дизайн карты"
    invalid-design: "{prefix} <red>Такой дизайн карты не существует"
    cards-limit-reached: "{prefix} <red>Вы достигли максимального количества карт"
    not-enough-items: "{prefix} <red>У вас недостаточно предметов для пополнения счета на данную сумму"
    not-enough-slots: "{prefix} <red>У вас недостаточно свободных слотов в инвентаре"
    insufficient-funds: "{prefix} <red>У вас недостаточно средств"
    receiver-has-no-cards: "{prefix} У получателя данного перевода нет карт"
    sender-has-no-cards: "{prefix} У вас нет карт"
    card-does-not-exist: "{prefix} Данная карта не существует"
    no-such-card: "{prefix} <red>Данный счет не существует или не пренадлежит вам"
    no-such-player-played: "{prefix} <red>Игрок с данным ником никогда не появлялся на сервере"
    subuser-exists: "{prefix} <red>Выбранный игрок уже добавлен как совладелец данного счета"
    subuser-is-not-exists: "{prefix} <red>Данный игрок не является совладельцем выбранного счета"
    warn-does-not-exist: "{prefix} Такого предупреждения не существует"
    warn-is-paid: "{prefix} Данный штраф уже оплачен"
    receiver-card-is-blocked: "{prefix} <red>Карта получателя заблокирована владельцем, перевод средств невозможен"
    sender-card-is-blocked: "{prefix} <red>Карта с которой вы пытаетесь совершить перевод - заблокирована"
  commands-usage:
    pay-command: "{prefix} <red> Использование /ebank pay [ник] [сумма]"
    transfer-command: "{prefix} <red> Использование /ebank transfer [откуда] [куда] [сумма]"
    add-subuser: "{prefix} <red>Использование /ebank subuser add [счёт] [ник]"
    remove-subuser: "{prefix} <red>Использование /ebank subuser remove [счёт] [ник]"
    warn-command: "{prefix} <red>Использование /ebank warn [игрок] [сумма] [причина]"
    unwarn-command: "{prefix} <red>Использование /ebank unwarn [ID штрафа]"
    paywarn-command: "{prefix} <red>Использование /ebank paywarn [ID штрафа] [Счёт]"
```
:::

### Скриншоты:
![1](/1.png) ![2](/2.png)
![3](/3.png) ![4](/4.png)
![5](/5.png) ![6](/6.png)
![7](/7.png) ![8](/8.png)