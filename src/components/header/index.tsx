import React, { FC, HTMLAttributes, ReactNode } from 'react'
import { observer } from 'mobx-react'
import classNames from 'classnames'
import './index.less'

export interface HeaderProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  right?: ReactNode
}

const Header: FC<HeaderProps> = observer(({ className }) => {
  return (
    <>
      <header
        className={classNames(
          'header flex text-black items-center px-5',
          className
        )}
      >
        <div className='text-center mr-2 flex items-center text-lg'>
          <div>44</div>
        </div>
        <div className='grow' />
        <div>
          <span className='b-font-menu-right text-2xl' onClick={() => {}} />
        </div>
      </header>
    </>
  )
})
export default Header
