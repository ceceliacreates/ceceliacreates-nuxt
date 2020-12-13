---
title: How to clone a GitHub repository
description: Learn how to clone a GitHub repository locally so you can run code and make changes to a project.
img: how-to-clone-a-github-repository.png
alt: screenshot of a GitHub repository
tags:
  - GitHub
---

GitHub is a remote place to store a repository. However, it is not the best place to make changes to our code. In order to properly run, make, and test changes, we'll want to take all the files in the repository and put them on our local machine. We do this by cloning the repository.

**Definition: Repository**

> So what is a repository? A repository is like a folder for your project. A repository can be local (saved to your own computer) or remote (saved to a remote or cloud computer). GitHub is, at its core, a remote place to store and share repositories. [The GitHub documentation has a thorough description of repositories here for more information.](https://docs.github.com/en/free-pro-team@latest/github/creating-cloning-and-archiving-repositories/about-repositories)

## Fork the repo (optional)

If you are not an owner or collaborator of the repository you'll be working with, you'll first need to fork the repository.

The default page for a repository looks like this. There is the username and project name of the repository (1), a main menu that defaults to the Code tab (2), and some action buttons in the upper right (3). Underneath the main menu, we see some information about the branches (4) and some additional action buttons (5).

![Screenshot of GitHub repo page](https://dev-to-uploads.s3.amazonaws.com/i/adlblaqiwij3cm0rfwhf.png)

To fork the repository, click the Fork button. If you have more than one organization you may see a pop-up asking which organization to use to fork the repository. Otherwise the screen will continue and you will eventually see your own forked version of the repository.

**Definition: Fork**

> So what's happening here? Because we do not own the repository, we have to make a copy of it. A fork is simply a copy of a repository. This allows us to make changes without affecting the original codebase. It's important to remember that, at this time, the fork is still a remote repository. It is our remote version of the original project repository.

## Clone the repo

**Distinction: Fork vs Clone**

> Forks and clones are both copies, but the difference has to do with what changes during the copy. With a fork, the owner changes during the copy (original repo owner > you) but the location of the repo (remote) stays the same. With a clone, the owner stays the same (you > you) but the location changes (remote > local).

This breakdown demonstrates the difference:

### Fork

- Owner: Changes (original > you)
- Location: Does Not Change (remote)

### Clone

- Owner: Does Not Change (you)
- Location: Changes (remote to local)

Under the main menu on the repository page in GitHub, there is a green Code button.

![GitHub repo page screenshot with Code button highlighted](https://dev-to-uploads.s3.amazonaws.com/i/cbnnq8q1q1dx41m3ys2m.png)

Clicking on this button brings a menu with some options for cloning. [You can choose to use HTTPS or SSH.](https://docs.github.com/en/free-pro-team@latest/github/using-git/which-remote-url-should-i-use) HTTPS works across all repositories and also works behind a proxy. It requires you to enter your GitHub credentials when cloning, but does not require additional setup. SSH requires the setup of an SSH keypair, but will make it easier going forward if you plan to communicate frequently with GitHub.

For this guide, we'll use HTTPS, however I do recommend learning more about SSH, as it will likely be required in professional development settings.

Copy the URL and open a terminal. Navigate to the directory where you want to copy the repository. If you have a workspace or projects folder that works well, otherwise your Desktop or Home directory is fine.

Enter and run:

`git clone <copied repository URL>`

If all goes well, you'll see some output ending with `Resolving deltas: 100% (x/x), done.`

So what have we done with this command?

Here's where the difference between Git and GitHub becomes important. GitHub, as we know, is a remote place to store repositories. Git, on the other hand, is a local version control system. It is installed on our local computer and helps us keep track of the different versions of our codebase so we can make changes individually without affecting the work of others.

What we've done is tell Git (which is why we used a git command with `git clone`) that we want to make a copy of the remote repository at the given URL onto our machine. Git will link and manage the connection between the local clone and the remote repository for when we are ready to submit our changes.

Now you can `cd` into the newly-created project folder and see all the files and code has been copied. Have fun!

If you use GitHub frequently, check out my post on [automatically creating GitHub issues with Node.js and the GitHub API](https://dev.to/ceceliacreates/create-multiple-github-issues-automatically-from-json-with-node-and-the-github-api-2g1j).
