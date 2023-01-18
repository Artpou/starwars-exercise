import React from 'react';
import { Button, Card } from 'antd';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { StarWarsTypes, Status } from '../../types';
import { Logo } from '../Logo/Logo';

const CenterDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  height: 90vh;
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const IconImg = styled.img`
  width: 128px;
  height: 128px;
  margin-right: 10px;
  width: 30%;
  filter: invert(1);
`;

interface PeoplePageProps {
  status: Status;
  data: StarWarsTypes | undefined;
  cardImg: string;
  cardContent: JSX.Element;
}

export function CardData({ status, data, cardImg, cardContent }: PeoplePageProps) {

  const renderCard = () => {
    switch (status) {
      case 'loading':
        return <CenterDiv><h1>Loading...</h1></CenterDiv>;
      case 'failed':
        return (
          <Logo 
            text="This data does not exist"
            children={(
              <Link to="/">
                <Button type="primary">Back to list</Button>
              </Link>
            )}
          />
        );
      case 'idle':
        return (
          <Card>
            <Link to="/">
              <Button type="primary">Back</Button>
            </Link>
            <CardContainer>
              <IconImg src={cardImg} alt={cardImg} />
              {cardContent}
            </CardContainer>
            <i>Created : {new Date(data?.created ?? '').toLocaleDateString()}</i>
          </Card>
        );
    }
  };

  

  return (
    <>
      {renderCard()}
    </>
  );
}