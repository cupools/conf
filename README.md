## CONF

Provides an easy way to maintain and match configuration in yaml.

## Getting Started

```js
import loader from 'conf'
import Conf from 'conf/main'

const rules = {
  os: () => 'IOS',
  pf: () => 'UCBrowser'
}
const raw = loader`
  _os:
    iOS:
      $: os=ios
      _pf:
        UCBrowser: os=ios&pf=ucbrowser
        WeChat: os=ios&pf=wechat
    Android: os=android
`

const conf = new Conf(rules)
const result = conf.match(raw)
console.log(result)
// => os=ios&pf=ucbrowser
```

## Test
```js
$ npm i && npm test
```
