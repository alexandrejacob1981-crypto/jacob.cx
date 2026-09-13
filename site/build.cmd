@echo off
REM Genere le site final dans le dossier dist\
REM Double-clic possible, ou depuis PowerShell :  .\build.cmd

set "PATH=C:\Program Files\nodejs;%PATH%"
cd /d "%~dp0"

echo.
echo   Generation du site...
echo.

call "C:\Program Files\nodejs\npm.cmd" run build

echo.
echo   Termine. Le site est dans le dossier  dist\
echo.
pause
