## 목차

1. [프로젝트의 실행 방법](#프로젝트의-실행-방법)
2. [배포 사이트 주소](#👉-배포-사이트-주소)
3. [기술 스택](#👉-기술-스택)
4. [데모 영상](#👉-데모-영상)
5. [Github commit convention](#github-commit-convention)
6. [Feature Implementation list](#👉-feature-implementation-list)
7. [회고록](#👉-회고록)

# 👉 프로젝트의 실행 방법

> npm install<br>npm start

<br>

# 👉 배포 사이트 주소

https://wanted-pre-onboarding-frontend-mu-silk.vercel.app/

<br>

# 👉 기술 스택

<div align=left>
  <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white">
  <img src="https://img.shields.io/badge/ContextAPI-61DAFB?style=for-the-badge&logo=React&logoColor=white">
  <img src="https://img.shields.io/badge/reactrouter-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white">
  <img src="https://img.shields.io/badge/styledcomponents-DB7093?style=for-the-badge&logo=styledcomponents&logoColor=white">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=white">
</div>

<br>

# 👉 데모 영상

![ezgif com-video-to-gif](https://user-images.githubusercontent.com/50165633/230559119-90ee54b8-2ded-41c2-8223-d5c963ee5e13.gif)
![ezgif com-video-to-gif (1)](https://user-images.githubusercontent.com/50165633/230560805-aa57cf40-9a41-4354-8f89-1f6774d5e0dc.gif)

<br>

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
- [x] make sure every function has less than 15 lines
- [x] make sure every function has no more than 3 parameters
- [x] extract constant values into constant file
- [ ] optimize with useCallback and useMemo
- [x] handle error

## ETC
- [x] update UI styles
- [x] set routers and page
- [x] write and modify docs
- [x] adjust settings
- [x] setup Context API and useReducer
- [x] add logout feature
- [x] deploy website

# 👉 회고록
사실 이 프로젝트가 처음으로 해보는 리액트 프로젝트라 많이 부족한 점이 많았다. <br>
패턴은 ContextAPI를 사용하여 자연스럽게 FLUX 패턴을 사용하게 되었고 <br>
커스텀 훅과 useCallback 등을 이용하여 좀 더 최적화 할 수 있었을텐데 시간이 부족하여 하지 못하였다. <br>
css는 styled 컴포넌트를 처음으로 써보았는데 파일이 분리되지 않는 장점이 있었으나 파일내 코드가 길어지는 단점이 있었다. <br>
아직까지 각 부분들에서 무엇이 best practice며 컨벤션인지 잘 모르겠다.
