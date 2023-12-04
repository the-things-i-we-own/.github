# ORG
**ものごと** を *カテゴリー・ジャンル・タイプ* などで 整理して記録する

## [index.html](index.html)
* head要素内に メタデータ等を記述
* script id="org" に 絞り込み機能を設定

## [index.js](profile/index.js) と [index.json](index.json)
* function allTheThings(obj) に JSONから生成する要素を記述
* JSON に データを追加

```
    {
      "categories": "___",
      "type": "___",
      "title": "___",
      "by": "___",
      "description": "___",
      "url": "___",
      "target": "_blank"
    }

```

## [index.css](index.css)
* ページを独自にスタイリング

## [README.md](profile/README.md)
* ? をクリックすると表示されるテキストを記述

***

#### その他
* [counter.js](profile/js/counter.js) ページ上でのクリック数、閲覧時間をカウント
* [collection.js](profile/js/collection.js) ページ上にあるHTML要素名とその個数、要素に適用されているフォント名を取得
* [colors.js](profile/js/colors.js) 指定した要素の色・背景色をランダム生成し表示
