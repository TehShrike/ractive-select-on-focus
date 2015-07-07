Decorate the elements in your [Ractive](http://ractivejs.org) template so that the text inside them gets selected when they gain focus.

## Install

```js
npm install ractive-select-on-focus
```

## Usage

In your code:

```js
Ractive.decorators.selectOnFocus = require('ractive-select-on-focus')
```

In your template:

```html
<input type="text" decorator="selectOnFocus" value="{{shareUrl}}" readonly>
```

## License

[WTFPL](http://wtfpl2.com)
