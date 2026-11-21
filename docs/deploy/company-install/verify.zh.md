# 校验下载文件

[English](verify.md) | 中文

安装前先校验安装包。不匹配表示文件被截断或替换；请重新从发布包下载。

## macOS

```sh
shasum -a 256 -c SHA256SUMS
```

在包含 DMG 和 `SHA256SUMS` 的目录中运行。每行都必须报告 `OK`。

## Windows PowerShell

```powershell
Get-Content SHA256SUMS | ForEach-Object {
  $expected, $name = $_ -split '  ', 2
  $actual = (Get-FileHash $name -Algorithm SHA256).Hash.ToLower()
  "$name $($actual -eq $expected)"
}
```

每行都必须报告 `True`。手动检查单个文件：

```powershell
(Get-FileHash .\codez-<version>-win-x64-unsigned.exe -Algorithm SHA256).Hash.ToLower()
```

将输出值与 `SHA256SUMS` 中对应行比较。
