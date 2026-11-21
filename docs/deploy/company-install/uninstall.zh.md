# 卸载

[English](uninstall.md) | 中文

卸载前先退出 CodeZ。

## macOS

1. 删除 `/Applications/CodeZ.app`。
2. 删除 `~/Library/Application Support/CodeZ`。
3. 如存在，删除 `~/Library/Logs/CodeZ`。
4. 如存在，删除 `~/Library/Caches/com.codez.desktop`。

## Windows

1. 打开**设置 → 应用 → 已安装的应用 → CodeZ → 卸载**。
2. 静默等价命令：`"%LOCALAPPDATA%\Programs\CodeZ\Uninstall CodeZ.exe" /S`。
3. 如存在，删除 `%APPDATA%\CodeZ` 和 `%LOCALAPPDATA%\CodeZ`。
4. 如存在，删除 `%LOCALAPPDATA%\@deepseek-aidsh-desktop-updater`。

## 保留路径

单独设置的 `DSH_HOME` 不会被应用删除。只有它属于 CodeZ 且没有其他安装使用时才删除该目录。
