#!/usr/bin/env bash

# Run build
npm run build || { echo "Build failed"; exit 1; }
sudo cp -r dist/* /var/www/shrimpware.net/ || { echo "Failed to copy files"; exit 1; }
sudo chown -R www-data:www-data /var/www/shrimpware.net/ || { echo "Failed to change ownership"; exit 1; }
sudo chmod -R 755 /var/www/shrimpware.net/ || { echo "Failed to set permissions"; exit 1; }
echo "Done";