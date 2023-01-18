import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { fetchData } from '../services/DataServices';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { CardData } from '../components';
import { Starships } from '../types';

import logo from '../assets/icons/starships.svg';

export function StarshipsPage() {
  const starships = useAppSelector((state) => state.data.data) as Starships | undefined;
  const status = useAppSelector((state) => state.data.status);
  const dispatch = useAppDispatch();

  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    dispatch(fetchData(id ?? '', 'starships'));
  }, [dispatch, id]);

  return (
    <CardData
      data={starships}
      status={status}
      cardImg={logo}
      cardContent={
        <div>
          <h1>{starships?.name}</h1>
          <p>Model: {starships?.model}</p>
          <p>Manufacturer: {starships?.manufacturer}</p>
          <p>Cost in credits: {starships?.cost_in_credits}</p>
          <p>Length: {starships?.length}</p>
          <p>Max atmosphering speed: {starships?.max_atmosphering_speed}</p>
          <p>Crew: {starships?.crew}</p>
          <p>Passengers: {starships?.passengers}</p>
          <p>Cargo capacity: {starships?.cargo_capacity}</p>
          <p>Consumables: {starships?.consumables}</p>
          <p>Hyperdrive rating: {starships?.hyperdrive_rating}</p>
          <p>MGLT: {starships?.MGLT}</p>
          <p>Starship class: {starships?.starship_class}</p>
        </div>
      }
    />
  );
}