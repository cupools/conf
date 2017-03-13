## Conf

Provides an easy way to maintain and match configuration in yaml.

## Getting Started

```js
import loader from 'conf'
import Conf from 'conf/main'

let mockOS = null
let mockPF = null
const rules = {
  os: () => MockOS,
  pf: () => MockPF
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

mockOS = 'iOS'
mockPF = 'UCBrowser'
conf.match(raw)
// => 'os=ios&pf=ucbrowser'

mockOS = 'iOS'
mockPF = 'Others'
conf.match(raw)
// => 'os=ios'

mockOS = 'Android'
mockPF = 'Others'
conf.match(raw)
// => 'os=android'
```

## Test

```js
$ npm i && npm test
```
