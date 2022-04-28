import React, { FC, HTMLAttributes } from 'react'
import { useNavigate } from 'react-router-dom'
import { Form, Input, Button, Row, Typography, message } from 'antd'

export type LoginProps = HTMLAttributes<HTMLDivElement>

const Login: FC<LoginProps> = ({ className }) => {
  const navigate = useNavigate()
  const methods = {
    async onFinish({ username, password }: Record<string, any>) {
      navigate('/admin/dashboard')
      message.success('登录成功')
    },
  }
  return (
    <div className='flex flex-col items-center mt-5'>
      <div className='h-5' />
      <Typography.Title className='opacity-70' level={3}>
        xxxxx管理平台
      </Typography.Title>
      <div className='h-5' />
      <Row>
        <Form name='basic' onFinish={methods.onFinish}>
          <Form.Item
            label='账号'
            name='username'
            rules={[{ required: true, message: '请输入账号' }]}
          >
            <Input placeholder='请输入账号' />
          </Form.Item>

          <Form.Item
            label='密码'
            name='password'
            rules={[{ required: true, message: '请输入密码' }]}
          >
            <Input.Password placeholder='请输入密码' />
          </Form.Item>

          <Form.Item>
            <Button className='w-full mt-5' type='primary' htmlType='submit'>
              登录
            </Button>
          </Form.Item>
        </Form>
      </Row>
    </div>
  )
}
export default Login
