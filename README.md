# 👉 Github commit convention

> Message format : <br>`type of commit : commit message`

<br>

**Type of commit**

* feat : implement new features
* settings : set initial state or change style (formatter, ...)
* fix : fix bugs
* markup: adjust markup and css
* refactor : code refactoring
* docs : add or modify documentations

---

# 👉 Feature Implementation list

## Signup / Signin
- [x] Assignment 1
  - [x] write validation code for email and pwd.
  - [x] disable the button if validation fails.

- [x] Assignment 2
  - [x] write code that fetch response through given API for each signup and signin
  - [x] navigate to signin page from signup page when signup btn was clicked and signup was successful.

- [x] Assignment 3
  - [x] navigate to todo page from signin page when signin btn was clicked and signin was successful.
  - [x] store jwt response into localStorage

- [x] Assignment 4
  - [x] redirect to todo page when user access signin or signup page with jwt;
  - [x] redirect to signin page when user access todo page without jwt;

## TODO List
- [x] Assignment 5
  - [x] write code that fetch TODO List
  - [x] show TODO list when user access todo page

- [x] Assignment 6
  - [x] make feature for users to input new TODO
  - [x] make sure new TODO remains the same after refreshing the page.

- [x] Assignment 7
  - [x] make checkbox that can modify completion status.

- [x] Assignment 8
  - [x] make update and delete btn on the right side of TODO.

- [x] Assignment 9
  - [x] implement delete feature of TODO

- [x] Assignment 10
  - [x] implement update feature of TODO

## Refactor
- [x] Divide into files
- [ ] make sure every function has less than 15 lines
- [ ] make sure every function has no more than 3 parameters
- [ ] extract constant values into constant file
- [ ] handle error

## ETC
- [ ] update UI styles
- [x] set routers and page
- [x] write and modify docs
- [x] adjust settings
- [x] setup Context API and useReducer
- [x] add logout feature
- [ ] deploy website