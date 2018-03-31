<?php
    // 验证用户名和密码是否一致
    
    // 连接数据库
    require('connect.php');

    // 接收数据
    $name = isset($_GET['name'])?$_GET['name']:null;
    $password = isset($_GET['password'])?$_GET['password']:null;
    $password = md5($password);

    // $sql = "select name,password from user where name='$name',password='$password'";
    // result = $conn->query($sql);
    $sql = "select name from user where name='$name'";
    $sql2 = "select password from user where password='$password'";
    $result = $conn->query($sql);
    $result2 = $conn->query($sql2);

    // if($result->num_rows>0){
    if($result->num_rows>0 && $result2->num_rows>0){
        echo 'success';
    }else{
        echo 'fail';
    }
?>