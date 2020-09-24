import request from "@/utils/request"

export default {
    add(uname, phone,area,address,coding) {
        return request.post('/address/addarea',{
            uname, phone,area,address,coding
        })
    }
}