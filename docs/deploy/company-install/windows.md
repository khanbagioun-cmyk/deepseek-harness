# Install on Windows

English | [中文](windows.zh.md)

1. Verify the EXE against `SHA256SUMS` with [verify.md](verify.md).
2. Remove the download mark: `Unblock-File .\codez-<version>-win-x64-unsigned.exe`.
3. Install interactively, or silently per user: `Start-Process .\codez-<version>-win-x64-unsigned.exe -ArgumentList '/S' -Wait`.
4. If SmartScreen appears, choose **More info → Run anyway**.
5. Launch CodeZ from the Start menu and complete [key setup](key.md).

The silent install needs no administrator rights. The default per-user location is `%LOCALAPPDATA%\Programs\CodeZ`; the Start-menu shortcut and uninstaller are created there.

The first launch creates `%APPDATA%\CodeZ\home`. Keep the EXE until the install is verified.
