<?php

$page = isset($_GET['page']) ?$_GET['page'] :1;

$qty = isset($_GET['qty'])?$_GET['qty']:3;

$path ='data/pinglun.json';

$file = fopen($path,'r');

$content= fread($file,filesize($path));

$data = json_decode($content);


// 格式化数据
$res = array(
    // count数组或对象的个数
          "total" =>count($data), 
          "data" =>array_slice($data,$qty*($page-1),$qty),
          "qty" =>$qty*1,
          "page" =>$page*1 
    );

echo json_encode($res,JSON_UNESCAPED_UNICODE);


?>