import React from 'react';
import styled from 'styled-components';
import { Select, Form, Input, Button } from 'antd';

import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { dataTypes } from '../../services/DataServices';
import { fetchList } from '../../services/ListServices';

const SearchForm = styled(Form)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const SearchFormItem = styled(Form.Item)`
  margin: 10px;
`;

const TypeSelect = styled(Select)`
  min-width: 100px;
`;

interface formValues {
  search: string;
  type: string;
}

export function SearchBar() {  
  const [form] = Form.useForm();
  const requestStatus = useAppSelector((state) => state.list.status);

  const dispatch = useAppDispatch();

  const onFinish = async (values: any) => {
    if (requestStatus !== 'loading') {
      const { search, type } = values as formValues;
      dispatch(fetchList(search, type));
    }
  }

  return (
    <SearchForm 
      form={form} 
      name="control-hooks"
      initialValues={{ type: 'all' }}
      onFinish={onFinish}
    >
    <SearchFormItem name="search">
      <Input.Search placeholder="search by name" style={{ width: 300 }} />
    </SearchFormItem>

    <SearchFormItem name="type">
      <TypeSelect options={
        dataTypes.map((type) => {
          return {label: type, value: type}
        })
      } />
    </SearchFormItem>

    <SearchFormItem>
      <Button 
        type="primary"
        htmlType="submit"
        disabled={requestStatus === 'loading'}
      >
        {requestStatus === 'loading' ? 'Loading...' : 'Search'}
      </Button>
    </SearchFormItem>
  </SearchForm>
  );
}
