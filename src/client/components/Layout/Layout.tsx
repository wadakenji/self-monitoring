import React, { PropsWithChildren } from 'react'
import { Layout as AntdLayout, Menu } from 'antd'
import { useLocation, useNavigate } from 'react-router-dom'

const { Header, Content } = AntdLayout

const MENU_ITEMS = [{ key: 'training', label: '筋トレ' }]

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  const { pathname } = useLocation()
  const navigate = useNavigate()

  const selectedKey = pathname.split('/')[1]

  return (
    <AntdLayout>
      <Header style={{ display: 'flex' }}>
        <div style={{ color: 'white', fontSize: 20, marginRight: 20, flexShrink: 0 }} onClick={() => navigate('/')}>
          わだ日記
        </div>
        <Menu
          theme="dark"
          mode="horizontal"
          items={MENU_ITEMS}
          onClick={({ key }) => navigate(`/${key}`)}
          selectedKeys={[selectedKey]}
          style={{ width: '100%' }}
        />
      </Header>
      <Content style={{ padding: '20px 40px 0 40px', minHeight: '100vh' }}>{children}</Content>
    </AntdLayout>
  )
}

export default Layout
