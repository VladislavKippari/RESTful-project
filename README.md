#### This is backend for SPA - https://github.com/VladislavKippari/Worldfrontend
## RESTful-project Node.js+Express+Sequelize 
Software to run project: XAMPP, Node.js
#### 1. Установка проекта
* Клонировать проект в выбранное место командой:
  > git clone https://github.com/VladislavKippari/RESTful-project.git
* Прописать в терминале команду для установки нужных библиотек
  > npm install
#### 2. Настройка БД
* Включить в XAMPP'е Apache и MySQL
* Создать БД с названием *world*
* Прописать команды для занесения данных в БД по очереди:
  >sequelize db:migrate
  >
  >sequelize db:seed --seed 20191009053505-Country
  >
  >sequelize db:seed --seed 20191008090758-seedCity  
  >
  >sequelize db:seed --seed 20191010063004-roles
  >
  >sequelize db:seed --seed 20191230101607-admin
  
  >если в терминале ошибка, когда команда sequelize не распознана, то прописать команду npm install -g sequelize-cli
  
   
    
  или

  >npx sequelize-cli db:migrate
  >
  >npx sequelize-cli db:seed --seed 20191009053505-Country
  >
  >npx sequelize-cli db:seed --seed  20191008090758-seedCity

#### 3. Работа с проектом
* Для включения проекта прописать в терминале команду:
  > npm start
