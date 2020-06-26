import React, {
  ReactElement,
  Suspense,
  useState,
  useEffect,
  Component,
} from 'react';
import { Route, Redirect } from 'umi';
import { RouteProps } from 'react-router-dom';
import * as userService from '@/services/user';
import { useFetch } from 'react-hooks-fetch';
enum ERule {
  'guest',
  'vip1',
  'vip2',
  'admin',
}
interface IMata {
  rule: ERule;
}
interface RoutePRops2 {
  component: React.ElementType;
}
interface PageProps {
  route: RouteProps;
  meta?: IMata;
}

//  function useFetch(url:string) {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     fetch(url)
//       .then(response => response.json())
//       .then(data => setData(data));
//   }, [] );

//   return data;
// }

const getCookie = (key: string = 'koa.sid') => {
  let cookies = document.cookie;
  let cookiesParse = cookies.split(';').map(group => {
    let entry = group.split('=');
    return [[entry[0]], entry[1]];
  });

  return cookiesParse.find(cookie => cookie[0] == key);
};

const AuthRouter: React.FC<PageProps> = props => {
  const { route, meta } = props;
  // const { component: Components } = route;
  console.log(route);
  // return (
  //   <Suspense fallback={'loading'}>
  //     <SuspenseComp comp={Components} />
  //     {/* <Components /> */}
  //   </Suspense>
  // );
  // let authPass = false;
  //   if (meta?.rule === ERule.admin || meta?.rule === ERule.vip2) {
  //     // 允许访问
  //     authPass = true;
  //   }
  // let result = await userService.checkLogin();
  // let loginStatus = window.localStorage.getItem('login');
  // authPass = loginStatus === '1';
  // return authPass ? <Route {...route} /> : <Redirect to="/login" />;
  //这个也可以，跟下边的二选一，否则会报错

  let result = getCookie();
  let loginStatus = false;
  if (result) loginStatus = true;
  return loginStatus ? <Route {...route} /> : <Redirect to="/login" />;
  // return (
  //   <Route
  //     render={routeProps => {
  //       console.log(routeProps);
  //       console.log('cookie', result);
  //       console.log('component',Component)
  //       return loginStatus ? <Components /> : <Redirect to="/login" />;
  //     }}
  //   />
  // );
};

// const a= async () =>{
//   let result = await userService.checkLogin();
//   let loginStatus=false;
//   if(result.errno ===0 ){
//     loginStatus = true;
//   }
//   return AuthRouter;
// }
export default AuthRouter;
