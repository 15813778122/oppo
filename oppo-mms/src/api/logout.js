import request from '@/utils/request'

const BAST_API = process.env.VUE_APP_BASE_API;

export default {
    loginOut(token) {
        return request({
            method:'post',
            url : BAST_API + '/user/logout',
            data:{
                token
            }
        })
    }
}