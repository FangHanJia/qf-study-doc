<?php
  // 获取前端数据
  $data = isset($_GET['id']) ? $_GET['id'] : null;
  echo '我是后台的文件'.$data;
?>
