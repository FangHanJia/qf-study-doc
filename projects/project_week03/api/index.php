<?php
    // 首页数据接口
    // 接收前端的数据
    // $data = isset($_GET['data']?$_GET['data']:null;
    // 读取文件
    $path = '../data/index.json';
    $file = fopen($path,'rb');
    $content = fread($file,filesize($path));
    fclose($file);
    // 将字符串转化为数据/对象
    // $data = json_decode($content);
    // var_dump($data);
    
    // 将数据返回给前端
    echo $content;
?>