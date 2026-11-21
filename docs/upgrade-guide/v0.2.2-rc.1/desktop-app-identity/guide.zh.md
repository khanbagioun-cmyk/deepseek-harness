---
kind: upgrade-guide
description: "Desktop 以 CodeZ 身份安装，使用独立的 bundle 标识、用户数据目录和 Harness 主目录，不再共享 DeepSeek Harness 状态。"
---
# Desktop 以独立的 CodeZ 应用安装

[English](guide.md) | 中文

## 变更

桌面应用 bundle 标识从 `com.deepseek.harness` 改为 `com.codez.desktop`，Electron 用户数据也从平台应用数据目录下的 `@deepseek-ai/dsh-desktop` 改为 `CodeZ`。安装版 Harness 主目录改为该用户数据目录下的 `home/`，不再默认为 `~/.dsh`，因此启动 CodeZ 不会锁定或改写 DeepSeek Harness 安装的 profile。

首次启动 CodeZ 后，既有 profile、会话、凭据、插件和快捷键因此不会出现。可执行文件、菜单标签、关于面板、托盘菜单、安装程序和更新身份均使用 CodeZ。两个应用可以同时运行。

## 迁移

1. 退出 DeepSeek Harness 和 CodeZ。
2. 在应用关闭时复制旧主目录：macOS 执行 `cp -R ~/.dsh "$HOME/Library/Application Support/CodeZ/home"`，Windows 执行 `xcopy /E /I "%USERPROFILE%\.dsh" "%APPDATA%\CodeZ\home"`。
3. 用 `rm -rf "$HOME/Library/Application Support/CodeZ/home/profiles/desktop/lock"`（Windows 删除 `%APPDATA%\CodeZ` 下的同一目录）移除复制的 profile 锁，让下次启动重新创建。
4. 可按需把旧 `@deepseek-ai/dsh-desktop` 用户数据目录中的 `desktop/settings.json` 和 `keybindings.json` 复制到新的 `CodeZ` 目录。
5. 启动 CodeZ，确认既有会话和插件出现，并确认关于面板显示 CodeZ。

若要与 CLI 或 DeepSeek Harness 继续共享状态，请在启动前把 `DSH_HOME` 设为旧主目录。GUI 启动不读取 shell 配置，因此 macOS 使用 `launchctl setenv DSH_HOME ~/.dsh`，Windows 使用用户环境变量。解析到同一 `DSH_HOME` 的两个应用会争用 `profiles/desktop/lock`，同一时间只有一个能使用该 profile。
