# spheroRx

spheroのdataStreamingをRxJSで処理するサンプル

* CylonJs
* RxJS

## 実行方法

OSXのみ

資産/依存モジュールの取得
```sh
 $ git clone ThisRepository
 $ cd spheroRx
 $ npm install
```

Sphero接続の設定

[ここ](https://cylonjs.com/documentation/platforms/sphero/)を参考に、spheroとの接続を設定する。
設定先は`config/default.yml`に変更。

config/default.yml
```yml
config:
  port: '/dev/tty.Sphero-XXX-XXX-XXX'
```
実行
```sh
$ npm start
```
