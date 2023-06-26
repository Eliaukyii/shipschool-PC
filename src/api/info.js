import service from '../utils/request.js'

//选择按钮
export function ButtonSelect(data) {
    return service({
        method: 'post',
        url: '/Employee/ButtonSelect',
        data
    })
}

//获取个人消息
export function GetMessage(data) {
    return service({
        method: 'post',
        url: '/Employee/GetMessage',
        data
    })
}