<?php
function h($str) {
  return htmlspecialchars($str, ENT_QUOTES, 'UTF-8');
}
?>

<!DOCTYPE html>
<html lang="ja" onClick="counter(this)">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <meta name="format-detection" content="telephone=no"/>
  <script src="js/index.js" async></script>
  <script src="script.js"></script>
  <script src="js/select.js"></script>
  <script src="js/filter.js"></script>
  <link rel="stylesheet" type="text/css" href="style.css"/>
  <link rel="stylesheet" type="text/css" href="css/index.css"/>
  <link rel="stylesheet" type="text/css" href="css/filter.css"/>
  <link rel="stylesheet" type="text/css" href="css/log.css"/>
</head>

<body onLoad="timer()">
  <input type="button" id="backBtn" onclick="changeHidden()" value="?"/>
  
  <main id="main">
    <details id="filter">
      <summary id="result"></summary>
      <p>項目を選択すると、これまでに作成したものごとを整理して記録するウェブページ・影響を受けたウェブサイトなどが表示されます。</p>
      <select name="categories">
        <option value="all">I (We)</option>
      </select>
      <select name="type">
        <option value="all">All Type</option>
      </select>
    </details>

    <section id="log">
      <ul class="list">
        <?php require('log.php');?>
      </ul>
      <aside>
        <p id="description"></p>
        <p id="click">
          <u>CLICK</u>
          <b>0</b>
        </p>
        <p id="timer">
          <u>SESSION TIME</u>
          <time></time>
        </p>
        <p id="visit">
          <u>YOU VISITED</u>
          <span></span>
          <u>TIMES HERE</u>
        </p>
        <p id="collection">
          <u>HTMLCollection</u>
          <span></span>
        </p>
        <p id="length">
          <u>LENGHT</u>
          <span></span>
        </p>
        <p id="color">
          <u>COLOR</u>
          <small></small>
        </p>
        <p id="bgColor">
          <u>BACKGROUND COLOR</u>
          <small></small>
        </p>
        <p id="fontFamily">
          <u>FONT FACE</u>
          <small></small>
        </p>
        <p id="lastModified">
          <u>LAST MODIFIED</u>
          <time></time>
        </p>
      </aside>
      <script src="js/random.js"></script>
      <script src="js/timer.js"></script>
      <script src="js/visited.js"></script>
      <script src="js/collection.js"></script>
    </section>
  </main>

  <main hidden>
    <article id="readme"></article>
    <aside>
      <p>
        Author <b id="author"></b><br/>
        Email <a id="email"></a>
      </p>
      <p id="links"></p>
    </aside>
  </main>
</body>
</html>
