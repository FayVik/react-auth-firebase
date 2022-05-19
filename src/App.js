/** @format */

import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import NavBar from './components/navbar';
import Products from './components/products';
import Home from './components/home';
import './App.css';
import ProductDetails from './components/productDetails';
import NotFound from './components/notFound';
// import Posts from './components/posts';
import Dashboard from './components/admin/dashboard';
import Users from './components/admin/users'
import Posts from './components/admin/posts'
import Login from './components/login'

function App() {

	return (
		<div>
			<NavBar />
			<div className='content'>
				<Routes>
					<Route path="/" element={<Home/>}/>
					<Route path="/products" element={<Products isCustomLayout={true} />} />
					<Route path='/login' element={<Login/>}/>
					{/* <Route path='/posts/:year/:month' element={<Posts />} /> */}


					<Route path="/admin" element={<Dashboard />}>
						<Route path='users' element={<Users />} />
						<Route path='posts' element={<Posts />} />
					</Route>

					
					<Route path='/products/:id' element={<ProductDetails />} />
					<Route path="*" element={<Navigate to={'/'} replace/> }/>
					<Route path='*' element={<NotFound/>}/>
				</Routes>
			</div>
		</div>
	);
}
export default App;
