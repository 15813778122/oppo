import request from "@/utils/request"

export default {
    editorder(id) { // 修改订单
        return request.put('/order/editorder/' + id)
    },
    delorder(id) { // 删除订单
        return request.delete('/order/delorder/' + id)
    },
    delallorder(obj) { // 删除多个订单 例子:{21,22,31} 需要写成这种类型
        return request.delete('/order/delallorder/',{
            obj
        })
    },
    searchorder(id) { // 查询id为xx的订单信息
        return request.get('/order/order/' + id)
    },
    searchmoreorder(ids) { // 查询id为xx的订单信息
        return request.post('/order/searchmoreorder/',{
            ids
        })
    },
    searchAllorder() { // 查询全部的订单信息
        return request.get('/order/orderall')
    },
    addorder(gname, price,oldprice,stock,img) { // 新增订单
        console.log(gname, price,oldprice,stock,img)
        return request.post('/order/addorder/',{
            gname, price,oldprice,stock,img
        })
    }
}