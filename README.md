# Money Manager Project 

Project thought to make `Money Tracking Manager APP`. 

Application included hooks like useState,useEffect,useRef and etc. 

And also passed props to different kind of components.

`Included react-router-dom` to manage routing between pages.

`Data comes from Google Firebase and showing it with graphically` even as list and as a graph.

`Thanks to Material UI can be fit for all kind of use .` Material UI is responsible and easy to use.



## npms

- Deleted unnecessary files and lines
- included [router](https://v5.reactrouter.com/web/guides/quick-start) with `npm i react-router-dom`
- included [material ui](https://mui.com/material-ui/getting-started/installation/) `npm install @mui/material @emotion/react @emotion/styled @mui/styles
`
- After that included more component of material ui : `npm install @mui/icons-material`
- created [firebase](https://console.firebase.google.com/) project and then installed firebase with terminal `npm install firebase` and made config file 
- implamentent [Chart](https://react-chartjs-2.js.org/components/chart) `npm install --save chart.js react-chartjs-2`

## Project

It is basicly tracking app for your expenses. When you enter the website you will be see directly login page or register page. You have to be signup for use the website. When you login you will see empty page actually if you first time user. Top of the page will be graph and logout buttons also logo is clickable as home page. Our focus will be on middle of page. It is divided to two pieces on the right side you can add your expenses and on the left side the will be listed. Also when you enter some expenses you can check also how it looks like as graph in Graph link. 

Project uses Google Firebase. It used 2 component of this app. One of them Auth for user managing and another FireStore for managing database.
Firebase has own syntax to fetch and show data. It uses collection based on documant and basicly uses no-sql database.

As react hooks used createContext, useReducer for Auth managing to retrive user state as login or logout.

In project can be seen hooks folder and there are base jobs for minimize and prevent replication inside in other components.

 - For use this app you should run `npm install` and that create firebase account and create firestore database and change in application `config.js` with your own config from firestore. Basicly if you name your firestore db name you dont need to change rest of.

## Some pics from the project 

Home, redirect to the login directly

![Home image](/public/img/home.jpg "Home")


register page

![register image](/public/img/register.jpg "register")

login page, password can be shown with clicking the eye button

![login image](/public/img/login-pass.jpg "login")

![login image](/public/img/login-show-pass.jpg "login")



After succesfully login we see only logout button on the top right and welcoming text. The screen splited into two different part. On the right side we can add new expenses and on the left side we see what we did, also can be deleted by clicking trash-bin icon.

![home image](/public/img/home-user.jpg "home-user")


Graph page

![graph image](/public/img/graph.jpg "graph")

Every user see their own expenses 