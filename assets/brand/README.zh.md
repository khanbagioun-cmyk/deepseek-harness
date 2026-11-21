# CodeZ 品牌资源

[English](README.md) | 中文

规范矢量源文件。修改后运行 `pnpm run render:brand`；该命令复制运行时 SVG，并重新生成所有栅格图标和托盘位图。不要编辑生成的副本。

## 文件

- `codez-symbol.svg` — 主应用标记，1024 方形，渐变底、白色 `Z` 和青色光标。
- `codez-symbol-mono.svg` — 透明 `currentColor` 标记，用于托盘和单色场景。
- `codez-wordmark.svg` — 作为 `currentColor` 蒙版使用的实心字标。
- `codez-wordmark-light.svg` — 用于深色表面的米白字标。
- `codez-wordmark-color.svg` — 带渐变 `Z` 的浅色字标，用于主视觉。
- `codez-wordmark-dark.svg` — 用于浅色表面的墨色字标。
- `codez-tray.svg` — 单色托盘字形。

## 用法

- 应用图标、favicon、托盘和紧凑界面使用**标记**。应用图标中绝不放入字标。
- 欢迎页和关于界面使用**字标**。产品界面使用蒙版变体以跟随主题。
- 最小尺寸：标记 16 px，字标宽 72 px。
- 标记和字标周围的留白：`Z` 大写高度的一半。
- 不要拉伸、重新着色白色字形、旋转或增加第二层辉光。
- 可遮罩图标将标记保持在保证的安全圆内；底图提供出血。
