


Software to run project: XAMPP, Node.js, Visual Studio code
#### 1. Project setup
* Clone project:
  > git clone https://github.com/VladislavKippari/RESTful-project.git
* Then
  > npm install
#### 2. Database setup
* Turn ON XAMPP Apache and MySQL
* Create local database *world*
* Database setup steps in order:
  >sequelize db:migrate
  >
  >sequelize db:seed --seed 20191009053505-Country
  >
  >sequelize db:seed --seed 20191008090758-seedCity  
  >
  >sequelize db:seed --seed 20191010063004-roles
  >
  >sequelize db:seed --seed 20191230101607-admin
  
 if sequelize command not recognized run command npm install -g sequelize-cli
  
   

#### 3. Run project
* In terminal:
  > npm start
#### 4. Combine with frontend
1. Open two visual studio code window
2. First window for backend
3. Second window for frontend
