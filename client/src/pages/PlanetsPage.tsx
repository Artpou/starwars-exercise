import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { fetchData } from '../services/DataServices';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { CardData } from '../components';
import { Planets } from '../types';

import logo from '../assets/icons/planets.svg';

export function PlanetsPage() {
  const planets = useAppSelector((state) => state.data.data) as Planets | undefined;
  const status = useAppSelector((state) => state.data.status);
  const dispatch = useAppDispatch();

  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    dispatch(fetchData(id ?? '', 'planets'));
  }, [dispatch, id]);

  return (
    <CardData
      data={planets}
      status={status}
      cardImg={logo}
      cardContent={
        <div>
          <h1>{planets?.name}</h1>
          <p>Rotation period: {planets?.rotation_period} days</p>
          <p>Orbital period: {planets?.orbital_period} days</p>
          <p>Diameter: {planets?.diameter} km</p>
          <p>Climate: {planets?.climate}</p>
          <p>Gravity: {planets?.gravity}</p>
          <p>Terrain: {planets?.terrain}</p>
          <p>Surface water: {planets?.surface_water}</p>
          <p>Population: {planets?.population}</p>
        </div>
      }
    />
  );
}