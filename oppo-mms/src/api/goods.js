import request from "@/utils/request"

export default {
    editgood(id,obj) { // 修改商品
        return request.put('/good/editgood/' + id,{
            obj
        })
    },
    delgood(id) { // 修改商品
        return request.delete('/good/delgood/' + id)
    },
    delallgood(obj) { // 删除多个商品 例子:{21,22,31} 需要写成这种类型
        return request.delete('/good/delallgood/',{
            obj
        })
    },
    searchshop(id) { // 查询id为xx的商品信息
        return request.get('/good/searchshop/' + id)
    },
    searchmoreshop(ids) { // 查询多个id为xx的商品信息
        return request.get('/good/searchmoreshop/',{
            params:{
                ids
            }
        })
    },
    searchAllshop() { // 查询id为xx的商品信息
        return request.get('/good/searchAllshop')
    },
    addshop(gname, price,oldprice,num,img) { // 新增商品
        return request.post('/good/addshop/',{
            gname, price,oldprice,num,img
        })
    }
}