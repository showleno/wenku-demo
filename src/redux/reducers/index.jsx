// state对象
const initialState = {
    isLogin : false,
};

// 这东西可以有多个
export const reducer = ( state = initialState, action) => {
    // store.dispatch(XX())就是调用这下面的方法
    switch(action.type) {

         // 控制登录状态
        case 'changeIsLogin':
            return Object.assign({}, state, { isLogin : action.flag });

       default:
            return state;
    }
};
