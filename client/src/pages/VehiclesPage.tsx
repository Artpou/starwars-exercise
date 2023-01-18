import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { fetchData } from '../services/DataServices';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { CardData } from '../components';
import { Vehicles } from '../types';

import logo from '../assets/icons/vehicles.svg';

export function VehiclesPage() {
  const vehicles = useAppSelector((state) => state.data.data) as Vehicles | undefined;
  const status = useAppSelector((state) => state.data.status);
  const dispatch = useAppDispatch();

  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    dispatch(fetchData(id ?? '', 'vehicles'));
  }, [dispatch, id]);

  return (
    <CardData
      data={vehicles}
      status={status}
      cardImg={logo}
      cardContent={
        <div>
          <h1>{vehicles?.name}</h1>
          <p>Model: {vehicles?.model}</p>
          <p>Manufacturer: {vehicles?.manufacturer}</p>
          <p>Cost in credits: {vehicles?.cost_in_credits}</p>
          <p>Length: {vehicles?.length}</p>
          <p>Max atmosphering speed: {vehicles?.max_atmosphering_speed}</p>
          <p>Crew: {vehicles?.crew}</p>
          <p>Passengers: {vehicles?.passengers}</p>
          <p>Cargo capacity: {vehicles?.cargo_capacity}</p>
          <p>Consumables: {vehicles?.consumables}</p>
          <p>Vehicle class: {vehicles?.vehicle_class}</p>
        </div>
      }
    />
  );
}