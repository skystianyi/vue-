/**
 * 登录 把token值存在sessionStorage中
 */

export function loginIn(token){


    sessionStorage.setItem('token',token);

  }
  /**
   * 判断用户是否登录
   */
  export function isLogined(){

    if(sessionStorage.getItem('token')){

        return true;
    }else{

       return false;
    }

    }
  /**
   * 清楚本地存储
   */
    export function logout(){

      sessionStorage.removeItem('token');

    }