Unsigned internal CodeZ installers built from one commit on GitHub-hosted runners.

## Targets

- `codez-0.2.2-rc.1-mac-arm64-unsigned.dmg` — macOS Apple Silicon
- `codez-0.2.2-rc.1-mac-x64-unsigned.dmg` — macOS Intel
- `codez-0.2.2-rc.1-win-x64-unsigned.exe` — Windows 11 x64

## Before installing

1. Verify the installer against `SHA256SUMS`.
2. Read `docs/deploy/company-install/README.md` and the per-OS install page.
3. macOS: remove quarantine with `xattr -dr com.apple.quarantine /Applications/CodeZ.app`.
4. Windows: expect SmartScreen; choose More info → Run anyway, or unblock the file first.
5. Enter the company Zharfa key once in Settings → Models.

## Limitations

- Unsigned and unnotarized; no automatic updates, no notarized Computer Use helper.
- Update UI stays inert without an update feed.
- Model key is not included.
- macOS arm64, macOS x64, and Windows x64 only; no Linux desktop build.

Report the OS version, architecture, installer name, checksum, and first failing step with any issue.
