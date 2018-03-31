<?php 
    // 表单用户名的验证
    // 接收前端发过来的数据
    $data = isset($_GET['username']) ? $_GET['username'] : '';

    // 模拟数据库
    $dbusername = array('方汉佳','张三','李四','王五','王尼玛','李白');

    // 将数据与数据库的用户名进行对比
    $res = in_array($data,$dbusername);

    if($res){
        echo 'fail';
    }else{
        echo 'success';
    }
?>