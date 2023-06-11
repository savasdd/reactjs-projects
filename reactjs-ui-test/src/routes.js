import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const Sinav = React.lazy(() => import('./views/pages/sinav/sinav'))

const routes = [
  { path: '/', exact: true, name: 'Anasayfa' },
  //{ path: '/dashboard', name: 'Anasayfa', element: Dashboard },
  { path: '/base/sinav', name: 'Sınav', element: Sinav },
]

export default routes
