# ORG
**ものごと** を *カテゴリー・ジャンル・タイプ* などで 整理して記録する

## [index.html](index.html)
* head要素内に メタデータ等を記述
* script id="org" に 絞り込み機能を設定

## [index.js](js/index.js) と [index.json](index.json)
* function allTheThings(obj) に JSONから生成する要素を記述
* JSON に ページに表示するものごとを追加

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

## [style.css](css/style.css)
## [font.css](css/font.css)
* ページをスタイリング／フォントを指定

## [README.md](README.md)
* ? をクリックすると表示されるテキスト

***

#### その他
* [counter.js](js/counter.js) ページ上でのクリック数、閲覧時間をカウント
* [collection.js](js/collection.js) ページ上にあるHTML要素名とその個数、要素に適用されているフォント名を取得
* [colors.js](js/colors.js) 指定した要素の色・背景色をランダム生成し表示