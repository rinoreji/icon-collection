#!/bin/bash
# Navigate to the Git repository directory
cd .. # moving to parent folder to add new files created in icons folder (git add .)
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
# ran git update-index --chmod=+x .\run-commit.sh to give this file executable permissions