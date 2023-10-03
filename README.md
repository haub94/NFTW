# 🌎🚀 Readme NFTW Adventures
Disclaimer: The repo contains the code for a fictitious website, which was created as part of a team effort at the university. It does not work out of the box, since all "product"-specific content was swapped out into a database. This was a requirement of our professor. You can create your own database with the appropriate data (see Prisma schema), then the site should work. The following content is very detailed, because in our team, different previous knowledge was available. <br>
**WARNING: All used trademarks are protected by their owners and were only used to illustrate the site. Therefore, these should never be deployed with the logos online!**

Teammembers:
- [AnnaKozachuk2608](https://github.com/AnnaKozachuk2608)
- [danielrittrich](https://github.com/danielrittrich)
- [Lelo1094](https://github.com/Lelo1094)

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
- default merge-direction: master ⬅ staging ⬅ feature-branch

### 4. Codestyle

- use Prettier! shortcut to open search bar VS Code:
  - MacOS: COMMAND + SHIFT + P |>Format Document
  - Windows: CRTL + SHIFT + P |>Format Document

### 5. Adding routes

- add sites with the default header&footer into the directory [[sites]]
- if its necessary to break the default layout (header&footer) --> add the route into the root of routes

## 🔧 Building

To create a production version of your app:
(❗❗test this before merge request❗❗)

```
npm run build
```

## 📄 Documentation

The documentation is in the project integrated.

- You will find it by follow the route: http://127.0.0.1:5173/dev/docu
- Every componend must noted in the docu! --> add a new object to the data-object in the +page.svelte file from the route /dev/docu (use the template!)

## 💾 Prisma and Supabase

To interact with the database (from supabase) the project use Prisma (client).

some importent actions are:

- to interact with the db it needs the prisma client --> generate them with `prisma generate`
- to generate new tables in the db, add a new model to the schema.prisma file and push it to supabase using `prisma db push`
- migrate the db `npx prisma migrate dev --name <MIGRATION NAME>` (do this only if you have insert in all needed datas)
- start prisma studio (manage data, tables and values): `npx prisma studio` (lighweight alternative to the web-dashboard from supabase)

## 🔥 Step-by-step instruction

1. switch to the location where you want to have the project directory
2. clone the repo: `git clone git@github.com:haub94/NFTW.git`
3. switch into the created directory and install dependencies: `npm install`
4. add .env file with the databse-url (you will get this from the owner of the repository)
5. build the project `npm run build`
6. run the localhost: `npm run dev` or `npm run dev -- --open` to open a new tab in the browser
