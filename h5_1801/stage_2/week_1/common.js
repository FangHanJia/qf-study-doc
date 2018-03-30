/**
 * [randomNumber 用来随机生成任意范围的一个整数]
 * @param  {Number} min [最小值]
 * @param  {Number} max [最大值]
 * @return {Number}     [返回值]
 */
function randomNumber(min,max){
    return parseInt(Math.random()*(max-min+1))+min;
}
/**
 * [foctorial 求解任意整数的阶乘]
 * @param  {Number} n [传进来的整数]
 * @return {Number}   [返回值]
 */
function foctorial(n){
    var sum = 1;
    for(var i = 2 ;i<=n;i++ ){
        sum = sum*i;
    }
    // 没有返回值，则会返回undefined。
    return  sum;
}
/**
 * [fac 利用递归求解任意数的阶乘]
 * @param  {Number} n [任意数的值]
 * @return {Number}   [返回值]
 */
function fac(n){
    //当计算到1时，不进行阶乘计算
    if(n==1){
        return 1;
    }
    return n*fac(n-1);
}
/**
 * [randomColor 随机生成颜色]
 * @return {String} [返回rgb(r,g,b);
 */
function randomColor(){
    //声明rgb的变量
    var r,g,b;
    //使用函数的复用性
    r = randomNumber(0,255);
    g = randomNumber(0,255);
    b = randomNumber(0,255);
    return  'rgb('+r+','+g+','+b+')';
}
/**
 * [bubbleSort 选择排序从小到大排列]
 * @param  {arr[]} arr[] [参数为一个数组]
 * @return {arr[]}       [返回一个数组]
 */
function bubbleSort(arr){
    //选择排序
    for(var i = 0;i<arr.length;i++){
        //从几开始排
        for(var j = i+1;j<arr.length;j++){
            // 从小到大
            if(arr[i]>arr[j]){
                var temp = arr[i];
                arr[i]   = arr[j];
                arr[j]   = temp;
            }
        }
    }
    return arr;
}
/**
 * [leapYear 判断一个年份是否为闰年]
 * @param  {Number} year [传进来的年份整数]
 * @return {Boolean}     [true是闰年，false不是闰年]
 */
 function leapYear(year){
    if(year%400==0||year%4==0 && year%100!=0){
        return true;
    }else{
        return false;
    }
}
