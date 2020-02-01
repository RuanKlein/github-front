import React from 'react';

import { Menu } from 'antd';

const languages = [
    'JavaScript',
    'Java',
    'Python',
    'PHP',
    'Ruby',
    'C++',
    'C',
    'Shell',
    'C Sharp',
    'Objective-C',
    'R',
    'Go',
    'Perl',
    'Swift',
    'Scala',
    'Haskell',
    'Lua',
    'Clojure',
    'Rust',
    'PowerShell'
];

export default props => {
    return <Menu
            defaultSelectedKeys={['0']}
            defaultOpenKeys={['sub1']}
            mode="inline"
            theme="dark"
        >
        {languages.map((language, index) => (
            <Menu.Item key={index} onClick={() => props.changeLanguage(language)}>
                <span>{language}</span>
            </Menu.Item>
        ))}
    </Menu>
}