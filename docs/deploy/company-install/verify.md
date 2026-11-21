# Verify the download

English | [中文](verify.zh.md)

Verify the installer before installing. A mismatch means the file was truncated or replaced; download it again from the release.

## macOS

```sh
shasum -a 256 -c SHA256SUMS
```

Run it in the directory containing the DMG and `SHA256SUMS`. Every line must report `OK`.

## Windows PowerShell

```powershell
Get-Content SHA256SUMS | ForEach-Object {
  $expected, $name = $_ -split '  ', 2
  $actual = (Get-FileHash $name -Algorithm SHA256).Hash.ToLower()
  "$name $($actual -eq $expected)"
}
```

Every line must report `True`. To check one file manually:

```powershell
(Get-FileHash .\codez-<version>-win-x64-unsigned.exe -Algorithm SHA256).Hash.ToLower()
```

Compare the printed value with the matching line in `SHA256SUMS`.
