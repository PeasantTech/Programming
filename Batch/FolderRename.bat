cd "C:\Rulers\Testing"
setlocal enableDelayedExpansion

set "SEARCHTEXT=Inch"
set "REPLACETEXT=Ruler"

pause
for /d %%F in (*) do (
    set "string=%%F"
    set "modified=!string:%SEARCHTEXT%=%REPLACETEXT%!"
    echo !modified!
    ren "%%F" "!modified!"
    pause
)