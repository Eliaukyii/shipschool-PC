import service from '../utils/request.js'

//顶部导航栏列表接口
export function getMenuList(data) {
    return service({
        method: 'post',
        url: '/Index/IndexLoad',
        data
    })
}

//左侧导航栏列表接口
export function getChildMenu(data) {
    return service({
        method: 'post',
        url: '/Index/GetChildMenu',
        data
    })
}

//获取按钮接口
export function GetButtons(data) {
    return service({
        method: 'post',
        url: '/Index/GetButtons',
        data
    })
}


//个人信息接口
export function info(data) {
    return service({
        method: 'post',
        url: '/Index/WelComeLoad',
        data
    })
}


//首页列表接口
export function WelComeFunc(data) {
    return service({
        method: 'post',
        url: '/Index/WelComeFunc',
        data
    })
}
