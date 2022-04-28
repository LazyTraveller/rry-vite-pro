import React, { FC, HTMLAttributes } from 'react'
import { Navigate } from 'react-router-dom'

export type IndexProps = HTMLAttributes<HTMLDivElement>

const Index: FC<IndexProps> = ({ className }) => {
  return <Navigate to='/register' />
}
export default Index
