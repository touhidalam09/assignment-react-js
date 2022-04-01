## Assignmnt Tasks


## About this Website
> This website is created by React JS for frontend & Bootstrap and use FireBase for backend.
##### Feature of this website: 
  > - It has login and registration feature. and all the data will save into db.
  > - after registration or login, user redirects to dashboard.
  > - client has to have a private routing. If user is not logged into the application, and try to go to dashboard page, it redirect to login page automatically for authentication. If user don't have account he can go to sign up page and register himself. and after authentication it also redirect to previous page. By the way, each login page and registration page must have a hyperlink to travel between.
  > - dashboard contains a sidebar, and main content area. 
  > - there will be a user page, and a product page in dashboard. In user page, he can see all the registered user list. 
  > - In product page, show all the products from server. he can also create update and delete products form the list.
  > - It contains a drop-down in sidebar area to translate the application in at least two languages.


 
 ## Deploy by Firebase hosting using github Action CI/CD
 - ### Before deploy every time run :
    ```
    git add .
    git commit -m "message"
    git push origin main
    ```
    ```
    npm rum build
    ```
    ```
    firebase deploy
    ```
   
## Third Party Package
 - ### React JS :
    ```
    npx create-react-app /my-app
    ```
    ```
 - ### React-router-dom v6: 
    ```
    npm install react-router-dom@6
    ```
  - ### Firebase: 
    ```
    npm install firebase
    ```

## Branch Details
  - ### `main :`
    - Initialize setup project
  - ### `uiDesign :`
    - Login Page, Registration page, dashboard, user page, product page , product form etc.
  - ### `fireBase :`
    - fireBase use for backend, CRUD operation, login, registration, authentication, hosting.
