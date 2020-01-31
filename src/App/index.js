import React from 'react';
import './style.css';

import { Layout } from 'antd';

import Languages from './Components/Languages';
import List from './Components/List';

const { Header, Footer, Sider, Content } = Layout;

export default () => {
  return (
    <div className="App">
      <Layout>
        <Header className="App-Header">Repositórios</Header>
        <Layout>
          <Sider className="App-Sider">
            <Languages />
          </Sider>
          <Content>
            <List />
          </Content>
        </Layout>
        <Footer>Footer</Footer>
      </Layout>
    </div>
  );
}
