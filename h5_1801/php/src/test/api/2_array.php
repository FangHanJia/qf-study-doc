<?php
    // 数组的操作
    $arr = [10,20,30,40];
    // 查
    echo "要查找的值：$arr[2]";

    // 添加
    $arr[4] = "我是新添加的值";
    var_dump($arr);

    // 删除
    // unset($arr[2]);
    // var_dump($arr);

    // 修改
    $arr[2] = 'php';
    var_dump($arr);
?>