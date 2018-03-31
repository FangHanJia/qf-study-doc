<?php
    // 用面向对象思想连接数据库
    
    // 主机名
    $dblocalhost = 'localhost:3306';
    $dbuser      = 'root';
    $dbpass      = '0000';

    $conn = new mysqli($dblocalhost,$dbuser,$dbpass);
    if($conn->connect_error){
        die('connection failed'.$conn->connect_error);
    }
    echo 'connection success!';
    $conn->close();
?>