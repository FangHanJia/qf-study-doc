<?php
    // 连接数据
    $dbhost = 'localhost:3306';
    $dbuser = 'root';
    $dbpass = '';
    $dbname = 'h5_1801';

    // 面向对象连接数据库
    $conn = new mysqli($dbhost,$dbuser,$dbpass,$dbname);
    // 设置当前编码
    $conn->set_charset('utf8');
    // echo '数据库连接成功！';
?>