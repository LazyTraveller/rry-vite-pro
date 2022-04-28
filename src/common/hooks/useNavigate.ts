import { NavigateOptions, useLocation, useNavigate } from 'react-router-dom'

const transitionMap: {
  [key: string]: {
    data: any
    resolve?: Function
  }
} = {}

const transitionFrom: { [key: string]: string } = {}

export function useGMNavigate() {
  const navigate = useNavigate()
  const location = useLocation()
  return (
    {
      url,
      query,
      data,
    }: {
      url: string
      query?: Record<string, string>
      data?: any
    },
    options?: NavigateOptions
  ) => {
    const from = location.pathname
    const to = url
    return new Promise<any>((resolve, reject) => {
      const queryKeys = Object.keys(query || {})
      const queryStr = queryKeys.reduce((last, key, i) => {
        if (i === 0) {
          last = '?' + `${key}=${query![key]}`
        } else {
          last = last + `&${key}=${query![key]}`
        }
        return last
      }, '')
      const key = `${from}->${to}`
      transitionMap[key] = {
        data,
        resolve,
      }
      transitionFrom[to] = from
      navigate(`${url}${queryStr}`, options)
    })
  }
}

export function useGMNavigateBack() {
  const navigate = useNavigate()
  const location = useLocation()
  return (data?: any) => {
    const from = transitionFrom[location.pathname]
    const transition = transitionMap[`${from}->${location.pathname}`]
    if (transition && transition.resolve) transition.resolve(data)
    navigate(-1)
  }
}

export function useGMLocation() {
  const location = useLocation()
  return {
    ...location,
    data: transitionMap[`${transitionFrom}->${location.pathname}`]?.data,
  }
}
