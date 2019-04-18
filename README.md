|<img src="https://github.com/identicons/jasminealee.png" width=100 alt="GitHub identicon for author jasminealee">|
|:-----:|
| [**jasminealee**](https://github.com/jasminealee ) |

# Animal Website

### Two week (weeks 12 and 13) Independent Project in Angular 4/5/19

#### By: Jasmine Lee

## Description
A website that allows a user to input a species and note about that species.

## Hosting Link
https://animal-site.firebaseapp.com

## Specs
Current Functions:

| Behavior| Input | Output|
|----------|:-----:|:------:|
| Click the link "Animal" in the top left corner.| Click "animal" | Redirects page to animals url.|
| On the animals url page, click on a species listed. | Click "dog" | Redirects page to animal/:id url. |
| Click on admin in the top left hand corner | Click "Admin"| Redirects page to admin url. |
| On Admin's page, input species name in species input box and notes in text area box. Then click "Add". | "Dog" ; "They're very loyal."| In the firebase, the new inputted information is saved. On the website, the page will immediately redirect the user to the animals url with the new updated animals list.|
| Click on the link "Welcome" in the upper left corner. | Click "Welcome" | Page redirects to the welcome url.|


Future Functions:

| Behavior| Input | Output|
|----------|:-----:|:------:|
|Click the "Login" link in the upper right corner. | Click "login" | Page redirects to login url.|
|Input gmail address and password. Then click "Sign-In". | "****@gmail.com"; *****; Click "Sign-In" | Page redirects to homepage with inputted login credentials. The user icon in the upper left corner appears as user's gmail icon. |
| Input information to search for in the search bar in the top right corner. | "Dog" | Page redirects to search url listing all links that contain "dog" in the content. |
| On Admin page, click "Delete". | Click "Delete" | Page redirects to delete url. There is a popup that says "are you sure you want to delete this post?" |
| On the delete url page click "yes" | Click "Yes" | Page redirects user to the updated animals url page. |
| On the Admin page, click "Edit" in the middle section beneath the notes text area. | Click "Edit" | Page redirects user to edit url.|

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
* HTML
* Terminal
* Atom
* JavaScript
* TypeScript
* Angular
* CSS
* Firebase
* Jasmine
* Karma

## Support and contact details
If you have any questions or concerns please contact me at: [jasmine.al1722@gmail.com](mailto:jasmine.al1722@gmail.com)

## License
This project is licensed under the [MIT License](https://opensource.org/licenses/MIT). Copyright (C) 2019 Jasmine Lee. All Rights Reserved.

Copyright (c) 2019 [Jasmine Lee](https://github.com/jasminealee)


## Animal-Site.Solution
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
