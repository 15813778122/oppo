import request from "@/utils/request"

export default {
    checkname(name) { // 检查用户是否存在
        return request.get('/user/checkname',{
            params:{
                name
            }
        })
    },
    reg(name,pwd) { // 用户注册
        return request.post('/user/reg',{
            name,
            pwd
        })
    },
    loginIn(name,pwd,keep){ // 用户登录
        return request.get('/user/login',{
            params:{
                name,
                pwd,
                keep
            }
        })
    },
    getUserInf(token) { // token的校验
        return request.get('/user/verify',{
            params:{token}
        })
    },
    edituser(obj,id) { // 修改用户信息，obj是一个对象，把需要修改的信息以键值对的方式放进对象里
        return request.put('/user/edit/' + id, obj)
    },
    deluser(id) { // 删除用户
        return request.delete('/user/del' + id)
    },
    delmoreuser(obj) { // 删除多个用户,obj里面放你需要删除的用户id  例子：{21,22,23} 需要写成这种格式
        return request.delete('/user/delall/', {
            obj
        })
    },
    searchUserList(page,size) { // 查询用户列表（分页）
        return request.get('/userlist', {
            params:{page,size}
        })
    },
    searchUser(id) { // 查询id为xx的用户信息
        return request.get('/user/' + id)
    }
}

