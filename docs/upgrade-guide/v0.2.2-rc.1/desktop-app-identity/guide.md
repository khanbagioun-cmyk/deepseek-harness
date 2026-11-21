---
kind: upgrade-guide
description: "Desktop installs as CodeZ with its own bundle identity, user-data directory, and Harness home instead of sharing DeepSeek Harness state."
---
# Desktop installs as a separate CodeZ application

English | [中文](guide.zh.md)

## Change

The desktop bundle identifier changes from `com.deepseek.harness` to `com.codez.desktop`, and Electron user data moves from `@deepseek-ai/dsh-desktop` to `CodeZ` under the platform application-data directory. The installed Harness home now defaults to `home/` below that user-data directory instead of `~/.dsh`, so a CodeZ launch neither locks nor rewrites the profile of a DeepSeek Harness install.

An existing profile, sessions, credentials, plugins, and shortcuts therefore do not appear after the first CodeZ launch. The executable, menu labels, About panel, tray menu, installers, and update identity use CodeZ. Both applications can run at the same time.

## Migration

1. Quit DeepSeek Harness and CodeZ.
2. Copy the old home while the applications are closed: `cp -R ~/.dsh "$HOME/Library/Application Support/CodeZ/home"` on macOS, or `xcopy /E /I "%USERPROFILE%\.dsh" "%APPDATA%\CodeZ\home"` on Windows.
3. Remove the copied profile lock with `rm -rf "$HOME/Library/Application Support/CodeZ/home/profiles/desktop/lock"` (or delete the same directory under `%APPDATA%\CodeZ`) so the next launch recreates it.
4. Optionally copy `desktop/settings.json` and `keybindings.json` from the old `@deepseek-ai/dsh-desktop` user-data directory to the new `CodeZ` one.
5. Launch CodeZ and confirm that existing sessions and plugins appear and that About names CodeZ.

To keep sharing state with the CLI or with DeepSeek Harness, set `DSH_HOME` to the old home before launch. GUI launches do not read shell profiles, so set it with `launchctl setenv DSH_HOME ~/.dsh` on macOS or as a user environment variable on Windows. Two applications that resolve the same `DSH_HOME` contend for `profiles/desktop/lock`, so only one can use that profile at a time.
