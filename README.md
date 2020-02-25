# node-ts-simple-crm

Simple CRM developed in node.js/Typescript for evaluating advantages and disadvantages between using ES6 and Typescript for node 
projects.

This project is made using only Typescript and currently is a simple Contacts CRUD express server connecting to a 
Mongo database.

Project cloned from my [node-es6-simple-crm](https://github.com/coderade/node-es6-simple-crm) project.

## Running
 
This project uses the [dotenv](https://github.com/motdotla/dotenv) module to load the environment variables, so on the 
root directory of the project use the following command to copy the env example file to the `.env` file that will be 
used to load the environment variables.

```bash
cp .env-example .env
```

Then, you can edit the Mongo `DB_USER`, the `DB_PASS`, `DB_NAME`,`DB_HOST` and rhe `PORT` environment variables with 
your data, like the following:

```bash
MONGO_DB_USER=user
MONGO_DB_PASS=pass
MONGO_DB_HOST=host.mlab.com:31812
MONGO_DB_NAME=dbname
PORT=3000
```

You can also pass the environment variables on your IDE. 
I use the [WebStorm](https://www.jetbrains.com/webstorm) IDE to debug my Node.js applications, which you can follow this
[tutorial](https://www.jetbrains.com/help/webstorm/run-debug-configuration-node-js.html) to set Node.js environment 
variables in this IDE.

To start we can use:

    npm start

If everything is ok, the console will show the following message:

```bash
> node-ts-simple-crm@1.0.0 start /home/coderade/repo/personal/studies/node-ts-simple-crm
> tsc && ts-node ./dist/index.js

The server is running on port 3000

```
