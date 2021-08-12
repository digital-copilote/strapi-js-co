This repo is an API boostraped with strapi.
It give you a full modular API with a dashboard where you can manage your ressources.

## Documentation

[STRAPI DOCUMENTATION](https://strapi.io/resource-center)

## Run Locally in dev mode ( Hot reload enabled ) !

Clone the project

```bash
  git clone : https://github.com/digital-copilote/strapi-js-co
```

Go to the project directory

```bash
  cd strapi-js-co
```

Install dependencies

```bash
  npm install
  OR
  yarn install
```

Start the server

```bash
  npm run develop
  OR
  yarn run develop
```

## After installing you have to setup your API.

Go to the server URL ( default : http://localhost:1337 ) : [URL](http://localhost:1337)

It will show you a message who ask you to create your first administrator, so let's do it !

Follow the instructions and log in into the dashboard.

Congratulations ! You just deployed successfully your Strapi API !
Let's have a look now.

You should see a bunch of sections here, some will manage permissions, roles, the others will manage the content of your website.

Here you can :

     - [SUPER_ADMIN] : Manage litteraly everything ! Be carrefull with this account !
     - [ADMIN]       : Manage ressources like users colors etc ...
     - [Author]      : Manage content of the website

**We advise you to carrefully change the settings here, and test it in a dev environment before commiting !**

**Any Changes here will have no effect on your deployed website, keep in mind that is your dev environment and your database is not sync with the one online !**
