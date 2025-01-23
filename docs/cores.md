# Ядра для Minecraft

## Ванильные ядра

- [Vanilla](https://getbukkit.org/download/vanilla) - обыкновенное ванильное ядро

- [CraftBukkit](https://getbukkit.org/download/craftbukkit) - одно из самых первых и самых старых ядер, поддерживающих Bukkit плагины. **АБСОЛЮТНО Не рекомендуется** к использованию из-за отсутствия оптимизации и поддержки современных плагинов

- [Spigot](https://getbukkit.org/download/spigot) -  форк CraftBukkit, добавляющий на то время "хорошую оптимизацию" и прочие функции, которые настраиваются в файле `spigot.yml`. Также **не рекомендуется** к использованию

- [Paper](https://papermc.io/software/paper) - форк Spigot, оптимизированное ядро с поддержкой Spigot/Bukkit/Paper плагинов.
  Отличный выбор для тех, кто не знает, с чего начать

- [Pufferfish](https://pufferfish.host/downloads) - форк Paper, включает в себя поддержку всех оптимизаций Paper и также добавляет парочку от себя.
  Лучший выбор для тех, кто не знает, с чего начать

- [Purpur](https://purpurmc.org/) - форк Pufferfish, то есть включает в себя поддержку всех оптимизаций Pufferfish.
  Purpur добавляет множество настроек, которые дают возможность оптимизировать сервер и изменять/отключать ванильные механики. Отличный выбор для серьёзных проектов

- [Leaf](https://github.com/Winds-Studio/Leaf) - форк Purpur, является экспериментальным сборником патчей из многих форков.
  Может неплохо повысить производительность. Но при этом не стоит забывать, что это скорее эксперимент, а не стабильный и готовый к использованию продукт

## Прокси ядра

- [BungeeCord](https://www.spigotmc.org/wiki/bungeecord/) - самое старое прокси-ядро. Не рекомендуется к использованию из-за его нестабильности и наличия огромной пачки уязвимостей

- [WaterFall](https://papermc.io/software/waterfall) - форк BungeeCord, направленный на улучшение стабильности, включающий патчи уязвимостей BungeeCord и новый функционал. На данный момент времени [не поддерживается разработчиками](https://forums.papermc.io/threads/1088/)

- [Velocity](https://papermc.io/software/velocity) - прокси ядро нового поколения, что пришло на замену BungeeCord/Waterfall.
  Сделано разработчиками Paper и рекомендуется к использованию

- [NullCordX](https://builtbybit.com/resources/nullcordx-lightweight-antibot.22322/) - **платное ядро** на основе Waterfall.
  Имеет очень мощную защиту от ботов, обновляется до последних версий, разработчики активны и всегда готовы помочь

## Модовые ядра

- [Forge](https://files.minecraftforge.net/net/minecraftforge/forge/) - самый популярный modloader ввиду большого количества модов, но является не оптимизированным

- [Fabric](https://fabricmc.net/use/server/) - modloader, который в последнее время набрал огромную популярность
  Имеет множество модов на оптимизацию и модов с разнообразными утилитами

- [Quilt](https://quiltmc.org/en/install/server/) - появившийся недавно modloader на основе Fabric, поддерживающий также моды на Quilt

- [NeoForge](https://neoforged.net/) - новый modloader основанный на Forge, без поддержки модов Forge

## Гибриды

:::warning ОБРАТИТЕ ВНИМАНИЕ
Плагины на гибридных серверах могут работать нестабильно/неправильно, в большинстве случаев
авторы плагинов не оказывают поддержки тем, кто запускает их плагины на гибридных серверах
:::

- [Ketting](https://github.com/kettingpowered/Ketting-1-20-x) - основан на Forge, но также поддерживает Bukkit, Spigot и Paper плагины

- [CatServer](https://catmc.org/) - практически то же самое, что Ketting, но имеет поддержку ограниченного количества версий

- [Arclight](https://github.com/IzzelAliz/Arclight) - активно развивающееся ядро с поддержкой Forge, NeoForge, Fabric модов и Bukkit плагино