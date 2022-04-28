const modules = import.meta.glob('@/**/*.page.tsx')

export const whitelist = ['/admin/login', /^\/(?!admin).*/]

export const routes = [
  ...Object.keys(modules).map((relativePath) => {
    const module: any = modules[relativePath]
    let path = relativePath.replace('../pages', '')
    if (path === '/index.page.tsx') path = '/'
    path = path.replace('/index.page.tsx', '')
    path = path.replace('.page.tsx', '')
    // path = '/lite_h5' + path
    return { path, component: module }
  }),
  // { path: '*', component: modules['../pages/404.page.tsx'] },
]
