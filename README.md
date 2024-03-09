# Take home challenge

If you are here I suppose that you have completed an interview with Quarks Group. Next step is to complete this challenge so that we get a clear understand of your technical capabilities and where you might fit in our team.

## Introduction

NAMES: Roger NIYOMUGABO

BACKGROUND: I am a software developer doing Computer Science from University of Rwanda. Mastery of Node.js, Express.js, and React.js | Contributed to numerous successful web applications.

EMAIL: rogerniyomugabo3@gmail.com

LINKEDIN: https://www.linkedin.com/in/roger-niyomugabo/

ADDRESS: Kigali, Gasabo

## Challenge Details

The proposed challenge is a quiz web application including both a frontend and a backend designed in any language/framework of your choice.

### main features of this quiz challenge:

- LIST quizes
- CREATE quiz
- UPDATE quiz
- DELETE quiz
- DO a quiz (provide results at the end of a quiz)

## Objectives

Our objective is to verify the following elements before we can integrate you:

1. Can you actually write basic code?
2. Can you build beautiful interfaces?
3. How fast can you deliver?
4. Can you improve based on feedback?
5. Can you use collaboration tools like git, GitHub?
6. Can you read documentation?

## Instructions

You are going to fork this repository and complete the introduction section with information about yourself then from there it's you. But if you are no sure how. Follow these steps:

1. Fork this repository. This basically means to make a copy of it hosted on your username(you need to be logged in on GitHub)
   Visit https://github.com/quarksgroup/quiz-challenge Click Fork button (top right) to establish a cloud-based fork.

![how to fork a repo](https://user-images.githubusercontent.com/17580572/112593802-b14a7580-8e10-11eb-9aa0-22c12213b657.png)

2. Make sure you have git installed git on your machine(https://youtu.be/nbFwejIsHlY). Then clone your copy on your machine.

```sh
# using ssh
git clone git@github.com/<your-username>/quiz-challenge

# using https
git clone https://github.com/<your-username>/quiz-challenge.git

# better yet using the github CLI(gh)
gh repo clone <your-username>/quiz-challenge
```

This where you get the urls to use in the previous step but remember to clone your fork of the repository and not this one:
![git urls](https://user-images.githubusercontent.com/17580572/112594639-e905ed00-8e11-11eb-82f2-1046062cb917.png)

3. Update the introduction section of this README.md and make a commit

```sh
# stage the changes
git add README.md

# commit the changes to git tracking
git commit

# or if you don't want to deal with your text editor
git commit -m "Message about what change you just made"
```

If you are in any trouble making commits refer to: https://www.atlassian.com/git/tutorials/saving-changes/git-commit

4. How to make a good commit message for your future self and your team.

- Git commit messages matter because they give other members of the team a clear overview of how the project has evolved. Please carefully read this guide Why good commit messages matter

- Also this repository does not accept commits that are not signed. This has been put in place to make sure malicious forces don't impersonate in of us in this team. To sign your commits you can follow this guide: https://docs.github.com/en/free-pro-team@latest/github/authenticating-to-github/signing-commit

5. For all the changes you will make you have to repeat the 3rd and 4th instructions for help.

6. The last step is to push the changes you have made back to GitHub.

```sh
# first a good developer mush make sure no one else has pushed changes they do not have locally
git pull origin main

# once that is done push their local changes
git push origin main
```

## Final words

We have provided help with the git workflow but now your project is done and has to be deployed somewhere. And that is part of the challenge. You have to choose a privider to host your challenge. Some will go with GitHub pages, Netlify or even Heroku, But hey don't limit yourself we want to see the explorer in you.

## Note

- Your should indicate where your project is hosted in your challenge's footer.
- Your fork that has your code should add a section with instructions on how someone could run your porject on their own machine. And you should assume that their laptop is brand with nothing but the operating system which could be Linux, Windows or MacOS. Which means you must provide instructions for all.
- If you encounter a challenge you can open an issue on this repository and decribe your problem. You can even include some screenshots.![screenshot](https://user-images.githubusercontent.com/17580572/112598156-d7731400-8e16-11eb-9ee1-46b4de5c88fc.png)
- Remember reading, understanding and executing these instructions is part of the challenge.

# Instructions on how to run the project on any machine

Below are the steps that will work you through installation, code download and run the app/project on your machine.

## Installation

### Linux:

1. **Install Node.js and npm:**

   - Open the terminal.
   - Run the following commands:
     ```
     sudo apt update
     sudo apt install nodejs
     sudo apt install npm
     ```

2. **Install PostgreSQL:**

   - Install PostgreSQL using the package manager:
     ```
     sudo apt-get install postgresql
     ```

3. **Install Git:**

   - Run the following command:
     ```
     sudo apt install git
     ```

4. **Clone the Repository:**

   - Run the following command to clone the repository:
     ```
     git clone <repository_url>
     ```

5. **Install Dependencies:**

   - Navigate to the project directory.
   - Run the following command to install dependencies:
     ```
     npm install
     ```

6. **Run the Application:**
   - Open the `package.json` file and check for scripts to run the application.
   - Typically, you can start the application by navigating to the project directory and run:
     ```
     npm run dev
     ```

### Windows:

1. **Install Node.js and npm:**

   - Download the Node.js installer from the official website and follow the installation instructions.
     https://nodejs.org/en/download

2. **Install PostgreSQL:**

   - Download the PostgreSQL installer from the official website and follow the installation instructions.
     https://www.postgresql.org/download/

3. **Install Git:**

   - Download the Git installer from the official website and follow the installation instructions.
     https://git-scm.com/book/en/v2/Getting-Started-Installing-Git

4. **Clone the Repository:**

   - Open Command Prompt or Git Bash.
   - Run the following command to clone the repository:
     ```
     git clone <repository_url>
     ```

5. **Install Dependencies:**

   - Navigate to the project directory in Command Prompt or Git Bash.
   - Run the following command to install dependencies:
     ```
     npm install
     ```

6. **Run the Application:**
   - Open the `package.json` file and check for scripts to run the application.
   - Typically, you can run the application by navigating to the project directory using:
     ```
     npm run dev
     ```

### macOS:

1. **Install Node.js and npm:**

   - Install Homebrew if you haven't already.
   - Run the following command to install Node.js and npm:
     ```
     brew install node
     ```

2. **Install PostgreSQL:**

   - Install PostgreSQL using Homebrew:
     ```
     brew install postgresql
     ```

3. **Install Git:**

   - Git comes pre-installed with macOS. If not, you can install it using Homebrew:
     ```
     brew install git
     ```

4. **Clone the Repository:**

   - Open Terminal.
   - Run the following command to clone the repository:
     ```
     git clone <repository_url>
     ```

5. **Install Dependencies:**

   - Navigate to the project directory in Terminal.
   - Run the following command to install dependencies:
     ```
     npm install
     ```

6. **Run the Application:**
   - Open the `package.json` file and check for scripts to run the application.
   - Typically, you can run the application by navigating to the project directory using:
     ```
     npm run dev
     ```

## Usage

If you are facing challenges with running the application on youe local machine/laptop, follow the link below to the hosted version of the application.
