# CodeZ company install package

English | [中文](README.zh.md)

Unsigned CodeZ installers for macOS (arm64 and x64) and Windows x64, built from a single commit by the `CodeZ unsigned installers` workflow. This package is for internal devices and VMs; it does not include automatic updates, notarization, or a download site.

## Before installing

- Verify every file against the release `SHA256SUMS` before copying it to a device.
- Snapshot a VM before installing.
- Confirm the company-provided Zharfa key is available for [key setup](key.md).
- macOS: arm64 builds run on Apple Silicon; x64 builds run on Intel or under Rosetta.
- Windows: Windows 11 x64; `/S` installs per user without administrator rights.

## Contents

| File | Purpose |
| --- | --- |
| `codez-<version>-mac-arm64-unsigned.dmg` | macOS Apple Silicon installer |
| `codez-<version>-mac-x64-unsigned.dmg` | macOS Intel installer |
| `codez-<version>-win-x64-unsigned.exe` | Windows x64 installer |
| `SHA256SUMS` | Checksums for every installer |
| `macos.md`, `windows.md` | Install steps |
| `uninstall.md` | Removal and data locations |
| `verify.md` | Checksum verification |
| `vm.md` | VM notes |
| `key.md` | Model key setup |
| `troubleshooting.md` | Common failures |

## Limitations

- Unsigned and unnotarized: macOS Gatekeeper and Windows SmartScreen need the documented one-time bypass.
- No update feed: a new version is installed over the old package.
- No Linux desktop build. Linux hosts can run the Web profile instead.
- The model key is entered once per installation.

## Support information to collect

Record the OS version, architecture, installer file name, checksum, launch result, and the first failing step. Application logs are under `~/Library/Logs/CodeZ` on macOS and `%APPDATA%\CodeZ\logs` on Windows; the Harness home is `~/Library/Application Support/CodeZ/home` or `%APPDATA%\CodeZ\home`.
