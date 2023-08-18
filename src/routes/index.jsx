import React, { Suspense } from 'react'
import { Navigate } from 'react-router-dom'
import FirstLoading from '../pages/FirstLoading'
import Mainpage from '../pages/Mainpage'
import Loading from '../pages/Loading'
import Error from '../pages/Error'
import Page3 from '../pages/Mainpage/pages/Page3'
import Page2 from '../pages/Mainpage/pages/Page2'

// 异步加载
const Page1 = React.lazy(() => import('../pages/Mainpage/pages/Page1'));
// const Page2 = React.lazy(() => import('../pages/Mainpage/pages/Page2'));
const Ending = React.lazy(() => import('../pages/Ending'));
const Match = React.lazy(() => import('../pages/Match'));
const Letter1 = React.lazy(() => import('../pages/Mask/Letter1'));
const Letter2 = React.lazy(() => import('../pages/Mask/Letter2'));
const Letter3 = React.lazy(() => import('../pages/Mask/Letter3'));

export default [
  {
    path: '/firstload',
    element: <FirstLoading />
  },
  {
    path: '/error',
    element: <Error />
  },
  {
    path: '/main',
    element: <Mainpage />,
  },
  {
    path: '/page1',
    element: <Suspense fallback={<Loading />}><Page1 /></Suspense>
  },  
  {
    path: '/page2',
    element: <Suspense fallback={<Loading />}><Page2 /></Suspense>
  },
  {
    path: '/page3',
    element: <Page3 />
  },
  {
    path: '/letter1',
    element:<Suspense fallback={<Loading />}><Letter1 /></Suspense>
  },
  {
    path: '/letter2',
    element: <Suspense fallback={<Loading />}><Letter2 /></Suspense>
  },
  {
    path: '/letter3',
    element: <Suspense fallback={<Loading />}><Letter3 /></Suspense>
  }
  ,
  {
    path: '/match',
    element: <Suspense fallback={<Loading />}><Match /></Suspense>,
  },
  {
    path: '/end',
    element: <Suspense fallback={<Loading />}><Ending /></Suspense>,
  },
  {
    path: '/',
    element: <Navigate to='/main' />,
  },
  {
    path: '/loading',
    element: <Loading/>,
  }

]