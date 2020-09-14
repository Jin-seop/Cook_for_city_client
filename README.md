<p align="center"><img src=https://user-images.githubusercontent.com/64721060/92544882-ebe02c80-f289-11ea-8af1-d0e915abe96f.png></p>

# :bento: PROJECT Cook.Si.In-client
냉장고에 있는 식재료로 뭘해야 할지 답답하지 않으시나요?  
'쿡시인'을 이용해보세요!  
Cook.Si.In은 식재료를 검색하면 관련된 요리 레시피들이 나오는 플랫폼 입니다.

![배경](https://user-images.githubusercontent.com/64721060/92548658-92303000-f292-11ea-953e-aca983973e6e.png)

# :star: Status
<a href="https://gitmoji.carloscuesta.me"> <img src="https://img.shields.io/badge/gitmoji-%20😜%20😍-FFDD67.svg?style=flat-square" alt="Gitmoji?style=flat-square&logo=appveyor"> </a> <a href="https://github.com/codestates/Cook.Si.In-client"><img src ="https://img.shields.io/badge/github-Cook.Si.In-lightgrey?style=flat-square&logo=appveyor"></a>
<img src="https://img.shields.io/badge/npm-v6.14.8-important?style=flat-square&logo=appveyor"> <img src="https://img.shields.io/badge/node.js-v10.19.0-important?style=flat-square&logo=appveyor"> 

# :star: Getting Started

**Using npm** :

1. 이 repository를 **다운로드** or **Git Clone**받으십시오.

2. 상위 디렉토리에 인스톨을 하십시오.

   ```
   $ npm install
   ```
3. 상위 디렉토리를 실행하십시오.

      ```
      $ npm start
      ```

# :star: Client Flow Chart

### [기능 flow 스키마 주소](https://www.figma.com/file/Kj3DCR0NaEdt9Suae6A4gg/CookSIIn?node-id=0%3A1)  
![기능플로우](https://user-images.githubusercontent.com/64721060/92546526-bb01f680-f28d-11ea-8e8b-242efc5f22f3.png)

# :star:  Server Flow chart
![server 기능 flow](https://media.vlpt.us/images/giman789/post/d58fe772-1d45-47ba-a968-07e88cc21003/Untitled%20Diagram-Cooksiin.png)

# :star:  DB Schema
![db스키마](https://user-images.githubusercontent.com/64721060/91732870-cc8b3480-ebe3-11ea-9720-71af3351e938.png) 

# About Service
## :family:Users
   - signin ✔️  
      - get  
      - req.body : userid, password
   - signup :heavy_plus_sign:
      - post
      - req.body : userid, password, email
   - signout :no_good:
      - post
      - destory
   - idcheck ✔️ 
      - post
      - req.body : userid 
 
## :pizza:Recipie
   - metrerials :seedling:
      - get
   - recipesearch :telescope:
      - post
      - req.body : meterial
   - recipedetail :mag:
      - post
      - req.body : title
   - recipefavorites :heavy_plus_sign:
      - post
      - req.body : id 
   - recipefavoritesdelete 🚫
      - put 
      - req.body : id
   - recipecomment :heavy_plus_sign:
      - post
      - req.body : recipe.title, cookcomment.starpoint, cookcomment.comment
   - recipecommentupdate ♻️ 
      - put
      - req.body : users.id, cookcomment.startpoint, cookcomment.comment
   - admincommnetdelete 🚫
      - put
      - req.body : id  

## :hearts:Mypage
   - mypageGet ✔️
      - get
   - setupPut ♻️ 
      - put
      - req.body : email, userId, password
   - Leave :no_good:
      - patch
   - mypagetocomment :rocket:
      - post
      - req.body : recipeid
   - mypagetofavorites :rocket:
      - post
      - req.body : title

# :star: What's included
```text
Client/
└── component/
    │   ├── CheckDeleteUser.tsx
    │   ├── Comment.tsx
    │   ├── EditUserInfo.tsx
    │   ├── LoginPage.tsx
    │   ├── MainPage.tsx
    │   ├── MoveDoSiIn.tsx
    │   ├── MyPage.tsx
    │   ├── PostPage.tsx
    │   ├── SignUp.tsx
Server/    
    └── controller/
        ├── signin.js
        ├── signout.js
        ├── Leave.js
        ├── mypageGet.js
        ├── bootstrap.esm.js
        ├── bootstrap.esm.js.map
        ├── bootstrap.esm.min.js
        ├── bootstrap.esm.min.js.map
        ├── bootstrap.js
        ├── bootstrap.js.map
        ├── bootstrap.min.js
        └── bootstrap.min.js.map
```

# :package: Dependencies
Front-end
  - React Native
  - React Navigation
  - TypeScript
  - Expo
  - Axios

Back-end
  - nodejs
  - express
  - sequelize
  - mysql
  - Amazon EC2
  - AWS RDS
  - PM2
  - cheerio

# :thumbsup: Creator
 ## :boy: Jongwan, Kim / back-end / leader
 - :envelope: GMail: kjw900901@gmail.com
 - :id: GitHub Id: @kimjongwan2
 ## :boy: Jinseop, shin / frontend / member
 - :envelope: GMail: trun3361@gmail.com
 - :id: GitHub Id: @Jin-seop
 ## :boy: giman, Lee / backend / member
 - :envelope: GMail: giman979@gmail.com 
 - :id: GitHub Id: leegiman911