import React, { ErrorInfo } from 'react'

class ErrorBoundary extends React.Component<{ children: React.ReactNode }> {
  state = {
    error: null,
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.log(error, info)
    this.setState({ error: { error, info } })

    throw error
    // 错误上报
  }

  render() {
    if (this.state.error) {
      return (
        <div style={{ height: '100vh', paddingTop: '150px' }}>
          react componentDidCatch
        </div>
      )
    }
    return this.props.children
  }
}

export default ErrorBoundary
