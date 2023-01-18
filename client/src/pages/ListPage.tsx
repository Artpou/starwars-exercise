import React from 'react';
import { List, Logo, SearchBar } from '../components';

export function ListPage() {
  return (
    <>
      <Logo 
        text="May the force be with you"
       />
      <SearchBar />
      <List />
    </>
  );
}
