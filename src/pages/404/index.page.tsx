import React, { FC, HTMLAttributes } from 'react'
import { observer } from 'mobx-react'
import { Result } from 'antd'
import { Link, useLocation } from 'react-router-dom'

export type IndexProps = HTMLAttributes<HTMLDivElement>

const Index: FC<IndexProps> = observer(({}) => {
  const query = new URLSearchParams(useLocation().search)
  const message = query.get('message') || '页面未找到'
  return (
    <Result
      status='404'
      title='404'
      subTitle={message}
      extra={<Link to='/'>返回首页</Link>}
    />
  )
})
export default Index
