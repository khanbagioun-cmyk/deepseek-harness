# Troubleshooting

English | [中文](troubleshooting.zh.md)

## macOS reports “Apple could not verify”

The build is unsigned. Run `xattr -dr com.apple.quarantine /Applications/CodeZ.app`, then launch again. On macOS 15 or later, the UI path is **System Settings → Privacy & Security → Open Anyway**.

## macOS reports “damaged” after copying

Verify the checksum first. Remove the quarantine attribute as above. If it still fails, delete the copy and reinstall from a verified DMG.

## Windows SmartScreen blocks the installer

Choose **More info → Run anyway**. For managed rollout, unblock the file first: `Unblock-File .\codez-<version>-win-x64-unsigned.exe`.

## The installer exits immediately

Run it from PowerShell and capture the exit code: `Start-Process .\codez-<version>-win-x64-unsigned.exe -Wait -PassThru`. The silent switch is `/S`.

## The app opens but requests fail

Confirm the key in **Settings → Models** and that the route is `zharfa-qwen` with model `qwen3.8-27b`. Check network access to `https://api.zharfa.tech/v1`. A missing key reports a credential error.

## Empty workspace after reinstall

Sessions and settings live in the CodeZ home, not the application directory. Confirm `~/Library/Application Support/CodeZ/home` or `%APPDATA%\CodeZ\home` still exists. A separately set `DSH_HOME` overrides that location.

## Logs

- macOS: `~/Library/Logs/CodeZ`
- Windows: `%APPDATA%\CodeZ\logs`

Collect the failing step, its timestamp, the OS version, and the installer checksum.
