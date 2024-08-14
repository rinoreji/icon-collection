#!/bin/bash

# Navigate to the Git repository directory
cd ..

# Check if there are any changes
if git diff-index --quiet HEAD --; then
    # No changes
    echo "No changes to commit."
else
    # Changes detected, add all changes to staging
    git add .

    # Commit changes
    git commit -m "Updates by gallery script"

    # Optionally, push changes to remote repository
    git push
fi