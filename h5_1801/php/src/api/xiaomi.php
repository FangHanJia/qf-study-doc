<?php
    // 获取前端发过来的数据
    // 1、打开文件
    // 2、获取内容
    // 3、判断

    // 获取前端的数据
    $data = isset($_GET['id']) ? $_GET['id']:null;
    // 打开文件
    $url = '../data/xiaomi.json';
    $myfile = fopen($url,'r');
    $content = fread($myfile,filesize($url));

    // 关闭文件
    fclose($myfile);
    $arr = json_decode($content,true);
    // var_dump($arr);
    $res;    
    for($i=0;$i<count($arr);$i++){
        if($arr[$i]['id'] == $data){
            $arr[$i]['count']++;
            $res = $arr[$i];
        }
    }
    
    // 再次打开文件
    $file = fopen($url,'w');
    // 将数据发送回前端
    echo json_encode($res);
   
    // // 重新写入
    fwrite($file,json_encode($arr));
    fclose($file);
    
?>