# REST API for CRUD Operation.
A sample node.js api for emulating the CRUD operations performed in a bookstore. These are the following steps needed to run the API in local environment.
## Technology Stack and Dependencies...
### Technology Stack 
<img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" /> ㅤ <img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" /> ㅤ <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" /> ㅤ <img src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white" />

### Frameworks and Applications
<img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" />ㅤ  <img src="https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=Postman&logoColor=white" />ㅤ 
**DOTENV**ㅤ 
**MONGOOSE**ㅤ 
<img src="https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=JSON%20web%20tokens&logoColor=white" />

## Steps to run the code on Local Machine.

**Note**  
`Only rest api with https support can be deployed behind API, make sure to enable https support in your rest api.
`   
This sample express app, has https enabled already.    

### 1). Clone the repository, install node packages  and verify routes locally

```
//on local
git clone https://github.com/ashutoshkumarquovantis/CRUD_via_REST_API
cd CRUD_via_REST_API
npm install
npm run auth //to run login page

//Do it in other terminal.
npm run server //to run server for operations
```
### 2). Download Postman and do the following steps in it.
1. Open Postman and make a new Get request as follows:-
```
http://localhost:4000/bookstore/login
```
The above code will give an authorization token in response (copy it) which we will use later. (Copy the token which looks like the following)
```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Im5hbWUiOiJBc2h1dG9zaCIsImVtYWlsIjoiYXNodXRvc2hAZ21haWwuY29tIn0sImlhdCI6MTYzNDIxNzQ3OX0.kNZ9he20z8Y5P9NDNgWcnncQdYZ_npPJPvFkAkteXUz
```
2. Now make a GET/Post/Delete/Patch request to get the data from the database, but without this token you are going to get "401-Forbidden". To avoid this HTTP error go to Authorization tab of postman, select "type" as "Bearer Token" and paste the token (that you copied earlier) inside the token field that you see.
Do the above step for all the requests that you make in your future calls.

### 3). API calls allowed to make in this API.
```
http://localhost:8000/bookstore //GET/POST -> Select in Postman Application.
http://localhost:8000/bookstore/:id //PATCH/DELETE
```
Since this is a REST API, hence these are the basic routes you need, to perform CRUD operation.

Replace ":id" with the unique id of the database that you get in database such as MongoDB (Eg: 616586121c7a5f440b52c455). 
