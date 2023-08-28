# ORG
**ものごと** を *カテゴリー・ジャンル・タイプ* などで 整理して記録する

## ページ情報を [index.json](/index.json) に記述
*  JSONファイルからHEAD/BODYに要素を生成 [index.js](/js/index.js)
*  [style.css](/style.css) ページで使用するフォントなどを設定[*1]

[*1] : ページをスタイリングするCSS [index.css](/css/index.css) / [filter.css](/css/filter.css) / [log.css](/css/log.css) 

## [index.html](/index.html) **ものごと** を 絞り込む *カテゴリー・ジャンル・タイプ* などを設定
* details id="filter" に絞り込みについての説明文 と select要素・option value="all" の 項目 を記述
* [script.js](/script.js) に 絞り込み に 使用する項目を設定[*2]

[*2] : [select.js](/js/select.js) と [filter.js](/js/filter.js) で絞り込みを実装

## [index.csv](/index.csv) ページに表示する項目を記述
* "名前","品目","説明文",リンク先,絞り込み1,絞り込み2 の順に項目を記述[*3]

[*3] : [log.php](/log.php) CSV から 要素を生成

***

## その他
* [collection.js](/js/collection.js) クリック数、オンマウスした要素名と数、色と背景色 などをページに表示
* [random.js](/js/random.js) 指定した要素の色・背景色をランダム生成
* [timer.js](/js/timer.js) ページ閲覧時間をカウント
* [visited.js](/js/visited.js) ページにアクセスした回数をカウント
