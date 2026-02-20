#!/usr/bin/env bash

echo "Starting project setup..."

# Stop script if any command fails
set -e

echo "Installing client dependencies..."
cd client
npm install

echo "Installing server dependencies..."
cd ../server
npm install

cd ..

echo "-----------------------------------"
echo "Setup complete."
echo "-----------------------------------"
echo "Next steps:"
echo "1. Add environment variables:"
echo "   - client/.env"
echo "   - server/.env"
echo ""
echo "2. Start the apps:"
echo "   Terminal 1:"
echo "   cd client && npm run dev"
echo ""
echo "   Terminal 2:"
echo "   cd server && npm run dev"