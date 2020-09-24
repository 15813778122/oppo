import userTalkApi from '@/api/userTalk'

export default {
    state: {

    },
    mutations:{

    },
    actions:{
        GetTalkData() {
            return new Promise(async (resolve,reject) => {
                try {
                    let p = await userTalkApi.GetAllTalk()
                    resolve(p.data)
                }catch(err) {
                    reject(err)
                }
            })
        }
        
    }
}