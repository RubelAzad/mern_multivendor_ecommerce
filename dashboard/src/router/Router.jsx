import React from 'react';
import { useRoutes } from 'react-router-dom';

const Router = ({allRoutes}) => {

    const routes = useRoutes([...allRoutes]); //pass the out props from data and spread operator
    return routes;
};

export default Router;