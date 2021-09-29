<p align="center">
  <img height="400" src="https://user-images.githubusercontent.com/63544185/135279011-2291b516-504c-4119-95de-735e352daef2.png" />
</p>

<h1 align="center">🥚 Munakello ⏰</h1>
  
<p align="center">Munakello (egg timer in Finnish :finland: ) is a simple app with three time options specifically for cooking eggs. </p>
<p align="center">The goal of this project was to create an app that looks and feels like a mobile app but, however, runs in the browser.</p>

<p align="center">
  <img height="300" src="https://user-images.githubusercontent.com/63544185/135285446-1e11cf9c-3405-43af-af8c-9d7c5665f5bd.jpg" />
</p>


<h2>Progressive Web App!</h2>

The solution is to make the project a progressive web app (PWA)! PWAs give us the opportunity to use some features in a web app that previously only mobile apps could use. Some of it's advantages include  installability and running offline. Read more about PWAs in [MDN](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps).

You can install and run the app just like it's any other desktop application - here's how it looks like: 

<p align="center">
  <img height="350" src="https://user-images.githubusercontent.com/63544185/135279810-52a46eda-a40b-4caf-bd43-40819b61f283.png" />
  <img height="350" src="https://user-images.githubusercontent.com/63544185/135279822-c3a4f688-1e99-47b6-a765-16989c8f36ab.png" />
</p>


<h2>Technologies</h2>

* This project is written in [TypeScript](https://www.typescriptlang.org/) with [PreactJS](https://preactjs.com/), which is a faster and lighter alternative to ReactJS.
* [Preact CLI](https://github.com/preactjs/preact-cli/) is used for setup. It sets everything you need to get a progressive web app, using a starter template.
* Page transition (with the coolest water flow animation ever) is implemented using [React Transition Group](https://reactcommunity.org/react-transition-group).

<h2>Run the app with HTTPS using Ngrok</h2>

You need to serve the app using HTTPS to be able to make use of some of the
features of progressive web apps, like installing it to your computer or phone.

- [ngrok - Expose a local web server to the internet](https://ngrok.com/docs#getting-started-expose)
- Run `npm run dev` in one terminal.
- Then run `ngrok http 8080` in another terminal.
- That command will then give you two URLs, use the one with https.
- Now you can access the app using HTTPS, and therefore "installing" works.
