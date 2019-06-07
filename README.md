#The Grand Magus Project

A DOTA2 counter finder; add up to 5 heroes in the enemy team and get their counters.

## Getting started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. 

### Prerequisites
Backend:
    python 3.7
    pipenv
    urllib
    bs4
    Django 2.2
    djongo
    Pillow
    MongoDB
    psycopg2-binary
    djangorestframework
    markdown
    django-filter
    django-cors-headers

Frontend:
    nodeJS
    reactJS
    axios

###Installation 

Copy the github repository to your local machine
```
$ git clone https://github.com/kovacevicnikola/webshop-project
```

Navigate to the backend/src folder and run
```
python manage.py migrate
```


If you want to collect the data yourself, delete 'fixturestr.json' and 'fixtureCT.json' and then, in the shell navigate to   
/backend/src/datafixtures/ and run
``` 
python webscrape.py
``` 
and then
``` 
python heroCT.py
``` 

Otherwise, move the 'fixturestr.json' and 'fixtureCT.json' into the /backend/ just load the collected data to the database via fixtures:
Using the shell, navigate to the /backend/src folder and run
``` 
python manage.py loaddata fixturestr.json
``` 
``` 
python manage.py loaddata fixtureCT.json
``` 

If everything so far is set up, start the server by using
``` 
python manage.py runserver
``` 

Open another shell, navigate to frontend/gui and run
``` 
npm start
``` 
You're all set!