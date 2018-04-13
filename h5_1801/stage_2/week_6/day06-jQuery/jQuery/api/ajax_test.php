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


  // 数据库操作
  // 获取所有
  $sql = "select * from xiaomi_phone";
  // 获取单个
  $sql_sigle = "select * from xiaomi_phone where id='$data'";
  // 删除商品
  $sql_delete = "delete from xiaomi_phone where id='$data'";
  if($conn){
    if($data){
      // 删除数据
      $status = $conn->query($sql_delete);
      if($status){
        $result =$conn->query($sql);
        $res = $result->fetch_all(MYSQLI_ASSOC);
        echo json_encode($res,JSON_UNESCAPED_UNICODE);
      }

    }else{
      $result =$conn->query($sql);
      $res = $result->fetch_all(MYSQLI_ASSOC);
      echo json_encode($res,JSON_UNESCAPED_UNICODE);
    }

  }
?>
