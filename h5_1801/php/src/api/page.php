<?php
    // 获取前端的数据：页码和数量
    // 读取文件
    // 返回数据
    $page = isset($_GET['page']) ? $_GET['page']:1;
    $qty = isset($_GET['qty']) ? $_GET['qty']:10;

    // 读取文件
    $path = '../data/page.json';
    $file = fopen($path,'r');
    $content = fread($file,filesize($path));
    // 将字符串转为数组/对象
    $arr = json_decode($content);
    // var_dump($arr);
    
    // 格式化数据    
    $res = array(
        "total"=>count($arr),
        "page"=>$page*1,
        "qty"=>$qty*1,
        // 数组截取：数组，$qty*($page-1)索引值：页码开始的地方
        "data"=>array_slice($arr,$qty*($page-1),$qty)
        );
    // var_dump($res);
    // 将数据返回给前端
    echo json_encode($res,JSON_UNESCAPED_UNICODE);
?>