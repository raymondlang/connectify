ByteBud is a full stack social media application that allows users to share posts and interact with friends.

[Click here to view connectify's Live Site](https://connectify-fcem.onrender.com/)

![connectify_screenshot](https://github.com/raymondlang/connectify/assets/16345938/1f1f1ae4-3618-4701-8d77-c267a427d2dd)

## Technologies/Frameworks Used:

### Frontend:
![JavaScript](https://img.shields.io/badge/Javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![React](https://img.shields.io/badge/react-676E77?style=for-the-badge&logo=react&logoColor=#61DAFB)
![Redux](https://img.shields.io/badge/Redux-764ABC?style=for-the-badge&logo=redux&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

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
* There are exactly TWO different guest logins built for users looking to test the real-time messaging capabilities of ByteBud

## Sign up a User:
* You will be able to sign up and automatically be redirected to the logged in page
* There are validations for signing up such as username length requirements, valid email address, password length, etc
* Passwords must be matching when entered twice or the signup button will be disabled
* Friendly reminders will display and signup will be blocked if fields are not properly filled out


## User Login and Authentication:

* You are able to login as long as your credentials are stored within the database (hashed)
* If there are no matching credentials an error message is displayed
* Login button is disabled if there are null fields or if the amount of characters entered is not within the acceptable range


## Live Messaging Between ByteBud Clients:

* You are able to send messages to other ByteBud clients as long as they are within the same server and channel
* You must be logged in to use the live messaging feature

![bytebud messaging](https://github.com/raymondlang/bytebud/assets/16345938/6fef27c3-423c-4d0e-9ad7-e3959ddaf8da)


## Create a Server
* Users are able to create a server and add their friends to a server

![bytebud create server](https://github.com/raymondlang/bytebud/assets/16345938/299e854b-cf8e-4966-8319-733b215af633)

## Create a Channel
* Create a channel for your friends by topic or interest

![bytebud create channel](https://github.com/raymondlang/bytebud/assets/16345938/2bfd8bb2-beac-4736-81ec-3c40ca8e5e17)

## React to Messages with Emojis

* Users are able to react to messages with emojis
* Users can see each other's reactions

![bytebud emoji reactions](https://github.com/raymondlang/bytebud/assets/16345938/54dcf2f6-89e0-49f8-80dc-a514b1d984d3)

## Features Coming Soon:

* AWS for File Uploads
* Updating User Profile Pictures
* Adding Members to a Server
* Live Friend DMs 
