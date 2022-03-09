# Api

build_api:
	docker build -t todo-api .

run_api:
	docker run --rm -it -p 5000:5000 --name todo-api-test todo-api

stop_api:
	docker stop todo-api-test


# API + DB

build_app:
	docker-compose build --no-cache

run_app:
	docker-compose up --build --force-recreate

stop_app:
	docker-compose stop