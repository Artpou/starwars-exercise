import React from 'react';
import { ConfigProvider, theme } from 'antd';
import styled from 'styled-components';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import { FilmsPage, ListPage, PeoplePage, PlanetsPage, SpeciesPage, VehiclesPage, StarshipsPage } from './pages';
import { NotFoundPage } from './pages/NotFoundPage';

const AppDiv = styled.div`
  padding: 20px 80px;
  align-items: center;
`;

const router = createBrowserRouter([
  {
    path: "/",
    element: <ListPage />,
    errorElement: <NotFoundPage />
  },
  {
    path: "/people/:id",
    element: <PeoplePage />
  },
  {
    path: "/films/:id",
    element: <FilmsPage />
  },
  {
    path: "/species/:id",
    element: <SpeciesPage />
  },
  {
    path: "/planets/:id",
    element: <PlanetsPage />
  },
  {
    path: "/starships/:id",
    element: <StarshipsPage />
  },
  {
    path: "/vehicles/:id",
    element: <VehiclesPage />
  },
]);

export function App() {
  const { darkAlgorithm } = theme;

  return (
    <ConfigProvider
    theme={{
      algorithm: darkAlgorithm,
    }}>
      <AppDiv>
        <RouterProvider router={router} />
      </AppDiv>
    </ConfigProvider>

  );
}

export default App;