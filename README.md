# network-emulation-conditions

Settings for network emulation conditions (e.g Regular 3G, 2G, WiFi, DSL, GPRS and so on). Useful for 
anyone building web performance tooling.

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

These correlate to download throughput, upload throughput and network latency. `REGULAR_3G`
for example is calculated as `750 * 1024 / 8` (750kbps download), `250 * 1024 / 8` (250kbps upload)
and 100ms latency.

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