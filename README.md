# TechMates (Tech Tips & Tricks Website)

**Live Link** : https://tech-mates-with-nextjs.vercel.app/

# Admin User credentials

     - Admin Email and Password: admin@gmail.com password: 123456
     -  User Email and Password <br/>
        1. keya@gmail.com  and password: 123456
        2. user1@gmail.com and password: 123456
        3. urmy@gmail.comand  password: 123456

# Introduction

The TechMates(Tech Tips & Tricks) project is a dynamic full-stack web application designed to assist tech enthusiasts in mastering the ever-evolving technology landscape. Users can explore expert advice, share personal tech experiences, and contribute user-generated content on various topics including troubleshooting common tech issues, software reviews, gadget insights, and practical digital solutions. <br/>

**The platform features**

- User Registration & Authentication: : Customizable experience with user profiles. <br>
- Premium Content Options : Access to exclusive tips through integrated payment. <br>
- Upvoting & Community Interaction : Users can upvote valuable posts and engage with other tech enthusiasts. <br>
- Following System : Users can follow, unfollow other tech enthusiasts. <br>
- Content Analytics : Users can view detailed analytics on votes, comments, views on the User Profile.<br>
- Admin Dashboard : Comprehensive management of posts, user data, and system settings.<br>

# Technology Stack

**Frontend** <br/>

1. **Next.js**
2. **TypeScript**
3. **NextUI**
4. **Redux and RTK Query**
5. **React Hook form**

**Backend and Database** <br/>

1. **Node.js**
2. **TypeScript**
3. **Express.js**
4. **Mongodb**

# Installation Guideline

**Prerequisites**

1. Node.js (v14 or Higher)
2. MongoDB (Locally Installed or cloud instance ) <br>

**Installation**

1. Clone the repository for Frontend <br>https://github.com/keyamoni05866/techmates-with-nextjs <br>
2. Clone the repository for Backend <br> https://github.com/keyamoni05866/techmates-server <br>
3. Install Dependencies for frontend and backend ---- npm install <br>
4. Set up the Env variables for Frontend: <br>

- BACKEND_API=backend api <br>
- IMAGE_UPLOAD_TOKEN=your imgbb token <br>

5. Set up the Env variables for Backend: <br>

- Create a .env file in the root directory. <br>
- Add the following environment variables:<br>
  PORT=5000<br>
  DATABASE_URL= The connection string for your MongoDB database.<br>
  JWT_ACCESS_SECRET=use your secret<br>
  JWT_ACCESS_EXPIRES_IN= use expiration time<br>
  JWT_REFRESH_SECRET=use refresh secret<br>
  JWT_REFRESH_EXPIRES_IN=use expire time<br>
  STORE_ID=amarpay store id<br>
  SIGNATURE_KEY= amarpay signature key<br>
  PAYMENT_URL=payment url<br>
  PAYMENT_VERIFY_URL=payment verify url<br>
