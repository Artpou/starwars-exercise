import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { fetchData } from '../services/DataServices';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { CardData } from '../components';
import { Films } from '../types';

import logo from '../assets/icons/films.svg';

export function FilmsPage() {
  const films = useAppSelector((state) => state.data.data) as Films | undefined;
  const status = useAppSelector((state) => state.data.status);
  const dispatch = useAppDispatch();

  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    dispatch(fetchData(id ?? '', 'films'));
  }, [dispatch, id]);

  return (
    <CardData
      data={films}
      status={status}
      cardImg={logo}
      cardContent={
        <div>
          <h1>{films?.title}</h1>
          <p>Episode: {films?.episode_id}</p>
          <p>Director: {films?.director}</p>
          <p>Producer: {films?.producer}</p>
          <p>Release Date: {films?.release_date}</p>
        </div>
      }
    />
  );
}