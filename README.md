## What and Why?
Single Page Applications are love! They give a whole amazing experience to users. But what about developers? Developers, specifically backend heroes can't waste time downloading tens of thousands of files and preparing servers for proper Node hosting. They should be able to focus on their core application and functionality.

This boilerplate gives a quick start and any backend, frontend dashboards can be easily added. There may be quite a few unoptimized codes since I'm still developing this, so this is currently not in use for production. I've created an Electron desktop app for one of my clients using this though (backend PHP & SQLite) and it turned out great!

## Goals DESC
- [ ] Add more content to SPA pages for this boilerplate example
- [ ] Add caching for the statically loaded page on hash (though not much useful for small applications, this would be a great addition for scalable ones)
- [ ] PWA replace GitHub icon with actual one (create a new icon)
- [ ] Optimize PWA Code
- [x] Add PWA support
- [x] Pass URL as arguments to function
- [x] Create a separate route.js file for better and scalable routing
- [x] Create basic hash change SPA

## Getting Started
No need to download tens of thousands of files to get this super simple boilerplate running. Just clone the repository or download it, put it anywhere, and run the server to the location. If you use the Apache server, you may put it to your public_html/htdocs/www directory. If you have PHP installed on your system, cd into the project folder and run `php -S localhost:3000` or use Simple HTTP server python the same way.

## Creating New Page
In libs/routes.js, define your new URL route. Format - hash: [ 'script', 'function' ]. The hash change will run the script and function mentioned in the said script. Create a new page in the pages folder and fetch the page in the function mentioned in the routes file.

## PWA Support
100 score on PWA Builder - https://to20.ml/spa-pwa-test

Comes with PWA Support packed. Update `libs/manifest.json` and `service-worker.js` as per need to make sure the PWA works on your localhost or server too.

## First Commit Explained
Usually, everyone does something randomly on their local system and then realizes, "I should have created a git repo for this". But it's too late and you end up writing "Initial Commit" as a message instead of the meaningful message (which can't be practically written since there is a lot to explain). Yes same here, so here is an explanation to first commit - In the first commit, SPA works by checking hash in the URL and opening script in `scripts` folder corresponding to hash. If URL is https://example.com/#/list the script that will execute is `list.js`. There is one common function `loadPage()` which is responsible to load html file saved in `pages` folder.

You may wonder, this approach is not scalable since you can't create a js file for each route. I'll come up with a better idea and keep updating the repository.
