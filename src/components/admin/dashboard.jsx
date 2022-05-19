/** @format */

import React from 'react';
import Sidebar from './sidebar';
import { Outlet } from 'react-router-dom';
// import { Routes, Route } from 'react-router-dom';
// import Users from './users';
// import Posts from './posts';
import Button from '../button';

const Dashboard = () => {
	return (
		<div>
			<h1>Admin Dashboard</h1>

			<Button>to access</Button>

			<Sidebar />

			<Outlet />
		</div>
	);
};

export default Dashboard;
