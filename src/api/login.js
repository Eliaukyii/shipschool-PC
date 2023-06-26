import service from '../utils/request.js'

// 登录接口
export function login(data){
    return service({
        method:'post',
        url:'/Login/LoginIn',
        data
    })
}
//已登录判断
export function IsLogin(data){
    return service({
        method:'post',
        url:'/Login/IsLogin',
        data
    })
}
//获取验证码接口
export function getVerifyCode(data){
    return service({
        method:'post',
        url:'/Login/VerifyCode',
        data
    })
}

//登出接口
export function loginOut(data){
    return service({
        method:'post',
        url: '/Login/Logout' ,
        data
    })
}
