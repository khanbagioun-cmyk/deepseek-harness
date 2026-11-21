# CodeZ 公司安装包

[English](README.md) | 中文

未签名的 CodeZ 安装包，包含 macOS（arm64 与 x64）和 Windows x64 版本，由 `CodeZ unsigned installers` 工作流从同一提交构建。本包用于内部设备和虚拟机；不包含自动更新、公证或下载站点。

## 安装前

- 复制到设备前，先按发布包中的 `SHA256SUMS` 校验每个文件。
- 安装前为虚拟机创建快照。
- 准备公司提供的 Zharfa 密钥，参见[密钥设置](key.zh.md)。
- macOS：arm64 版本用于 Apple Silicon；x64 版本用于 Intel 或 Rosetta。
- Windows：Windows 11 x64；`/S` 按用户安装，无需管理员权限。

## 内容

| 文件 | 用途 |
| --- | --- |
| `codez-<version>-mac-arm64-unsigned.dmg` | macOS Apple Silicon 安装包 |
| `codez-<version>-mac-x64-unsigned.dmg` | macOS Intel 安装包 |
| `codez-<version>-win-x64-unsigned.exe` | Windows x64 安装包 |
| `SHA256SUMS` | 所有安装包的校验和 |
| `macos.zh.md`、`windows.zh.md` | 安装步骤 |
| `uninstall.zh.md` | 卸载与数据位置 |
| `verify.zh.md` | 校验和验证 |
| `vm.zh.md` | 虚拟机说明 |
| `key.zh.md` | 模型密钥设置 |
| `troubleshooting.zh.md` | 常见故障 |

## 限制

- 未签名且未公证：macOS Gatekeeper 和 Windows SmartScreen 需要按文档一次性绕过。
- 没有更新源：新版本覆盖安装旧包。
- 没有 Linux 桌面版本。Linux 主机可改用 Web profile。
- 模型密钥每台安装填写一次。

## 支持信息

记录操作系统版本、架构、安装包文件名、校验和、启动结果和首个失败步骤。应用日志位于 macOS 的 `~/Library/Logs/CodeZ` 和 Windows 的 `%APPDATA%\CodeZ\logs`；Harness 主目录为 `~/Library/Application Support/CodeZ/home` 或 `%APPDATA%\CodeZ\home`。
