const TOKEN_KEY = 'oppo-app-token';
const USER_KEY = 'oppo-app-username';
const SHOP_ID = 'oppo-app-shop-id'
// const USER_PHONE = 'oppo-app-phone'

export function getToken() {
    return localStorage.getItem(TOKEN_KEY);
}

export function setToken(token) {
    return localStorage.setItem(TOKEN_KEY,token)
}


export function getShopId() {
    return localStorage.getItem(SHOP_ID);
}

export function setShopId(id) {
    return localStorage.setItem(SHOP_ID,id)
}


export function getUser() {
    return localStorage.getItem(USER_KEY);
}

export function setUser(username) {
    return localStorage.setItem(USER_KEY,username)
}

export function logOut() {
    localStorage.removeItem(USER_KEY)
    localStorage.removeItem(TOKEN_KEY)
}

export function delStrShop() {
    localStorage.removeItem(SHOP_ID)
}