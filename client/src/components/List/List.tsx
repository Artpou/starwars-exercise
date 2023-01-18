import React, { useEffect } from 'react';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';

import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { Table } from 'antd';
import { fetchList } from '../../services/ListServices';


interface ListType {
  name: string;
  type: string;
  url: string;
}

const IconDiv = styled.span`
  display: flex;
  align-items: center;
`;

const IconImg = styled.img`
  width: 32px;
  height: 32px;
  margin-right: 10px;
  filter: invert(1);
`;

export function List() {
  const list = useAppSelector((state) => state.list.data);
  const dispatch = useAppDispatch();

  const listData: ListType[] = list.map((item) => {
    return {
      key: uuidv4(),
      name: "name" in item.data ? item.data.name : item.data.title,
      type: item.type,
      url: item.data.url.replace("https://swapi.dev/api/", "/"),
    }
  });

  useEffect(() => {
    dispatch(fetchList());
  }, [dispatch]);

  return(
    <Table dataSource={listData} rowKey="key">
      <Table.Column 
        title="Name"
        dataIndex="name"
        key="name"
        width='70%'
        render={(_text, record: ListType) => (
          <a
            href={record.url}
          >
            {record.name}
          </a>
        )}
        />
      <Table.Column
        title="Type"
        dataIndex="type"
        key="type"
        width='30%'
        render={(_text, record: ListType) => (
          <IconDiv>
            <IconImg src={require(`../../assets/icons/${record.type}.svg`)} alt={record.type} />
            <b>{record.type}</b>
          </IconDiv>
        )}
        />
    </Table>
  )
};