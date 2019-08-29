import {message} from 'antd';

const defaultFailSolution = (res) => {
    if(typeof res !== 'object') {
        message.warn(res);
    }
};

/**
 * 异步获取数据方法
 * @param method 'GET' 'POST' 'HEAD' 'PUT' 'DELETE'等，必填
 * @param API api.config.js中定义的常量名，必填
 * @param otherParams 参数，在get 和 head方法时会自动拼接到url中，必填-如果没有设为{}
 * @param success 成功处理函数，必填，参数为res
 * @param otherHeader 其他的头部配置 比如content-type等
 * @param corsSetting 跨域设置，默认为same-origin 严格不跨域，可选值为cors，no-cors. same-origin
 * same-origin：该模式是不允许跨域的，它需要遵守同源策略，否则浏览器会返回一个error告知不能跨域；其对应的response type为basic。
 * cors: 该模式支持跨域请求，顾名思义它是以CORS的形式跨域；当然该模式也可以同域请求不需要后端额外的CORS支持；
 * no-cors: 该模式用于跨域请求但是服务器不带CORS响应头，也就是服务端不支持CORS；其对应的response type为opaque。
 * @param fail 失败处理函数，默认为defaultFailSolution，效果为将message填充到消息通知栏。参数为msg和http code，自行处理303的状态
 */
const asyncFetch = (method, API, otherParams, success, otherHeader = {},
                    corsSetting = 'same-origin', fail = defaultFailSolution, rawResp = false, token = "") => {
    console.log("asyncFetch");
    console.log(token);
    let api = process.env.NODE_ENV === 'development' ? API : '/cross_origin' + API;
    let header = new Headers();
    header.set('Content-Type', 'application/json');
    header.set("Authorization", token);
    for (let key in otherHeader) {
        if (otherHeader.hasOwnProperty(key)) {
            header.set(key, otherHeader[key])
        }
    }
    let init = {
        method: method.toUpperCase(),
        headers: header,
        mode: corsSetting,
        credentials: 'include'
    };

    if (method === 'GET' || method === 'HEAD') {
        let urlSearch = [];
        for (let key in otherParams) {
            if (otherParams.hasOwnProperty(key)) {
                urlSearch.push(key + '=' + otherParams[key])
            }
        }
        api += urlSearch.length === 0 ? '' : ('?' + urlSearch.join('&'))
    } else {
        init['body'] = JSON.stringify(otherParams)
    }
    fetch(api, init).then((response) => {

        if (rawResp) {
            success(response);
            return;
        }

        console.log(response.headers.get("authorization"));

        if (response.status !== 200) {
            response.text().then(text => {
                fail(text);
            });
            return;
        }
        try {
            response.json().then((res) => {
                success(res)
            });
        } catch (err) {
            fail(err.message)
        }
    }, (error) => {
        fail('获取数据出错，请刷新页面')
    }).catch(function (err) {
        fail(err.message);
    });
};

export default asyncFetch;