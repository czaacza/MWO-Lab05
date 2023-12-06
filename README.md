# MWO-Lab05

Zadanie projektowe: Integracja GitHub Actions z Selenium i Azure DevOps

W ramach projektu proszę o stworzenie i skonfigurowanie pipeline'u CI/CD wykorzystującego GitHub Actions. Pipeline ten ma za zadanie uruchamiać testy UI dla każdego pull requesta w repozytorium GitHub. Testy UI, przygotowane w Selenium, mają automatycznie sprawdzać operacje CRUD w aplikacji webowej opartej o wzorzec MVC. Istotnym elementem systemu jest funkcjonalność, która przy wystąpieniu błędu w trakcie testów, inicjuje proces tworzenia zgłoszenia buga w Azure DevOps.

Proszę o przygotowanie testów UI w Selenium, które będą efektywnie współdziałać z aplikacją, realizując operacje CRUD. Należy zadbać o to, aby sposób raportowania błędów był jasny i przejrzysty.

Kolejny krok to konfiguracja GitHub Actions, która powinna gwarantować automatyczne uruchamianie testów po każdym zgłoszeniu pull requesta. W konfiguracji należy uwzględnić wszystkie niezbędne elementy: przygotowanie środowiska, uruchomienie testów, a także dokumentowanie wyników.

Należy również zintegrować pipeline z Azure DevOps używając REST API. W tym celu proszę o wykorzystanie Personal Access Token z odpowiednimi uprawniesniami do tworzenia work items w Azure DevOps. Token ten powinien być przechowany w sekretach repozytorium GitHub, aby zapewnić bezpieczeństwo danych.

Dokumentację projektu proszę przygotować w formacie markdown (md) i umieścić w repozytorium GitHub. Dokumentacja ma obejmować szczegółowy opis wykonanych kroków, wraz ze zrzutami ekranu ilustrującymi ważne aspekty konfiguracji oraz działanie aplikacji. Proszę uwzględnić dokumentację testów Selenium, konfigurację GitHub Actions oraz integrację z Azure DevOps.

Dodatkowo, proszę przygotować prezentację wideo, która pokaże funkcjonowanie skonfigurowanego systemu: od momentu uruchomienia testów UI, poprzez prezentację wyników, aż po automatyczne tworzenie zgłoszenia błędu w Azure DevOps.


W ramach projektu skonfigurowałem Pipeline CI/CD wykorzystujący Github Actions. Pipeline uruchamia testy UI dla każdego pull requesta dla tego repozytorium. Testy UI przygotowane w Selenium sprawdzają poprawność operacji CRUD w aplikacji webowej.

<img src="https://github.com/czaacza/MWO-Lab05/tree/master/img/crud.png">

<img src="https://github.com/czaacza/MWO-Lab05/tree/master/img/done.png">

Po skonfigurowaniu Github Actions, stworzyłem projekt na Azure Devops oraz Pythonowy skrypt wysyłający request do Azure Devops API tworzący work items. 
Personal Access Token został przechowany jako zmienna secrets w tym repozytorium.

<img src="https://github.com/czaacza/MWO-Lab05/tree/master/img/python.png">
<img src="https://github.com/czaacza/MWO-Lab05/tree/master/img/secrets.png">
