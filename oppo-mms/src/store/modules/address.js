import addressApi from '@/api/address'

export default {
    state:{

    },
    mutations:{

    },
    actions:{
        add(context,{uname, phone,area,address,coding}) {
            return new Promise(async (resolve,reject) => {
                try{
                    let p = await addressApi.add(uname, phone,area,address,coding)
                    resolve(p.data)
                }catch(err){
                    reject(err)
                }
            })
        }
    }
}