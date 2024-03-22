Connectify is a full stack social media application that allows users to share posts and interact with friends.

[Connectify's Live Site](https://connectify-fcem.onrender.com/)

![connectify_screenshot](https://github.com/raymondlang/connectify/assets/16345938/1f1f1ae4-3618-4701-8d77-c267a427d2dd)

## Technologies/Frameworks Used:

### Frontend:
![JavaScript](https://img.shields.io/badge/Javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![React](https://img.shields.io/badge/react-676E77?style=for-the-badge&logo=react&logoColor=#61DAFB)
![Redux](https://img.shields.io/badge/Redux-764ABC?style=for-the-badge&logo=redux&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![MUI](https://img.shields.io/badge/MUI-%230081CB.svg?style=for-the-badge&logo=mui&logoColor=white)

### Backend:
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge)

### Deployment:
![Render](https://img.shields.io/badge/Render-%46E3B7.svg?style=for-the-badge&logo=render&logoColor=white)

# Features:

Designed JWT and custom authentication logic highlights my competency in building secure user access systems, essential for safeguarding user data
Introducted globally customizable themes and dark mode to enhance user experience and create visually appeal that caters to diverse user preferences
Implemented React Dropzone to enable seamless and user-friendly file uploads, enhancing user interaction

## Demo User Implementation:
* Feel free to test the site features through clicking the "Demo User" button which will directly log you in

## User Login, Authentication, and Conditional Login/Register Rendering:
* You are able to login as long as your credentials are stored within the database (hashed)
* If there are no matching credentials an error message is displayed
* Login vs register page depending on isLogin state

![connectify demo](https://github.com/raymondlang/connectify/assets/16345938/fcc14ecb-4ff9-42af-b18f-8b1c2e62595d)

## Sign up a User:
* You will be able to sign up and automatically be redirected to the logged in page
* There are validations for signing up such as username length requirements, valid email address, password length, etc
* Friendly reminders will display and signup will be blocked if fields are not properly filled out

![connectify sign up](https://github.com/raymondlang/connectify/assets/16345938/a304848e-0796-46bf-9d8f-ce4a7a7319b7)

## Add Friends

* Users are able to both add and delete other users as friends
* Friends will populate in the Friends list component

![connectify add friend](https://github.com/raymondlang/connectify/assets/16345938/67d532b5-274b-4c74-9d52-15fd51dc88b5)

## Toggle Light / Dark Mode

* Created 2 MUI color themes to support the global toggle for light and dark mode for user's preference
  
![connectify dark mode](https://github.com/raymondlang/connectify/assets/16345938/246185ea-5b73-41a2-ac60-fbf63293e53f)

## Upload Photos with Posts:

* Using react-dropzone, you're able to upload photos along with your post
* On server-side, utitlzied multer, node.js middleware for handling ```multipart/form-data```

![connectify photo upload](https://github.com/raymondlang/connectify/assets/16345938/4e969304-47ac-4caa-8f07-540f87c8a058)

## Features Coming Soon:

* AWS for File Uploads
* Updating User Profile Pictures
* Adding Members to a Server
* Live Friend DMs 
