# Base
This is an Angular 6 demo site for testing. It's called base because it's the base app for testing other libs like the "external-module".

## Setup
- To include the external module run: "npm link ../external-module"
- Add ```<external-feature-module></external-feature-module>``` to template file
- Remove external related comments in app.module.ts

## Server-Side Rendering
```
$ npm run build:ssr && npm run serve:ssr
```

Relevant files:
- package.json // Holds scripts to build and start ssr
- angular.json // Base->Architect->Server (Webpack-Config for ng-App)
- server.ts // Node.js/Express Server for serving the ssr-app
- webpack.server.config.js // Webpack-Config for building server.ts
- src/main.server.ts // ng-App export app for ssr
- src/app.server.module.ts // ng-App entrypoint for ssr

## Credits
This project was generated with [Angular CLI](https://github.com/angular/angular-cli).