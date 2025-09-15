setlocal enableDelayedExpansion

echo Working
pause

FOR /l %%i in (1,1,9) do (
    md "Ruler %%i"
)
    pause