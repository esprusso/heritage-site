#!/bin/bash

# Ensure the script exits on any error
set -e

echo "🚀 Starting deployment process..."

# Check for uncommitted changes
if [[ -n $(git status -s) ]]; then
    echo "📦 Uncommitted changes found."
    
    # Prompt for commit message
    read -p "Enter commit message: " commit_message
    
    if [[ -z "$commit_message" ]]; then
        echo "❌ Error: Commit message cannot be empty."
        exit 1
    fi

    # Add and commit changes
    echo "git add ."
    git add .
    
    echo "git commit -m \"$commit_message\""
    git commit -m "$commit_message"
    
    echo "git push origin main"
    git push origin main
    
    echo "✅ Source code pushed to main."
else
    echo "✨ No changes to commit. Proceeding to deploy..."
fi

# Run deployment
echo "🚀 Building and deploying to gh-pages..."
npm run deploy

echo "🎉 Deployment complete! Your site should be live in a few minutes."
