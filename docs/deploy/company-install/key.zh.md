# 模型密钥设置

[English](key.md) | 中文

CodeZ 内置指向 `https://api.zharfa.tech/v1` 的 `zharfa-qwen` 路由和 `qwen3.8-27b` 模型。该路由从 `ZHARFA_QWEN_API_KEY` 凭据引用读取密钥；密钥不存放在仓库中。

1. 启动 CodeZ，打开**设置 → 模型**。
2. 选择 Zharfa Qwen 路由并粘贴公司提供的密钥。
3. 保存，然后发送一条简短提示并确认收到回复。

每台安装填写一次密钥。密钥保存在 CodeZ 主目录：

- macOS：`~/Library/Application Support/CodeZ/home/.credentials.yaml`
- Windows：`%APPDATA%\CodeZ\home\.credentials.yaml`

在 CodeZ 关闭时，可通过添加以下段落免界面写入：

```yaml
refs:
  ZHARFA_QWEN_API_KEY: 'ah-…'
```

密钥属于公司资产。不要提交到 Git，也不要粘贴到问题跟踪系统。
