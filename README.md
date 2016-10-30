# network-emulation-conditions
Network emulation conditions

## Install

```
$ npm install --save network-emulation-conditions
```

## Usage

```js
const conditions = require('network-emulation-conditions');

console.log(conditions.REGULAR_3G);
//=>
{ title: 'Regular 3G',
  download: 96000,
  upload: 32000,
  latency: 100 }
```

## Available conditions

* GPRS
* REGULAR_2G
* GOOD_2G
* REGULAR_3G
* GOOD_3G
* REGULAR_4G
* DSL
* WIFI

These network emulation conditions match those used in the Chrome Developer Tools.

## License

Apache-2.0 © Google Inc.