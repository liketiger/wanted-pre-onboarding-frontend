# 👉 Github commit convention

> Message format : <br>`type of commit : commit message`

<br>

**Type of commit**

* feat : implement new features
* settings : set initial state (formatter, ...)
* fix : fix bugs
* style : fix styles (formatting, ...)
* markup: adjust markup and css
* refactor : code refactoring
* docs : add or modify documentations

---

# 👉 Feature Implementation list

## Signup / Signin
- [ ] Assignment 1
  - [ ] write validation code for email and pwd.
  - [ ] disable the button if validation fails.

- [ ] Assignment 2
  - [ ] navigate to signin page from signup page when signup btn was clicked and signup was successful.

- [ ] Assignment 3
  - [ ] navigate to todo page from signin page when signin btn was clicked and signin was successful.
  - [ ] store jwt response into localStorage

- [ ] Assignment 4
  - [ ] redirect to todo page when user access signin or signup page with jwt;
  - [ ] redirect to signin page when user access todo page without jwt;

## TODO List
- [ ] Assignment 5
  - [ ] show todo list when user access todo page

- [ ] Assignment 6
  - [ ] make feature for users to input new TODO
  - [ ] make sure new TODO remains the same after refreshing the page.

- [ ] Assignment 7
  - [ ] make checkbox that can modify completion status.

- [ ] Assignment 8
  - [ ] make update and delete btn on the right side of TODO.

- [ ] Assignment 9
  - [ ] implement delete feature of TODO

- [ ] Assignment 10
  - [ ] implement update feature of TODO

## Refactor
- [ ] Divide into files
- [ ] make sure every function has less than 15 lines
- [ ] make sure every function has no more than 3 parameters
- [ ] extract constant values into constant file

## ETC
- [ ] update UI styles
- [x] set routers and page
- [x] write and modify docs
- [x] adjust settings
- [ ] deploy website