<?php
    // 测试插入数据库
    // require('../mysql/connect.php');
    // $sql = 'insert into user (name,password) values ("fhj","1111")';
    // if($conn->query($sql)){
    //     echo '插入完成';
    // }
    $url = 'name=fhj&password=1111';
    // var_dump(parse_url($url));
    $arr = explode('&',$url);
    $name = explode('=',$arr[0]);
    $password = explode('=',$arr[1]);
    echo $name[1];
    echo $password[1];
?>