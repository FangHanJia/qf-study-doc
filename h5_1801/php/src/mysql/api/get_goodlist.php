<?php
    // 导入连接数据库
    //  1、require()
    //  2、include 关键字；
    require('connect.php');
    
    // 获取查询结果集
    $result = $conn->query('select *from goods ');
    // 获取全部数据
    $res = $result->fetch_all(MYSQLI_ASSOC);
    
    // 关闭结果集
    $result->close();
    // 关闭数据库
    $conn->close();

    //将数据返回给前端
    var_dump($res);
    // e-字符串
    // echo json_encode($res,JSON_UNESCAPED_UNICODE);
?>