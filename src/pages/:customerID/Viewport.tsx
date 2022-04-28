import React, { FC, HTMLAttributes, useEffect, useRef } from 'react'
import { observer } from 'mobx-react'
import { useScroll } from 'ahooks'
import classNames from 'classnames'
import { runInAction } from 'mobx'

export interface ViewportProps extends HTMLAttributes<HTMLDivElement> {
  id?: string
}

const Viewport: FC<ViewportProps> = observer(
  ({ id, children, className, ...rest }) => {
    const viewportRef = useRef<HTMLDivElement>(null)
    const scroll = useScroll()
    useEffect(() => {}, [scroll])
    return (
      <div
        id={id}
        ref={viewportRef}
        className={classNames(className)}
        {...rest}
      >
        {children}
      </div>
    )
  }
)
export default Viewport
