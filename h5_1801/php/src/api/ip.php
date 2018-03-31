<?php 
    // 获取网络数据
    $path = 'http://2017.ip138.com/ic.asp';
    $content = file_get_contents($path);

    // 设置编码
    $content = iconv('gb2312','utf-8',$content);

    // 正则获取ip :您的IP是：[113.66.108.56] 来自：广东省广州市 电信
    preg_match('/\[((\d{1,3}\.){3}\d{1,3})\]/',$content,$res);
   echo $res[1];
?>