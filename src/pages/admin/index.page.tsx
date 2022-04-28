import React, { FC, HTMLAttributes } from 'react'
import { observer } from 'mobx-react'
import { Navigate } from 'react-router-dom'
export type IndexProps = HTMLAttributes<HTMLDivElement>

const Index: FC<IndexProps> = ({ className }) => {
  return <Navigate to='/admin/dashboard' />
}
export default observer(Index)
