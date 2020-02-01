import React from 'react';

import { Menu } from 'antd';

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
    return <Menu
        defaultSelectedKeys={['0']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        theme="dark"
    >
        {languages.map((language, index) => (
            <Menu.Item key={index}>
                <span>{language}</span>
            </Menu.Item>
        ))}
    </Menu>
}