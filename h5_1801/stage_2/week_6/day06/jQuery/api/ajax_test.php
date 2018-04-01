<?php
  // 获取前端数据
  $data = isset($_GET['id']) ? $_GET['id'] : null;

  // 从数据库读取商品数据
  $dbhost = 'localhost:3306';
  $dbuser = 'root';
  $dbpass = '';
  $dbname = 'h5_1801';
  $conn = new mysqli($dbhost,$dbuser,$dbpass,$dbname);
  //设置编码
  $conn->set_charset('utf8');
  if($conn){
    echo '连接成功'.$data;
  }
?>
