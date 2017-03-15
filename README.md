[![Build Status](https://travis-ci.org/MapleSyrupGroup/ngx-flash-messages.svg?branch=master)](https://travis-ci.org/MapleSyrupGroup/ngx-flash-messages)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

# @maple-syrup-media/ngx-flash-messages

Flash messages for Angular 2+ [Demo](https://maplesyrupgroup.github.io/ngx-flash-messages/)

# Usage

Add the library to your dependencies
```shell
npm install --save @maple-syrup-media/ngx-flash-messages
```
Import the `FlashMessagesModule` into your main module

```ts
// app.module.ts

import { FlashMessagesModule } from '@maple-syrup-media/ngx-flash-messages';

@NgModule({
  imports: [
    // ...
    FlashMessagesModule,
  ]
})
// ...
```

To display a new flash message we need to make use of the `FlashMessagesService` by importing it, adding it into the component's (or service) dependency injection and using the `show()` method

```ts
// my-component.component.ts
import { Component, OnInit } from '@angular/core';

import { FlashMessagesService } from '@maple-syrup-media/ngx-flash-messages';

@Component({
  selector: 'my-component',
  template: '<h1>My Component</h1>',
})
export class AboutComponent implements OnInit {
  constructor (private flashMessagesService: FlashMessagesService) { }

  ngOnInit() {
    // 1st parameter is a flash message text
    // 2nd parameter is optional. You can pass object with options.
    this.flashMessagesService.show('My component has initialized!', {
      classes: ['alert', 'alert-warning'], // You can pass as many classes as you need
      timeout: 1000, // Default is 3000
    });
  }
}
```

Then you just need to decide where to render your messages (Typically at the top of your page)

```html
<!-- app.component.html -->

<div class="app-container">
  <!-- This is where your flash messages will be displayed -->
  <ngx-flash-messages></ngx-flash-messages>

  <!--
    ...
    Your code
    ...
  -->
</div>
```

The library is css independant, so you're free of using whichever css framework or library of your choosing, or your own css, the [Demo](https://maplesyrupgroup.github.io/ngx-flash-messages/) and the usage guide both use bootstrap classes just as a sample.

# License

The repository code is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).