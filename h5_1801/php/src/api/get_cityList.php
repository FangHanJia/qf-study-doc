<?php
    // 读取城市列表数据并根据前端的需要返回数据
    
    // 接收前端数据
    // $req = $_GET[]

    // 读取文件
    $path = '../data/region.json';
    $file = fopen($path,'r');
    $content = fread($file,filesize($path));

    echo $content;
?>