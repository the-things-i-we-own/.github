<?php
$csv1 = fopen("index.csv", 'r');
flock($csv1, LOCK_SH);
while ($row = fgetcsv($csv1)) {
  $rows[] = $row;
}
?>

<?php if(!empty($rows)):?>
  <?php shuffle($rows); foreach ($rows as $row):?>
    <li data-categories="<?=h($row[4])?>" data-type="<?=h($row[5])?>" class="hidden">
      <p>
        <u><?=h($row[1])?></u>
        <a href="<?=h($row[3])?>"><?=h($row[0])?></a>
      </p>
      <p><small><?=h($row[2])?></small></p>
    </li>
  <?php endforeach;?>
<?php else:?>
<?php endif;?>
