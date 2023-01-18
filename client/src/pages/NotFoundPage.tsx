import { Button } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';

import { Logo } from '../components';

export function NotFoundPage() {

  return (
    <Logo 
    text="This page does not exist"
    children={(
      <Link to="/">
        <Button type="primary">Back to list</Button>
      </Link>
      )}
    />
  );
}