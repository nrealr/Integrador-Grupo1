GIT GUIDE


Table of Contents

Most commonly used Git commands.
Steps for update your own branch.
Steps for merge yout branch to develop.
Conventional commit messages.


<a name="git-commands"></a>
1. Git Commands

    git init: Initialize a new Git repository.
    git clone <repository>: Clone an existing Git repository.
    git add <file>: Stage a file for commit.
    git commit -m "<message>": Commit staged changes with a message.
    git push <remote> <branch>: Push local commits to a remote repository.
    git pull <remote> <branch>: Pull changes from a remote repository.
    git branch: List all local branches.
    git checkout <branch>: Switch to a different branch.
    git merge <branch>: Merge changes from one branch to another.
    git stash: Temporarily save changes that you're not ready to commit.

<a name="update-own-branch"></a>
2. Update own branch

    Checkout your branch: git checkout <your-branch>
    Pull the latest changes from the remote repository: git pull <remote> develop
    Make your changes and commit them: git add ., git commit -m "Your message"
    Push your changes to the remote repository: git push <remote> <your-branch>

<a name="merge-branch-with-develop"></a>
3. Merge branch with develop

    Checkout the develop branch: git checkout develop
    Merge your branch into develop: git merge <your-branch>
    Resolve any merge conflicts
    Commit the merge: git commit -m "Merged <your-branch> into develop"
    Push the merge to the remote repository: git push <remote> develop

<a name="conventional-commits"></a>
4. Conventional Commits:

    fix: corrected spelling error in README
    feat: added new API endpoint for user authentication
    refactor: improved error handling in payment processing module
    docs: updated contributing guidelines
    style: fixed formatting issues in source code
    test: added new unit tests for updated payment module
    chore: updated dependencies to latest versions
