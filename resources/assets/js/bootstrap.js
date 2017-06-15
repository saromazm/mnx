
/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */
/* globals dd, mnx */
import '../less/app.less';
import '../less/antd-app.less';

import axios from 'axios';
self.axios  = axios;

axios.defaults.baseURL = window.location.origin + '/api';
axios.defaults.headers.common = {
    'X-CSRF-TOKEN'    : document.getElementById( 'csrf-token' ).getAttribute( 'content' ),
    'X-Requested-With': 'XMLHttpRequest'
};
axios.defaults.method         = 'POST';
axios.defaults.responseType   = 'json';
axios.defaults.transformResponse = [ data=>{
    //dd("N O  M M S 22", data);
    if( data.error ){
        //dd("is error", data.error);
    }
    return data;
} ];

axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    //dd("THE ERROR BEFORE");
    return config;
}, function (error) {
    // Do something with request error
    dd("THE ERROR");
    if( error.status === 401 ){
        dd("NO AUTH");
    }
    return Promise.reject(error);
});
/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */

// import Echo from "laravel-echo"

// window.Echo = new Echo({
//     broadcaster: 'pusher',
//     key: 'your-pusher-key'
// });
