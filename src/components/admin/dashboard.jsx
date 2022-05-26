/** @format */

import React from 'react';
import Sidebar from './sidebar';
import { Outlet } from 'react-router-dom';

const Dashboard = () => {
	return (
		<div className='container-fluid'>
			<h1>Admin Dashboard</h1>

			<Sidebar />

			<Outlet />
		</div>
	);
};

export default Dashboard;
