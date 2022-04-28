import React, { FC, HTMLAttributes, useEffect } from 'react'
import { observer } from 'mobx-react'
import { useParams } from 'react-router-dom'
import Page from '@/components/page'
import Header from '@/components/header'
import Drawer from '@/components/drawer'
import { Button, Carousel } from 'antd'
import './index.less'

import { useTitle } from 'ahooks'

import { useGMNavigate } from '@/common/hooks/useNavigate'
import Viewport from '@/pages/:customerID/Viewport'

export type IndexProps = HTMLAttributes<HTMLDivElement>

const Index: FC<IndexProps> = ({ className }) => {
  const { customerID } = useParams()
  useTitle('首页')
  const navigate = useGMNavigate()

  return (
    <Page
      className='customer-page'
      header={<Header className='fixed top-0 w-full' />}
      style={{ paddingTop: 54 }}
    >
      <Drawer className='' />
      <Viewport id='home'>
        <Carousel className='w-full' />
      </Viewport>
    </Page>
  )
}
export default observer(Index)
