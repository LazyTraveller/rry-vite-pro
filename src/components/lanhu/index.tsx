import React, { FC, HTMLAttributes } from 'react'
import { observer } from 'mobx-react'
import classNames from 'classnames'

export type LanHuProps = HTMLAttributes<HTMLDivElement>

const LanHu: FC<LanHuProps> = observer(({ children, className, ...rest }) => {
  return (
    <div className={classNames('relative', className)} {...rest}>
      <div
        className='absolute m-auto left-0 right-0'
        style={{ width: '375px', height: '100vh' }}
      >
        <div
          style={{
            transform: `scale(0.5) translateX(-50%) translateY(-50%)`,
          }}
        >
          {children}
        </div>
      </div>
    </div>
  )
})
export default LanHu
