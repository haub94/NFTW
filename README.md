# 🚀 Readme for NFTW Adventures Website 🚀

## 💻 Developing
### 1. Install and Run 
Once you've created a project and installed dependencies with `npm install`, start a development server:
```
npm run dev
# or start the server and open the app in a new browser tab
npm run dev -- --open
```

### 2. Working with branches and commits
- NEVER merge a feature-branch into master
- every feature-branch have to be aproved by another contributer
- if you create a new branch, please make sure you generate it from the updated staging
- use the following syntax for branch-naming: NFTW-xx_TicketName (e.g.: NFTW-xx_MakeHeaderNice) | you will find the xx-number at the corresponding ticket at the projectboard
- use sensefull commit-description by starting with add, change, update, delete, ...
- open a merge request with the destination staging
- only the project owner merge staging into master
- default merge-direction:  master ⬅ staging ⬅ feature-branch

### 3. Work with Database
    ...content follows soon

### 4. Codestyle
- use Prettier! shortcut to open search bar VS Code:
    - MacOS: COMMAND + SHIFT + P |>Format Document
    - Windows: CRTL + SHIFT + P |>Format Document
- add the following declaration at the top of your component (set "!" after "<" (its too a comment here and not visible)): \
    <-------------------------------------------\
    Name:          
    Description:             
    Author(s):     
    Date:          JJJJ-MM-DD \
    Version:       VX.Y \
    TODO:          
    -------------------------------------------->
- if you do single changes, please comment with your name and date (syntax.: //JJJJ.MM.DD - lastname, firstname:  descripe the change)


## 🔧 Building
To create a production version of your app:
(❗❗test this for every merge request❗❗)
```
npm run build
```


