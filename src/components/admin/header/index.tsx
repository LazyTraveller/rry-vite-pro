import React, { FC, HTMLAttributes } from 'react'
import { observer } from 'mobx-react'
import { DashboardOutlined } from '@ant-design/icons'
import { Button } from 'antd'

export type HeaderProps = HTMLAttributes<HTMLDivElement>

const Header: FC<HeaderProps> = observer(({ className }) => {
  return (
    <header className='flex bg-gray-700 text-white h-14 items-center px-5'>
      <div className='text-center mr-2 flex items-center text-xl'>
        <DashboardOutlined />
      </div>
      <div>工作台</div>
      <div className='grow' />
      <div className='mr-5'>Admin</div>
      <Button className='text-white' type='text' onClick={() => {}}>
        注销
      </Button>
    </header>
  )
})
export default Header
