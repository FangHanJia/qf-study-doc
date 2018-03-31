<?php 
    // send方式的请求头：接收前端过来的数据
    header('Content-Type:text/html;charset=utf-8');
    // $msg = isset($_POST['message']) ? $_POST['message'] : null;
    // echo $msg;
    // 创建 对话数组
    $msgArr = array(
        '你好呀！',
        '干嘛！',
        '我在睡觉！',
        '上课吧！',
        '骗你的！',
        '小爱同学！',
        );

    // 将数据返回给前端
    echo $msgArr[array_rand($msgArr)];
    // // 休眠一秒
    sleep(1);
?>