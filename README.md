## What and Why?
I'll add details ASAP

## Goals DESC
- [] Add more content to SPA pages for this boilerplate example
- [] Create separate route.js file for better and scalable routing
- [x] Create basic hash change SPA

## First Commit Explained
Usually everyone do something randomly on their local system and then realize, "I should have created a git repo for this". But it's too late and you end up writing "Initial Commit" as message instead of meaningful message (which can't be practically written since there is lot to explain). Yes same here, so here is explanation to first commit -
Currently SPA work by checking hash in URL and opening script in scripts folder corresponding to hash. If URL is https://example.com/#/list the script that will execute is list.js. There is one common function loadPage() which is responsible to load html file saved in pages folder.

As you may wonder, this approach is totally not scalable since you can't create each js file for each route. I'll come up with better idea and keep updating repository.