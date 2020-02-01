import React, { useState } from 'react';
import './style.css';

import { Layout } from 'antd';

import Languages from './Components/Languages';
import List from './Components/List';

const { Header, Sider, Content } = Layout;

export default () => {
  // JavaScript é default :-)
  const [language, setLanguage] = useState('javascript');

  function changeLanguage(lang) {
    setLanguage(lang);
  }

  return (
    <div className="App">
      <Layout>
        <Header className="App-Header">Repositórios</Header>
        <Layout>
          <Sider>
            <Languages changeLanguage={changeLanguage} />
          </Sider>
          <Content>
            <List language={language} />
          </Content>
        </Layout>
      </Layout>
    </div>
  );
}
