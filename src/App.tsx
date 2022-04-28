import React, { lazy, Suspense } from 'react'
import ErrorBoundary from './frame/error'
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom'
import { routes, whitelist } from './router'
import { useTitle } from 'ahooks'
import { observer } from 'mobx-react'
import './less/app.less'

function App({ children }: { children?: React.ReactNode }) {
  useTitle('首页')
  return (
    <ErrorBoundary>
      <HashRouter basename='/'>
        <Routes>
          {routes.map(({ path, component }, i) => {
            const LazyComponent = lazy(component)
            const element = (
              <Suspense
                fallback={
                  <div className='w-screen h-screen flex items-center justify-center text-gray-500'>
                    loading...
                  </div>
                }
              >
                <LazyComponent />
              </Suspense>
            )
            const inWhitelist = !!whitelist.find((item) => {
              if (typeof item === 'string') {
                return item === path
              } else {
                return item.test(path)
              }
            })
            if (inWhitelist) {
              return <Route key={i} path={path} element={element} />
            } else {
              return (
                <Route
                  key='login'
                  path={path}
                  element={<Navigate to='/admin/login' replace />}
                />
              )
            }
          })}
        </Routes>
      </HashRouter>
    </ErrorBoundary>
  )
}

export default observer(App)
