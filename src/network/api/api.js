import {get,post} from '../http/http'

//banner
export function getBanner(){
    return get('banner')
}
//首页数据
export function getAppIndex(){
    return get('recommend/appIndex')
}