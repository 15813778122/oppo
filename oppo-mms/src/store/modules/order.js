import {getShopId,setShopId,delStrShop} from "@/utils/auth"
import ordersApi from '@/api/order'
import { Message } from 'element-ui'
import order from '../../api/order'

export default {
    state : {
        str:getShopId()
    },
    mutations:{
        SET_ID(state,str) {
            state.str = str
            setShopId(str)
        }
    },
    actions:{
        GetShopCarData(context) {
            return new Promise(async (resolve,reject) => {
                try{
                    let p = await ordersApi.searchAllorder()
                    resolve(p.data)
                }catch(err) {
                    reject(err)
                }
            })
        },
        delShopCarData(context,id) {
            return new Promise(async (resolve,reject) => {
                try{
                    let p = await ordersApi.delorder(id)
                    resolve(p.data)
                }catch(err) {
                    reject(err)
                }
            })
        },
        searchIdData(context,{str}) {
            return new Promise(async (resolve,reject) => {
                try{
                    let p = await ordersApi.searchmoreorder(str)
                    resolve(p.data)
                }catch(err){
                    reject(err)
                }
            })
        },
        setId(context,{str}) {
            return new Promise(async (resolve,reject) => {
                try {
                    context.commit('SET_ID',str)
                }catch(err){
                    reject(err)
                }
            })
        },
        getlocalid(context) {
            return new Promise(async (resolve,reject) => {
                try{
                    let ido = localStorage.getItem('oppo-app-shop-id')
                    resolve(ido)
                }catch(err){
                    reject(err)
                }
            })
        }
    }
}