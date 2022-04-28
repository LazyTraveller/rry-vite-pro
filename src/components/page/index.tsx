import React, { FC, HTMLAttributes, ReactNode } from 'react'
import classNames from 'classnames'
import { observer } from 'mobx-react'

export interface PageProps extends HTMLAttributes<HTMLDivElement> {
  header?: ReactNode
  top?: ReactNode
  footer?: ReactNode
}

const Page: FC<PageProps> = observer(
  ({ className, header, top, children, footer, ...rest }) => {
    return (
      <section
        className='h-screen w-screen flex flex-col items-center relative'
        {...rest}
      >
        <div className='w-full z-20 relative'>{header}</div>
        <div className='w-full relative'>{top}</div>
        <div className={classNames('w-full grow', className)}>
          <div className='max-w-screen-sm mx-auto relative overflow-y-auto overflow-x-hidden'>
            {children}
          </div>
        </div>
        <div className='w-full relative'>{footer}</div>
      </section>
    )
  }
)
export default Page
