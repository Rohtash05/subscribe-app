


Subscription
===


## Prerequisite
- Python3
- Node 10+
- npm
- pip

## Installation 
### Backend 
- Clone the project directory
- cd into `backend`
- If you want you can use `virtualenv`.
- Do `pip install -r requirements.txt`
- To run the server `python manage.py runserver`
- Migrate the Database by `python manage.py migrate`
- Run the Migration of the Database by `python manage.py makemigrations`

### Frontend 
- Clone the project directory
- cd into `frontend`
- Do `yarn install`, if `yarn` is not there please install `yarn` by `npm i -g yarn`
- To run the Project in development mode, do `npm run start`


### Usage

- Subscribe API (Method = POST)
```shell=
curl --location --request POST 'http://127.0.0.1:8000/subscribe' \
--header 'Content-Type: application/json' \
--data-raw '{
    "email":"abc@gmail.com"
}
'
```

- List Subscribers (Method = GET)

```shell=
curl --location --request GET 'http://127.0.0.1:8000/subscribe_list'
```

**Note:- I have not added the validation in the frontend so that we can show the errors from the backend and the list API usage is added using curl**

