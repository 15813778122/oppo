import router from '@/router';
// import loginApi from '@/api/login';
import store from "./store";//vuex存储库
import {getToken} from "@/utils/auth"

router.beforeEach(async (to, from, next) => {
    // console.log(to, from);
    // next();

    //1.即将进入的路由需不需要守卫
    if (to.meta.checked != true) {
        //是登陆页，不需要守卫(洗手间)
        next();//可以进入下一步，可以进入目标路由
    } else {
        //非登陆页，需要进行路由守卫==路由拦截
        //2.有没有token(听课证)
        // let token = localStorage.getItem('jinfeng-mms-token');
        let token = store.state.user.token;
        console.log(token)
        if (token == null || token == "") {
            //没有token(没有听课证)
            next('/login');//跳转到登陆页
        } else {
            //有token(有听课证)
            try {
                let p = await store.dispatch('GetUserInfo');
                console.log(p.flag)
                if (p.flag) {
                    //验证token，通过
                    next();
                } else {
                    next('/login');
                }
            } catch (err) {
                console.log(err);
            }
        }
    }
});