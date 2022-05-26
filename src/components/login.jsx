/** @format */

import React from 'react';
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../firebase';
import { useNavigate } from 'react-router-dom';

function Login() {
	const navigate = useNavigate();
	const SignInWithGoogleFunc = (e) => {
		e.preventDefault();
		signInWithPopup(auth, provider)
			.then((res) => {
				console.log(res);
				navigate('/admin');
			})
			.catch((error) => {
				console.log(error);
			});
	};

	return (
		<div>
			<form>
				<button type='submit' onClick={(e) => SignInWithGoogleFunc(e)}>
					Login with Google
				</button>
			</form>
		</div>
	);
}

export default Login;
