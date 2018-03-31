<?php
    // 数组的类型：
    // 1、索引数组：
    // $arr = [10,20,30,40];
    // var_dump($arr);

    /* 2、关联数组
            *属性名用单引号或者双引号包起来，用箭头=>指向属性值；
    */
    // $arr = ["id"=>001,"name"=>"小米5","color"=>"白色"];
    // var_dump($arr);

    // 3、二维数组
    $arr = [
       ["id"=>001,"name"=>"xiaomi5"],
       ["id"=>002,"name"=>"xiaomi6"]
    ];
    var_dump($arr);
?>