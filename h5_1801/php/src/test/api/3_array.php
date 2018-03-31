<?php
    // 添加对象
    $goodlist = array();
    $price = array(998,888,999,1299,6999);

    // 生成十个商品对象
    for($i=0;$i<10;$i++){
        $good = array(
            "name"=>"xiaomi".$i,
            "price"=>$price[array_rand($price)]
            );
        // 将每一个对象保存到对象中
        $goodlist[$i] = $good;
    }
    // 将php数组转化为json字符串
    echo json_encode($goodlist);
?>