# Как исправить ошибку "Открытый ключ профиля отсутствует. Для этого сервера требуются защищённые профили"?

Для исправления этой ошибки нужно зайти в файл server.properties, установить значение `false` в параметре `enforce-secure-profile` и перезапустить сервер

```properties
enforce-secure-profile=true # [!code --]
enforce-secure-profile=false # [!code ++]
```

::: tip Интересно
Если вы хотите полностью отключить новомодную систему репортов от Mojang, можно установить [AntiPopup](https://github.com/KaspianDev/AntiPopup/releases) или [NoChatReports](https://www.spigotmc.org/resources/nochatreports-spigot-paper-1-19-1-21-1.102931)
:::

::: danger ВАЖНО
Если вы хотите чтобы на ваш сервер можно было зайти с пиратской версии Minecraft, ОБЯЗАТЕЛЬНО установите плагин на авторизацию, например [AuthMe](https://ci.codemc.io/job/AuthMe/job/AuthMeReloaded).
В противном случае ваш сервер Minecraft может быть взломан путём входа под ником игрока с правами оператора
:::