# Animal Website

### Two week (weeks 12 and 13) Independent Project in Angular 4/5/19

#### By: Jasmine Lee

## Description
A website that allows a user to input a species and note about that species.

## Specs
Current Functions
|---|:---:|:---:|
|Click the link "Animal" in the tope left corner.| Click "animal" | Redirects page to animals url.|
|On the animals url page, click on a species listed | Click "dog" | Redirects to animal/:id url |
| Click on admin in the top left hand corner | Click "Admin"| Redirects page to admin url. |
| On Admin's page, input species name in species input box and input box and notes in text area box. Then click "Add"| "Dog" ; "They're loyal."| |
## Setup/Installation Requirements
* Download Angular and Node Package Manger and install them.
* In the src/app folder create a file called api-keys
* Go to "https://console.firebase.google.com".
* Click "Add project".
* Enter a project name.
* Click the checkbox once you accept the terms.
* Click "Create Project".
* "Your new project is ready" will appear in the popup when your project has been created. Click "continue".
* Select "</>" in the blue panel. Copy your configuration details to the information below. This should appear with your own configuration (your own contents replacing the X's). :

```javascript
export const masterFirebaseConfig = {
  apiKey: XXX,
  authDomain: XXX,
  databaseURL: XXX,
  storageBucket: XXX,
  messagingSenderId: XXX
};
```

* It is important that the object is exported and named "masterFirebaseConfig."
* Navigate to the root directory in Terminal.
* Type "npm install" in the command line.
* When the packages have all been installed type "npm serve" in the command line. The project should then build and open automatically in your browser.

## Known Bugs
None

## Technologies Used
* Terminal
* Atom
* JavaScript
* TypeScript
* Angular

## License


## animal-site.solution
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md). --> -->
