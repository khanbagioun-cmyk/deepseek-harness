# Install on macOS

English | [中文](macos.zh.md)

1. Verify the DMG against `SHA256SUMS` with [verify.md](verify.md).
2. Open the DMG: `hdiutil attach "codez-<version>-mac-arm64-unsigned.dmg" -nobrowse -mountpoint /Volumes/CodeZ`.
3. Copy the application: `ditto "/Volumes/CodeZ/CodeZ.app" /Applications/CodeZ.app`.
4. Remove the download quarantine: `xattr -dr com.apple.quarantine /Applications/CodeZ.app`.
5. Detach: `hdiutil detach /Volumes/CodeZ`.
6. Launch CodeZ from Applications and complete [key setup](key.md).

Without step 4, macOS blocks the first launch. The UI alternative is to right-click the application, choose **Open**, and confirm; on macOS 15 and later, approve it in **System Settings → Privacy & Security → Open Anyway**.

An x64 build on Apple Silicon needs Rosetta once: `softwareupdate --install-rosetta --agree-to-license`.

The first launch creates `~/Library/Application Support/CodeZ/home`. Keep the DMG until the install is verified.
