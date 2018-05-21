Authors: Lubomir Meszaros, Roxana-Catalina Moldovan



Instalation guide: 
Install nodeJs, mongoDB and angular cli
Clone the project (SI repository)
Open the terminal in the project folder
Run: npm install
Run the project:
APP:
- open the terminal in the project folder
- run: ng serve
API: 
- open another terminal in the project folder
- go to: /src
- run: ng build
- go back to the project root folder and run node server

* You might get this error: "No 'Access-Control-Allow-Origin' header is present on the requested resource. ". If you do, install the "Allow-Control-Allow-Origin: *" extension in CHROME.

Set up MongoDB:
- create folder data/db in C:\ (or in the roor directory where you installed MongoDB)
- got to the folder where you installed mongodb
- access MongoDB\Server\3.6\bin
- click on mongo.exe
- after opened click on mongod.exe
TO create the DB:
in the terminal you have opened (mongod.exe) run the commands:
- use siDb (this is the name of the db and it will create the db)

Open  http://localhost:4200/app-register
- register
- login with the account created

To create an admin:
- go to the termnal (monogd.exe)
- run: db.user.save({email:"admin@a.dk", password: "1234", role:2})
ROLE 1 = student
ROLE 2 = admin/teacher
