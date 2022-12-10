import React, { useMemo } from 'react';

// Recoil
import { RecoilRoot } from 'recoil';

// import redux for auth guard
import { useDispatch, useSelector } from 'react-redux';

// import layout
import Layout from 'layout/Layout';

// import routing modules
import RouteIdentifier from 'routing/components/RouteIdentifier';
import { getRoutes } from 'routing/helper';
import routesAndMenuItems from 'routes.js';
import Loading from 'components/loading/Loading';
import { setCurrentUser } from 'auth/authSlice';
import apiBase from 'app/axios/apiBase';

const App = () => {

  const dispatch = useDispatch();

  const { currentUser, isLogin } = useSelector((state) => state.auth);

  if (localStorage.getItem('accessTokenEducation') !== null && currentUser) {
    apiBase.post('/me').then(res => {
      // Reduxt
      dispatch(setCurrentUser({
        currentUser: res.data,
        userToken: localStorage.getItem('accessTokenEducation')
      }))
    })
  }

  const routes = useMemo(() => getRoutes({ data: routesAndMenuItems, isLogin, userRole: currentUser.role }), [isLogin, currentUser]);

  if (routes) {
    return (
      <RecoilRoot>
        <Layout>
          <RouteIdentifier routes={routes} fallback={<Loading />} />
        </Layout>
      </RecoilRoot>
    );
  }
  return <></>;
};

export default App;
