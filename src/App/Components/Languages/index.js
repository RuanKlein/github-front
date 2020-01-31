import React from 'react';

import { Menu, Icon } from 'antd';

import './style.css';

const { SubMenu } = Menu;

/*
 * Lista de linguagens obtida em githut.info
 * Retirei algumas que são poucas conhecidas
 */
const languages = [
    'JavaScript',
    'Java',
    'Python',
    'CSS',
    'PHP',
    'Ruby',
    'C++',
    'C',
    'Shell',
    'C Sharp',
    'Objective-C',
    'R',
    'VimL',
    'Go',
    'Perl',
    'CoffeeScript',
    'TeX',
    'Swift',
    'Scala',
    'Emacs Lisp',
    'Haskell',
    'Lua',
    'Clojure',
    'Matlab',
    'Arduino',
    'Makefile',
    'Groovy',
    'Puppet',
    'Rust',
    'PowerShell'
];

export default () => {
    return (
        <Menu
            className="Languages-Menu"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode='inline'
            theme="dark"
        >
            <SubMenu
                key="sub1"
                title={
                    <span>
                        <Icon type="code" />
                        <span>Linguagens</span>
                    </span>
                }
            >
                <Menu.ItemGroup key="g1">
                    {languages.map((language, index) => 
                        <Menu.Item key={index}>{language}</Menu.Item>
                    )}
                </Menu.ItemGroup>
            </SubMenu>
        </Menu>
    );
}