
## RESTful-project Node.js+Express+Sequelize 
#### This is backend for SPA - https://github.com/VladislavKippari/Worldfrontend
Software to run project: XAMPP, Node.js
#### 1. Project setup
* Clone project:
  > git clone https://github.com/VladislavKippari/RESTful-project.git
* Then
  > npm install
#### 2. Database setup
* Turn ON XAMPP Apache и MySQL
* Create local database *world*
* Database migration in order:
  >sequelize db:migrate
  >
  >sequelize db:seed --seed 20191009053505-Country
  >
  >sequelize db:seed --seed 20191008090758-seedCity  
  >
  >sequelize db:seed --seed 20191010063004-roles
  >
  >sequelize db:seed --seed 20191230101607-admin
  
  >if sequelize command not recognized run command npm install -g sequelize-cli
  
   

#### 3. Run project
* In terminal:
  > npm start
