## What and Why?
Single Page Applications are love! They gives a whole amazing experience to user. But what about developers? Developers, specifically backend heros can't waste time in downloading tens of thousands of file and preparing server for proper Node hosting. They should be able to focus on their core application and functionality.

This boilerplate gives a quick start and any backend, frontend dashboards can be easily added. There may be quite few many unoptimized code since I'm still developing this, so this is currently not in use for production. I've created a Electron desktop app for one of my client using this though (backend PHP & SQLite) and it turned out great!

## Goals DESC
- [ ] Add more content to SPA pages for this boilerplate example
- [ ] Add caching for statically loaded page on hash (though not much useful for small applications, this would be a great addition for scalable ones)
- [x] Pass URL as arguments to function
- [x] Create separate route.js file for better and scalable routing
- [x] Create basic hash change SPA

## Getting Started
No need to download tens of thousand of files to get this super simple boilerplate running. Just clone the repository or download it, put it anywhere and run server to the location. If you use Apache server, you may put it to your public_html/htdocs/www directory. If you have PHP installed on your system, cd into project folder and run `php -S localhost:3000` or use Simple HTTP server python the same way.

## First Commit Explained
Usually everyone do something randomly on their local system and then realize, "I should have created a git repo for this". But it's too late and you end up writing "Initial Commit" as message instead of meaningful message (which can't be practically written since there is lot to explain). Yes same here, so here is explanation to first commit - In first commit, SPA works by checking hash in the URL and opening script in `scripts` folder corresponding to hash. If URL is https://example.com/#/list the script that will execute is `list.js`. There is one common function `loadPage()` which is responsible to load html file saved in `pages` folder.

You may wonder, this approach is totally not scalable since you can't create js file for each route. I'll come up with better idea and keep updating repository.
