import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { fetchData } from '../services/DataServices';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { CardData } from '../components';
import { Species } from '../types';

import logo from '../assets/icons/species.svg';

export function SpeciesPage() {
  const species = useAppSelector((state) => state.data.data) as Species | undefined;
  const status = useAppSelector((state) => state.data.status);
  const dispatch = useAppDispatch();

  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    dispatch(fetchData(id ?? '', 'species'));
  }, [dispatch, id]);

  return (
    <CardData
      data={species}
      status={status}
      cardImg={logo}
      cardContent={
        <div>
          <h1>{species?.name}</h1>
          <p>Classification: {species?.classification}</p>
          <p>Designation: {species?.designation}</p>
          <p>Average height: {species?.average_height}</p>
          <p>Skin colors: {species?.skin_colors}</p>
          <p>Hair colors: {species?.hair_colors}</p>
          <p>Eye colors: {species?.eye_colors}</p>
          <p>Average lifespan: {species?.average_lifespan}</p>
          <p>Language: {species?.language}</p>
        </div>
      }
    />
  );
}