# spheroRx

spheroのdataStreamingをRxJSで処理するサンプル

* CylonJs
* RxJS

## usage

OSXのみ

1. 資産/依存モジュールの取得
```sh
 $ git clone ThisRepository
 $ cd spheroRx
 $ npm install
```

2. serial portの設定

```sh
$ cp config/sample.yml config/local.yml
$ ls /dev/tty.Sphero*
/dev/tty.Sphero-BBP-AMP-SPP   //<- copy & paste to config/local.yml
```

