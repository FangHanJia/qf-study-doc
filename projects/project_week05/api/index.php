<?php

    // 获取数据库数据
    require('connect.php');    


    // 获取四个表，组合成一个数组返回给前端
    $sql_loop = 'select * from index_banner';
    // 首页品牌数据
    $sql_brand = 'select * from index_brand';
    // 首页商品数据
    $sql_goodlist = 'select * from index_goodlist';
    // 首页设计者数据
    $sql_designer = 'select * from index_designer';


    // 结果集
    $result = $conn->query($sql_loop);
    
    $result1 = $conn->query($sql_brand);
    
    $result2 = $conn->query($sql_goodlist);
    
    $result3 = $conn->query($sql_designer);



    // 获取全部数据
    $loop     = $result->fetch_all(MYSQLI_ASSOC);
    $brand    = $result1->fetch_all(MYSQLI_ASSOC);
    $goodlist = $result2->fetch_all(MYSQLI_ASSOC);
    $designer = $result3->fetch_all(MYSQLI_ASSOC);
    // 组合为一个数组；
    $arr = array("loop"=>$loop,"brand"=>$brand,"goodlist"=>$goodlist,"designer"=>$designer);

    // 将数据返回给前端；
    echo json_encode($arr);
?>