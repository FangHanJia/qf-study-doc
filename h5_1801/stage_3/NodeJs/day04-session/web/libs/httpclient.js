var http = http || {};

var filterUrl = function(_url){
    var baseUrl = 'http://10.3.133.238:88/';
    if(_url.startsWith('http')){
        return _url
    }
    return baseUrl + _url;
}

http.get = function(){};
http.post = function(_params){
    //show loadding
    $.ajax({
        url: filterUrl(_params.url),
        type: 'post',
        data: _params.data,
        success: function(res){
            if(!res.status && res.message == 'unauth'){
                window.location.href = 'login.html';
            } else {
                _params.cb(res);
            }
            //hide loadding
        }
    })    
};

http.upload = function(_params){
    $.ajax({
        url: filterUrl(_params.url),
        type: 'post',
        data: _params.data,
        contentType: false,
        processData: false,
        success: function(res){
            if(!res.status && res.message == 'unauth'){
                window.location.href = 'login.html';
            } else {
                _params.cb(res);
            }
            //hide loadding
        }
    })      
}