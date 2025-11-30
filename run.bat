@echo off
echo ==========================================
echo   MinimalistColors - Inicializador
echo ==========================================
echo.

echo [1/2] Verificando e instalando dependencias...
call npm install
if %errorlevel% neq 0 (
    echo.
    echo [ERRO] Falha ao instalar dependencias. Verifique se o Node.js esta instalado.
    pause
    exit /b %errorlevel%
)

echo.
echo [2/2] Iniciando o servidor de desenvolvimento...
echo.
echo A aplicacao estara disponivel em: http://localhost:5000
echo Pressione Ctrl+C para parar o servidor.
echo.
start http://localhost:5000
call npm run dev

pause
