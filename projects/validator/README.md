# Passcode validator Components for Angular applications
-----
This package contains a UI component for password validator built on top of [Angular Material library and Component Development Kit](https://material.angular.io/).

## Angular version compatibility
-----
|  versions | Compatible Angular versions  |
|---|---|
|  0.0.1 | 14  |

## Setup

Prerequisite:
```
ng add @angular/material
npm i bootstrap
```

Install the package in your Angular project by using one of the commands below, according to the package manager chosen.

NPM:
```
npm install passcode-validator
```

Import the NgModule from one of the sub-packages where the component is provided. 
For example:

MODULE :
```
import { PasscodeValidatorModule } from 'passcode-validator';
@NgModule({
	declarations: [],
	imports: [PasscodeValidatorModule]
})
export class MyModule {}
```
HTML :
```
<passcode-validator-lib></passcode-validator-lib>
```

## Customization
```
<passcode-validator-lib
[matLabel] = '"Enter Password"'  // Default 'Password'
[matErrorWeak] = '"you have entered a weak password"' // Defaut 'Weak password'
[matErrorInvalid] =  '"you have entered a invalid password"' // Defaut 'Invalid password'
[matFormFieldAppearance] = '"outline" | "legacy" | "etc"' // Default 'legacy'
></passcode-validator-lib>
```

## Setup
To incorporate components' theming with Angular Material, you need to configure a custom theme, following the [theming guide on the Angular Material document site](https://material.angular.io/guide/theming#custom-themes-with-sass). In the global style SASS partial where the Material theme is configured, add the BUI theme mixin reference to activate theming.

You may also need to include the CSS of custom font definitions for [Material Icon Font into](https://fonts.google.com/icons) the global stylesheets.

## Keywords
[Angular](https://www.npmjs.com/search?q=keywords:Angular) [Angular Material](https://www.npmjs.com/search?q=keywords:Angular%20Material) [UI library](https://www.npmjs.com/search?q=keywords:UI%20library) [bootstrap](https://www.npmjs.com/search?q=keywords:bootstrap)
