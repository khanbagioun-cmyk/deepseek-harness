# Uninstall

English | [中文](uninstall.zh.md)

Quit CodeZ before removing it.

## macOS

1. Delete `/Applications/CodeZ.app`.
2. Delete `~/Library/Application Support/CodeZ`.
3. Delete `~/Library/Logs/CodeZ` if present.
4. Delete `~/Library/Caches/com.codez.desktop` if present.

## Windows

1. Open **Settings → Apps → Installed apps → CodeZ → Uninstall**.
2. Silent equivalents: `"%LOCALAPPDATA%\Programs\CodeZ\Uninstall CodeZ.exe" /S`.
3. Delete `%APPDATA%\CodeZ` and `%LOCALAPPDATA%\CodeZ` if present.
4. Delete `%LOCALAPPDATA%\@deepseek-aidsh-desktop-updater` if present.

## Preserved paths

A separately set `DSH_HOME` is never removed by the application. Remove that directory only when it belongs to CodeZ and no other installation uses it.
