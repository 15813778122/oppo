import {getShopId,setShopId,delStrShop,getToken} from "@/utils/auth"
import goodsApi from '@/api/goods'
import ordersApi from '@/api/order'
import { Toast } from 'vant';
import router from '@/router';
import { Message } from 'element-ui'

export default {
    state:{
        sid:getShopId()
    },
    mutations:{
        SET_SHOP(state,id) {
            state.sid = id
            setShopId(id)
        },
        Remove_Shopinf(state) {
            // 清除本地存储
            delStrShop()
            // 清除state的数据
            state.sid = ''
        },
        GET_TOEKN(){
            getToken()
        }
    },
    actions:{
        GetShopInf({context}) {
            return new Promise(async (resolve,reject) => {
                try{
                    let p = await goodsApi.searchAllshop()
                    resolve(p.data)
                }catch(err) {
                    reject(err)
                }
            })
        },
        SetId(context,{gname, price,oldprice,stock,img}) {
            // console.log(gname, price,oldprice,stock,img)
            return new Promise(async (resolve,reject) => {
                try{
                    let p = await ordersApi.addorder(gname, price,oldprice,stock,img)
                    console.log(p.data)
                } catch(err) {
                    reject(err)
                }
            })
        },
        GetToken(context) {
            return new Promise ((resolve,reject) => {
                try{
                    // let utoken = context.commit('GET_TOEKN')
                    if (getToken()) {
                        Toast('成功加入购物车');
                    } else {
                        Toast('请先登录，如果没有账号请注册');
                        router.push('/login')
                    }
                }catch(err){
                    reject(err)
                }
            })
        }
        // changeNUM(context,{obj,id}) {
        //     return new Promise(async (resolve,reject) => {
        //         try{
        //             let p = await goodsApi.editgood(id,obj)
        //             resolve(p.data)
        //         }catch(err) {
        //             reject(err)
        //         }
        //     })
        // }
    }
}