Set-Location $PSScriptRoot
Set-Location ..

# Stop script if any command fails
$ErrorActionPreference = "Stop"

# ---------------------------
# Install Client Dependencies
# ---------------------------
Write-Host "Installing client dependencies..."
Set-Location ../client
npm install

# ---------------------------
# Install Server Dependencies
# ---------------------------
Write-Host ""
Write-Host "Installing server dependencies..."
Set-Location ../server
npm install

# ---------------------------
# Return to project root
# ---------------------------
Set-Location ..

Write-Host ""
Write-Host "====================================="
Write-Host "Setup Complete"
Write-Host "====================================="
Write-Host ""
Write-Host "Next steps:"
Write-Host "1. Create environment files:"
Write-Host "   - client/.env"
Write-Host "   - server/.env"
Write-Host ""
Write-Host "2. Run the apps:"
Write-Host ""
Write-Host "Terminal 1:"
Write-Host "cd client"
Write-Host "npm run dev"
Write-Host ""
Write-Host "Terminal 2:"
Write-Host "cd server"
Write-Host "npm run dev"
Write-Host ""