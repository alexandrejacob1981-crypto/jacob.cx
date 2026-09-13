@echo off
REM Lance l'apercu local du site.
REM Double-clic possible, ou depuis PowerShell :  .\dev.cmd
REM
REM On ajoute Node au PATH nous-memes : tant que Windows n'a pas ete
REM redemarre apres l'installation, il n'y est pas forcement.

set "PATH=C:\Program Files\nodejs;%PATH%"
cd /d "%~dp0"

echo.
echo   Apercu du site sur  http://localhost:4321
echo   Ctrl+C pour arreter.
echo.

call "C:\Program Files\nodejs\npm.cmd" run dev
pause
