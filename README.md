# Todo list API

La API está hecha con NodeJS, Express y MongoDB.

Corre en el Puerto `5000`.

Para ejecutar una base de datos local, ejecutar el siguiente comando:

```
make run_mongodb
```

o

```
docker run --name mongo -p 27017:27017 -d mongo mongod
```

Las rutas disponibles son:

```
/api/todos
/api/users
```

Ejemplo de uso:

```
[POST] http://localhost:5000/api/todos
```

json:

```json
{
    "name": "test",
    "completed": true,
    "description": "todo de prueba"
}
```

Recomiendo hachar un ojo al ``Makefile`` para ver los comandos que se pueden ejecutar.

🤗🤗
