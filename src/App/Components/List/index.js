import React, { useEffect, useState, useRef } from 'react';

import './style.css';

import api from '../../../Service/API';

import { List, Avatar, Button, Icon } from 'antd';

const ButtonGroup = Button.Group;

export default props => {
    const [data, setData] = useState(null);
    const [page, setPage] = useState(1);

    // Valor antigo da language
    const prevLanguageRef = useRef();

    async function loadData() {
        // Trata a string para a consulta no github
        const l = props.language.replace(/\s+/g, '').toLowerCase();

        // Carrega os dados através de acordo com a
        // linguagem selecionada (por default carrega JavaScript)
        const d = await api.get('/search/repositories', {
            params: {
                q: `language:${l}`,
                per_page: 15,
                page
            }
        });

        // Carrega os dados dos repositórios no array data
        setData(d.data.items);
    }

    
    useEffect(() => {
        prevLanguageRef.current = props.language;
    });

    const prevLanguage = prevLanguageRef.current;

    useEffect(() => {
        // Carrega a lista de repositórios
        loadData();

        // Verifica se foi trocado o valor de language
        // E troca para a página 1
        if(typeof prevLanguage !== undefined) {
            if(prevLanguage !== props.language) {
                setPage(1);
            }
        }
    }, [props.language, page]);

    return (
        <div className="List">
            {data !== null ? (
                <>
                    <div className="List-Pagination">
                        <ButtonGroup>
                            <Button 
                                type="default"
                                disabled={page === 1}
                                onClick={() => setPage(page - 1)}
                            >
                                <Icon type="left" />
                            </Button>
                            <Button type="ghost" disabled={true}>
                                {page}
                            </Button>
                            <Button
                                type="default"
                                onClick={() => setPage(page + 1)}
                            >
                                <Icon type="right" />
                            </Button>
                        </ButtonGroup>
                    </div>
                    <List
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
                    />
                    <div className="List-Pagination">
                        <ButtonGroup>
                            <Button 
                                type="default"
                                disabled={page === 1}
                                onClick={() => setPage(page - 1)}
                            >
                                <Icon type="left" />
                            </Button>
                            <Button type="ghost" disabled={true}>
                                {page}
                            </Button>
                            <Button
                                type="default"
                                onClick={() => setPage(page + 1)}
                            >
                                <Icon type="right" />
                            </Button>
                        </ButtonGroup>
                    </div>
                </>
             ) : <p>Carregando...</p>}
        </div>
    );
};