# firebase-101-workshop :fire:

## Overview

An intro workshop to [firebase](firebase.google.com) and its core feature using a web client.

The workshop source code is based on firebase [friendly chat codelab](https://github.com/firebase/friendlychat/), but it adds another layer of abstraction (see [step-x](https://github.com/tompere/firebase-101-workshop/tree/master/steps)*.js files and [api.js](https://github.com/tompere/firebase-101-workshop/blob/master/internals/scripts/api.js)), in order to help javascript/ novice programmers focus on firebase SDK usage, and only implement javascript functions.

## The Workshop
* Workshop code has two modes - **step-0** ([`master` branch](https://github.com/tompere/firebase-101-workshop/tree/master)) and **full-solution** ([`full-solution` branch](https://github.com/tompere/firebase-101-workshop/tree/full-solution)).
* The workshop does not require any html/css code, or a use of a javascript framework.
* You should only add javascript code if:
 * in file [`steps/step-X.js`](https://github.com/tompere/firebase-101-workshop/tree/master/steps).
 * in a javascript function with a `TODO(dev)` comment.
* note that every function signature (i.e. the arguments it recieve) should not be modified.
* additional firebase configuration code is required in [storage.rules](https://github.com/tompere/firebase-101-workshop/blob/master/storage.rules) and [database.rules.json](https://github.com/tompere/firebase-101-workshop/blob/master/database.rules.json)
* in e is full with firebase docs links for each step. 


## License
See [LICENSE](LICENSE)
