import {getToken,setToken,getUser,setUser,logOut} from "@/utils/auth"
import loginApi from '@/api/login'
// import logoutApi from "@/api/logout"
import { Message } from 'element-ui'
import router from '@/router';
import { Dialog } from "vant";

export default {
    state : {
        token:getToken(),
        username:getUser()
    },
    mutations:{
        // 存token
        SET_TOKEN(state,token) {
            state.token = token
            setToken(token)
        },

        // 存用户名
        SET_USER(state,name) {
            state.username = name
            setUser(name)
        },

        Remove_inf(state) {
            // 清除本地存储
            logOut()
            // 清除state的数据
            state.username = ''
        }
    },
    actions:{
        // context代表store
        Login({commit,state,dispatch},{name,pwd,keep}){
            return new Promise(async (resolve,reject) => {
                try {
                    
                        let p = await loginApi.loginIn(name,pwd,keep)
                        if (p.data.flag) {
                            // 将Token存入到state和本地
                            commit('SET_TOKEN',p.data.data.token)
                            commit('SET_USER',name)
                            if (p.data.flag) {
                                Dialog({ message: '登录成功回到首页' });
                                router.push('/')
                            } else {
                                Message({
                                    message:"用户名或密码错误",
                                    type:"error"
                                })
                            }
                        } else {
                            Message({
                                message:"用户名或密码错误",
                                type:"error"
                            })
                        }
                    
                } catch(err) {
                   reject(err)
                }
            })
        },
        GetUserInfo({commit,state}){
            return new Promise(async (resolve,reject) => {
                try {
                    let p = await loginApi.getUserInf(state.token)
                    if (p.data.flag) {
                        resolve(p.data)
                    }
                } catch (err) {
                    reject(err)
                }
            })
        },
        Logout({commit,state}){
            return new Promise(async (resolve,reject) => {
                try{
                    commit('Remove_inf')
                } catch(err) {
                    reject(err)
                }
            })
        },
        Reg(context,{name,pwd}){
            return new Promise(async (resolve,reject) => {
                try{
                    let p = await loginApi.checkname(name)
                    if (p.data.flag) {
                        // 可以注册
                        let d = await loginApi.reg(name,pwd)
                        console.log(d)
                        if (d.data.flag) {
                            resolve(d.data)
                        }
                    } else {
                        Message({
                            message:"用户名已注册",
                            type:"error"
                        })
                    }
                } catch(err) {
                    reject(err)
                }
            })
        }
    }
}