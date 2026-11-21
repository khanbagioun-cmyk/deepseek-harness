# Model key setup

English | [中文](key.zh.md)

CodeZ ships the `zharfa-qwen` route pointing at `https://api.zharfa.tech/v1` and the `qwen3.8-27b` model. The route reads its key from the `ZHARFA_QWEN_API_KEY` credential reference; the key is not stored in the repository.

1. Launch CodeZ and open **Settings → Models**.
2. Select the Zharfa Qwen route and paste the company-provided key.
3. Save, then send one short prompt and confirm a reply arrives.

Enter the key once per installation. The key is stored in the CodeZ home:

- macOS: `~/Library/Application Support/CodeZ/home/.credentials.yaml`
- Windows: `%APPDATA%\CodeZ\home\.credentials.yaml`

To seed it without the UI, add this section while CodeZ is closed:

```yaml
refs:
  ZHARFA_QWEN_API_KEY: 'ah-…'
```

The key is company property. Do not commit it to Git or paste it into issue trackers.
