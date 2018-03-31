<?php
    // 验证用户的有效性
     // 连接数据库
    require('connect.php');

    // 前端数据
    $type     = isset($_GET['type'])? $_GET['type'] : null;
    $name     = isset($_GET['name'])? $_GET['name'] : null;
    $password = isset($_GET['password'])? $_GET['password'] : null;

    // 验证用户的有效性
    // 查询数据库是否存在
    $sql = "select name from user where name='$name'";
    // 查询返回结果集
    $result = $conn->query($sql);
    // 结果集返回布尔值：num_rows--》是否存在
    if($result->num_rows>0 ){
        echo 'fail';
    }else{
        // 用户名验证成功
        if($type == 'reg'){
            // 加密密码
            $password = md5($password);
            $sql = "insert into user (name,password) values('$name','$password')";
            if($conn->query($sql)){
                echo 'success';
            }else{
                echo 'fail';
            }
        }else{
            echo 'success';
        }
    }
?>