# NlpProject

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.0.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Project Explaination:

Install `node.js` which is compatiable with angular CLI. In out case `v18.16.0`
Install angular CLI using `npm install -g @angular/cli`
create project `ng new project-name`
with the above command , project will be created along with all the required `node modules`.
To run angular application `ng serve`, once its started, check the application at `http://localhost:4200/`
Update component.html and component.ts files as per our project requirement.
Import all the required modules in app.module.ts and component.ts files.
calling API in component.ts file:
`http.get('http://44.205.254.38:8000/filedata/'+start_date+'&'+end_date)`.

`Note` : Make sure that front end UI will work only if backend is running.
