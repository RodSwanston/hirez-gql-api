# Hirez graphql api server

This is a nodejs graphql server for the Hirez API to simplify making requests and handling the responses.

You can go to [hirez-gql-api.now.sh/graphql](https://hirez-gql-api.now.sh/graphql) and test this server.

>**Note:** This server is still in early stages of development. Some API methods are not yet implemented.

## Installation

**1.** Clone this repo.

```git clone https://github.com/RodSwanston/hirez-gql-api.git```

**2.** Install the dependencies using npm or yarn.

```cd hirez-gql-api```

and

```npm install```

or

```yarn install```

## Setting Up

**1.** Create a `.env` file with the following variables.

```sh
PORT=3000
NODE_ENV=dev | prod
GRAPHIQL=true | false
DEV_ID=YOUR DEV ID
AUTH_KEY=YOUR AUTH KEY
DEF_TYPE=paladins
DEF_PLATFORM=pc
URLS=['http://localhost:3000', 'localhost:3000'] # These will be the urls allowed by CROS
```

**2.** Run the project in dev mode.

```npm run dev```

or

```yarn dev```

Now you can go to [localhost:3000/graphql](http://localhost:3000/graphql) and start testing your local server.

> **Note:** Development credentials can be obtained by completing [this](https://fs12.formsite.com/HiRez/form48/secure_index.html) application.

## Build and deploy

**1.** Build the project.

```npm run build```

or

```yarn build```

Now you can start it in a local enviroment using

```npm start```

or

```yarn start```

**2.** Deploying to [Now](https://zeit.co/now)

```npm run deploy```

or

```yarn deploy```

> **Note:** You might want to use a different .env file for the production server; you can create a .env.production file with the same variables as the .env file and these are going to be used in "Now".

## Links

* [Test the server](https://hirez-gql-api.now.sh/graphql)
* [Now](https://zeit.co/now)
* [GitHub Repository](https://github.com/RodSwanston/hirez-gql-api)
* [Development Credentials Application Form](https://fs12.formsite.com/HiRez/form48/secure_index.html)
* [Official Hi-Rez API Documentation](https://docs.google.com/a/hirezstudios.com/document/d/1OFS-3ocSx-1Rvg4afAnEHlT3917MAK_6eJTR6rzr-BM/edit)
* [Hi-Rez API Terms of Use Agreement](http://www.hirezstudios.com/wp-content/themes/hi-rez-studios/pdf/api-terms-of-use-agreement.pdf)
