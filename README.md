# 🌎🚀 Readme NFTW Adventures

## 💻 Developing
### 1. What you need
- git
- node.js version 18.15.0 (you can install it with homebrew or with the download from here: https://nodejs.org/en/download)
- nvm (node version manager) is recomended


### 2. Install and run (at the end is a step-by-step instruction 🏃)
Once you've created a project and installed dependencies with `npm install`, start a development server:
```
npm run dev
# or start the server and open the app in a new browser tab
npm run dev -- --open
```

### 3. Working with branches and commits
- NEVER merge a feature-branch into master
- every feature-branch have to be aproved by another contributer
- if you create a new branch, please make sure you generate it from the updated staging
- use the following syntax for branch-naming: NFTW-xx_TicketName (e.g.: NFTW-xx_MakeHeaderNice) | you will find the xx-number at the corresponding ticket at the projectboard
- use sensefull commit-description by starting with add, change, update, delete, ...
- open a merge request with the destination staging
- only the project owner merge staging into master
- default merge-direction:  master ⬅ staging ⬅ feature-branch

### 4. Work with database
    ...content follows soon

### 5. Codestyle
- use Prettier! shortcut to open search bar VS Code:
    - MacOS: COMMAND + SHIFT + P |>Format Document
    - Windows: CRTL + SHIFT + P |>Format Document
- if you do single changes, please comment with your name and date (syntax.: //JJJJ.MM.DD - lastname, firstname:  descripe the change)

### 6. Adding routes
- add sites with the default header&footer into the directory [[sites]]
- if its necessary to break the default layout (header&footer) --> add the route into the root of routes

## 🔧 Building
To create a production version of your app:
(❗❗test this for every merge request❗❗)
```
npm run build
```

## 📄 Documentation
The documentation is in the project integrated. 
- You will find it by follow the route:  http://127.0.0.1:5173/dev/docu
- Every componend must noted in the docu! --> add a new object to the data-object in the +page.svelte file from the route /dev/docu (use the template!)

## 🔥  Step-by-step instruction
1. switch to the location where you want to have the project directory
2. clone the repo: ``` git clone git@github.com:haub94/NFTW.git ```
3. switch into the created directory and install dependencies: ``` npm install ```
4. run the localhost: ``` npm run dev ``` or ``` npm run dev -- --open ``` to open a new tab in the browser

## TEMP DB CLI
- generate the prisma/client ``` prisma generate ```
- migrate the db ``` npx prisma migrate dev --name <MIGRATION NAME> ```
- start prisma studio: ``` npx prisma studio ```



