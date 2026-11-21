@echo off
setlocal DisableDelayedExpansion
if not defined DSH_HOME set "DSH_HOME=%APPDATA%\CodeZ\home"
set "ELECTRON_RUN_AS_NODE=1"
"%~dp0..\..\..\..\CodeZ.exe" --expose-internals "%~dp0..\..\..\app.asar\dsh\node_modules\@deepseek-ai\dsh-desktop-host\lib\cli.js" %*
exit /b %errorlevel%
