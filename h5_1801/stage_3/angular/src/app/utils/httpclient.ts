export default class HttpClient {
    constructor(private http){}
    // 默认url
    baseUrl = 'http://localhost:4200/assets/config/';

    // 过滤url
    urlFilter(_url:string =''){
        if(_url && _url.startsWith('http')){
            return _url;
        }
        return this.baseUrl + _url;
    }

    // get请求
    get(_url){
        let url = this.urlFilter(_url);
        return new Promise((resolve,reject)=>{
            this.http.get(url).subscribe(res=>{
                resolve(res.json())
            })
        })
    }
    // post请求
    post(_url,_obj){
        let url = this.urlFilter(_url);
        return new Promise((resolve,reject)=>{
            this.http.post(_url).subscribe(res=>{
                resolve(res);
            })
        })
    }
}