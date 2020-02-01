import React from 'react';
import './style.css';

import { Layout } from 'antd';

import Languages from './Components/Languages';
import List from './Components/List';

const { Header, Sider, Content } = Layout;

export default () => {
  return (
    <div className="App">
      <Layout>
        <Header className="App-Header">Repositórios</Header>
        <Layout>
          <Sider>
            <Languages />
          </Sider>
          <Content>
            <List />
          </Content>
        </Layout>
      </Layout>
    </div>
  );
}
