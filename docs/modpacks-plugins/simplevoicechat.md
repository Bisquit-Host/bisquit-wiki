---
title: Установка SimpleVoiceChat на сервер
---

# Установка SimpleVoiceChat на сервер

SimpleVoiceChat добавляет удобный голосовой чат на ваш майнкрафт сервер

## 1. Загрузка SimpleVoiceChat

1.  Перейдите на официальную страницу загрузки SimpleVoiceChat:
    *   **Modrinth:** [https://modrinth.com/plugin/simple-voice-chat](https://modrinth.com/plugin/simple-voice-chat)
    *   **CurseForge:** [https://www.curseforge.com/minecraft/mc-mods/simple-voice-chat](https://www.curseforge.com/minecraft/mc-mods/simple-voice-chat)

2.  **Выберите правильный файл:**
    *   Для **Fabric** серверов: файл с `fabric` в названии (например, `voicechat-fabric-X.X.X-X.X.X.jar`)
    *   Для **Forge** серверов: файл с `forge` в названии (например, `voicechat-forge-X.X.X-X.X.X.jar`)
    *   Для **Spigot/Paper/Purpur** и их форков: файл с `bukkit` в названии (например, `voicechat-bukkit-X.X.X-X.X.X.jar`)

    ::: warning ВАЖНО
    Убедитесь, что скачиваемая версия SimpleVoiceChat совместима с версией Minecraft вашего сервера. Скачивание неправильного файла для вашей платформы приведет к тому, что плагин просто не будет работать
    :::
	
3.  Скопируйте скачанный `.jar` файл SimpleVoiceChat в соответствующую папку:
    *   **Для Fabric/Forge серверов:** в папку `mods`
        *   Для **Fabric** также убедитесь, что в папке `mods` установлен [Fabric API](https://modrinth.com/mod/fabric-api) совместимой версии
    *   **Для Spigot/Paper/Purpur серверов:** в папку `plugins`
4.  Запустите сервер, чтобы SimpleVoiceChat создал свои конфигурационные файлы

## 2. Настройка SimpleVoiceChat

SimpleVoiceChat требует **специальный UDP-порт** для передачи голосовых данных
 
Чтобы создать нужный порт сделайте следующее:
- Перейдите во вкладку "Порты"
- Нажмите кнопку "Создать порт"
- Во всплывающем окне выберите "Simple Voice Chat"

Теперь, когда нужный порт создан , нужно указать его в конфиге SimpleVoiceChat

1.  Найдите конфигурационный файл SimpleVoiceChat:
    *   **Fabric/Forge:** `/config/voicechat/voicechat-server.properties`
    *   **Spigot/Paper/Purpur/Leaf:** `/plugins/voicechat/voicechat-server.properties`
3.  Откройте этот файл и найдите следующую строку:

    ```properties
    # UDP порт, на котором будет работать голосовой чат
    port = 24454
    ```

**`port`**: Укажите здесь тот UDP-порт, который вы открыли на **Шаге 2**

4.  Сохраните изменения и перезапустите сервер