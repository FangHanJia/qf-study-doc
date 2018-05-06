import axios from 'axios'
import router from '../router/router.js'

const baseUrl = 'http://10.3.133.238:88/'

let filterUrl = (_url) => {
    if(_url && _url.startsWith('http')){
        return _url;
    }
    return baseUrl + _url;
}

export default {
    get(_url, _params = {}){
        return new Promise((resolve, reject) => {

            // axios.get(filterUrl(_url), {params: _params}).then((res) => {
            //     resolve(res)
            // }).catch((error) => {
            //     reject(error)
            // })
            axios({
                url:filterUrl(_url),
                params:_params,
                method:'get',
                headers:{
                    'auth':window.localStorage.getItem('token')
                }
            }).then(res=>{console.log(res.data);
                if(!res.data.status && res.data.message == 'unauth'){
                    router.push({name:'login'});
                }else{
                    resolve(res.data);
                }
            }).catch(error=>{
                reject(error);
            })

        })
    },
    post(_url, _params = {}){
        var params = new URLSearchParams();
        params.append('username',_params.username);
        params.append('password',_params.password);
        return new Promise((resolve, reject) => {
            axios.post(filterUrl(_url), params).then((res) => {
                resolve(res.data)
            }).catch((error) => {
                reject(error)
            })
        })
    }
}