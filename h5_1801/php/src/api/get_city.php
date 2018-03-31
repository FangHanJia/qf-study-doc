<?php
    // 服务器代理：根据url获取城市并返回给前端
    
    // 接收ip
    $ip = isset($_GET['ip']) ? $_GET['ip'] : null;
    // $ip = isset($_POST['ip']) ? $_POST['ip'] : null;
    


    // 服务器代理
    $url = 'http://int.dpool.sina.com.cn/iplookup/iplookup.php?format=json&ip='.$ip;
    $content = file_get_contents($url);

    // 将json数据转化为数组/对象
    $res = json_decode($content);
    echo $res->city;
?>