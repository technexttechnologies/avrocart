@echo off
REM ==============================================================================
REM AVRO CUSTOMER STOREFRONT — 1-CLICK AUTOMATED DEPLOYMENT SCRIPT (WINDOWS)
REM ==============================================================================

setlocal enabledelayedexpansion
title AVROCART Customer Storefront Deployer

echo ================================================================
echo         AVRO by TECHNEXT -- CUSTOMER STOREFRONT DEPLOYER
echo                  "Your Store. Your Server. Your Rules."
echo ================================================================
echo.

set "DEPLOY_DIR=%~dp0"
cd /d "%DEPLOY_DIR%.."
set "ROOT_DIR=%cd%"

echo Deploy Directory: %DEPLOY_DIR%
echo Project Root:     %ROOT_DIR%
echo.

echo Select deployment mode:
echo   1. Docker Compose (PostgreSQL 16 + Caddy + Next.js)
echo   2. Local Node.js Production Build (Run directly with npm)
echo   3. Initialize Database and Healthcheck Only
echo.
set /p DEPLOY_MODE="Enter choice [1-3] (Default: 2): "
if "%DEPLOY_MODE%"=="" set DEPLOY_MODE=2

if not exist "%DEPLOY_DIR%.env" (
    if exist "%ROOT_DIR%\apps\store\.env" (
        copy "%ROOT_DIR%\apps\store\.env" "%DEPLOY_DIR%.env" >nul
        echo [INFO] Found and copied apps/store/.env
    ) else (
        copy "%DEPLOY_DIR%.env.example" "%DEPLOY_DIR%.env" >nul
        copy "%DEPLOY_DIR%.env.example" "%ROOT_DIR%\apps\store\.env" >nul
        echo [INFO] Created new .env from template.
    )
)

if "%DEPLOY_MODE%"=="1" (
    echo.
    echo [INFO] Starting Docker Compose Stack...
    cd /d "%DEPLOY_DIR%"
    docker compose up -d --build
    echo.
    echo ================================================================
    echo Storefront Running at: http://localhost:3001
    echo First-Time Setup:      http://localhost:3001/setup
    echo Admin Backoffice:      http://localhost:3001/admin/login
    echo Default Credentials:   storeadmin@example.com / storeadmin123
    echo ================================================================
    pause
    exit /b 0
)

if "%DEPLOY_MODE%"=="2" (
    echo.
    echo [INFO] Installing workspace dependencies...
    cd /d "%ROOT_DIR%"
    call npm install

    echo.
    echo [INFO] Initializing Database ^& Prisma Schema...
    call node "%DEPLOY_DIR%scripts\init-db.js"

    echo.
    echo [INFO] Building Storefront for Production...
    call npm run build:store

    echo.
    echo ================================================================
    echo Starting Production Server on http://localhost:3001 ...
    echo Press Ctrl+C to stop.
    echo ================================================================
    call npm --workspace=apps/store run start
    pause
    exit /b 0
)

if "%DEPLOY_MODE%"=="3" (
    echo.
    echo [INFO] Running Pre-flight Diagnostics ^& Database Initialization...
    cd /d "%ROOT_DIR%"
    call node "%DEPLOY_DIR%scripts\test-connection.js"
    call node "%DEPLOY_DIR%scripts\init-db.js"
    pause
    exit /b 0
)
