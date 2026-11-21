# 故障排查

[English](troubleshooting.md) | 中文

## macOS 报告“Apple 无法验证”

构建未签名。运行 `xattr -dr com.apple.quarantine /Applications/CodeZ.app` 后再次启动。macOS 15 或更高版本的界面路径是**系统设置 → 隐私与安全性 → 仍要打开**。

## 复制后 macOS 报告“已损坏”

先校验校验和，再按上文移除隔离属性。仍然失败时删除副本，并用已校验的 DMG 重装。

## Windows SmartScreen 阻止安装程序

选择**更多信息 → 仍要运行**。受管批量部署可先解除文件标记：`Unblock-File .\codez-<version>-win-x64-unsigned.exe`。

## 安装程序立即退出

在 PowerShell 中运行并捕获退出码：`Start-Process .\codez-<version>-win-x64-unsigned.exe -Wait -PassThru`。静默开关为 `/S`。

## 应用启动但请求失败

确认**设置 → 模型**中的密钥，以及路由为 `zharfa-qwen`、模型为 `qwen3.8-27b`。检查到 `https://api.zharfa.tech/v1` 的网络访问。缺少密钥会报告凭据错误。

## 重装后工作区为空

会话和设置位于 CodeZ 主目录，而非应用目录。确认 `~/Library/Application Support/CodeZ/home` 或 `%APPDATA%\CodeZ\home` 仍然存在。单独设置的 `DSH_HOME` 会覆盖该位置。

## 日志

- macOS：`~/Library/Logs/CodeZ`
- Windows：`%APPDATA%\CodeZ\logs`

收集失败步骤、时间戳、系统版本和安装包校验和。
