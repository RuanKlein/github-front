import React, { useEffect, useState } from 'react';

import './style.css';

import api from '../../../Service/API';

import { List, Avatar } from 'antd';

export default () => {
    const [data, setData] = useState(null);

    async function loadData() {
        // Carrega os dados através de acordo com a
        // linguagem selecionada (por default carrega JavaScript)
        const d = await api.get('/search/repositories', {
            params: {
                q: 'language:javascript'
            }
        });

        // Carrega os dados dos repositórios no array data
        setData(d.data.items);
    }

    useEffect(() => {
        // Preenche a lista com dados
        // Assim que a aplicação carrega
        loadData();
    }, []);

    return (
        <div className="List">
            {data !== null ? <List
                className="List"
                itemLayout="horizontal"
                dataSource={data}
                renderItem={item => (
                    <List.Item key={item.id}>
                        <List.Item.Meta
                            avatar={<Avatar src={item.owner.avatar_url} />}
                            title={<a 
                                target="_blank"
                                rel="noopener noreferrer"
                                href={item.html_url}>
                                    {item.full_name}
                                </a>
                            }
                            description={
                                item.description !== null ?
                                    item.description :
                                    'Nenhuma descrição'
                            }
                        />
                    </List.Item>
                )}
            /> : <p>Carregando...</p>}
        </div>
    );
};