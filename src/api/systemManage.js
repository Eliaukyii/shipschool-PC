import service from '../utils/request.js'

//人员列表
export function EmployeeList(data) {
    return service({
        method: 'post',
        url: '/Employee/EmployeeList',
        data
    })
}

//人员列表删除
export function EmployeeDelete(data) {
    return service({
        method: 'post',
        url: '/Employee/EmployeeDelete',
        data
    })
}

//部门列表
export function DeptList(data) {
    return service({
        method: 'post',
        url: '/Employee/DeptList',
        data
    })
}

//部门列表删除
export function DeptDelete(data) {
    return service({
        method: 'post',
        url: '/Employee/DeptDelete',
        data
    })
}

//人员列表重置拼音
export function EmployeeResetPinyin(data) {
    return service({
        method: 'post',
        url: '/Employee/EmployeeResetPinyin',
        data
    })
}

//人员列表导入
export function EmployeeImport(data) {
    return service({
        method: 'post',
        url: '/Employee/EmployeeImport',
        data
    })
}

//菜单栏目
export function GetMenuJson(data){
    return service({
        method:'post',
        url:'/Power/GetMenuJson',
        data
    })
}

//菜单栏目
export function GetMessage(data){
    return service({
        method:'post',
        url:'/Employee/GetMessage',
        data
    })
}
