import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { fetchData } from '../services/DataServices';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { CardData } from '../components';
import { People } from '../types';

import logo from '../assets/icons/people.svg';

export function PeoplePage() {
  const people = useAppSelector((state) => state.data.data) as People | undefined;
  const status = useAppSelector((state) => state.data.status);
  const dispatch = useAppDispatch();

  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    console.log(id);
    dispatch(fetchData(id ?? '', 'people'));
  }, [dispatch, id]);

  return (
    <CardData
      data={people}
      status={status}
      cardImg={logo}
      cardContent={
        <div>
          <h1>{people?.name}</h1>
          <p>Height: {people?.height} cm</p>
          <p>Mass: {people?.mass} kg</p>
          <p>Hair Color: {people?.hair_color}</p>
          <p>Skin Color: {people?.skin_color}</p>
          <p>Eye Color: {people?.eye_color}</p>
          <p>Birth Year: {people?.birth_year}</p>
          <p>Gender : {people?.gender}</p>
        </div>
      }
    />
  );
}