# MWO-Lab05

Link do prezentacji: https://youtu.be/4eu4dN7LgkA

W ramach Laboratorium 5 skonfigurowałem Pipeline CI/CD wykorzystujący Github Actions. Pipeline uruchamia testy UI dla każdego pull requesta dla tego repozytorium. Testy UI przygotowane w Selenium sprawdzają poprawność operacji CRUD w aplikacji webowej.

![alt text](https://raw.githubusercontent.com/czaacza/MWO-Lab05/master/img/crud.png)
![alt text](https://raw.githubusercontent.com/czaacza/MWO-Lab05/master/img/done.png)

Po skonfigurowaniu Github Actions, stworzyłem projekt na Azure Devops oraz Pythonowy skrypt wysyłający request do Azure Devops API tworzący work items. 
Personal Access Token został przechowany jako zmienna secrets w tym repozytorium.
![alt text](https://raw.githubusercontent.com/czaacza/MWO-Lab05/master/img/token-create.png)
![alt text](https://raw.githubusercontent.com/czaacza/MWO-Lab05/master/img/python.png)
![alt text](https://raw.githubusercontent.com/czaacza/MWO-Lab05/master/img/secrets.png)

W rezultacie, Pipeline prezentuje się następująco:
![alt text](https://raw.githubusercontent.com/czaacza/MWO-Lab05/master/img/cicd.png)


