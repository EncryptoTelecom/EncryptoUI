@ECHO OFF
SET /p component= "Component name: "
CD src/app/components
IF not exist %component% (
MD %component%
) ELSE (
ECHO Component already exist!
GOTO :exit)
TOUCH %component%/%component%.component.ts
@ECHO import { Component } from '@angular/core';> %component%/%component%.component.ts
@ECHO @Component({>> %component%/%component%.component.ts
@ECHO   selector: '%component%',>> %component%/%component%.component.ts
@ECHO   templateUrl: './template.html',>> %component%/%component%.component.ts
@ECHO   styleUrls: ['./styles.sass']>> %component%/%component%.component.ts
@ECHO })>> %component%/%component%.component.ts
CALL :FirstUp ComponentName %component%
@ECHO export class %ComponentName%Component {  }>> %component%/%component%.component.ts
TOUCH %component%/template.html
TOUCH %component%/styles.sass
@ECHO @import "../../../vars"> %component%/styles.sass
CD ../../../
ECHO %ComponentName% component successfully created!

:FirstUp
SETLOCAL EnableDelayedExpansion
SET "temp=%~2"
SET "helper=##AABBCCDDEEFFGGHHIIJJKKLLMMNNOOPPQQRRSSTTUUVVWWXXYYZZ"
SET "first=!helper:*%temp:~0,1%=!"
SET "first=!first:~0,1!"
IF "!first!"=="#" SET "first=!temp:~0,1!"
SET "temp=!first!!temp:~1!"
(
    ENDLOCAL
    SET "ComponentName=%temp%"
    GOTO :eof
)

:exit
CD ../../../
PAUSE
EXIT /b
