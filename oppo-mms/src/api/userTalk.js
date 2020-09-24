import request from "@/utils/request"

export default {
    GetAllTalk() {
        return request.get('/userTalk/searchAllTalk')
    }
}