<p align="center">
  <img alt="Cypress" src="https://i.imgur.com/mxWKasN.png">

  <img alt="Cypress" src="https://www.volkswagenag.com/presence/news/2019/07/SEAT-from-hardware-to-software_08_HQ.jpg.x_632.y_1000.trans">
</p>



## What is api-automation-seat ?

<b>api-automation-seat</b> is a project that served as a technical test
for SEAT:CODE company.

I used the Cypress framework to do the technical test, which consists
of two exercises: the first checks the API response keys and the second checks one of the key-values. 

## Building and installation

We need to install NodeJS. Cypress supports:

Node.js 14.x
Node.js 16.x
Node.js 18.x and above 

I used the version 18.14.2:

https://nodejs.org/en/blog/release/v18.14.2

See [www.nodejs.org](https://nodejs.org/) for more information.

If you are a Ubuntu user you can do the following:

```sh
sudo apt update
sudo apt install nodejs
node -v
sudo apt install npm
```

If you need a specific version you can use [NVM](https://gndx.dev/blog/instalar-nvm-en-ubuntu-20-04/)

Once Node installed, you must install Cypress. I used the version 12.10.0: 

```sh
# Install Cypress
npm install --save-dev cypress@12.10.0
```

To execute the tests you can open Cypress in UI mode:

```sh
# Start Cypress UI
npx cypress open
```

Or you can run it using headless Chrome if you have this browser installed:

```sh
# Start Cypress with headless Chrome
npm run tests-chrome
```