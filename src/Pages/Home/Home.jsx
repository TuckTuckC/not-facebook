import React from 'react';
import ReactDOM from 'react-dom';
import {GoogleLogin, GoogleLogout, useGoogleLogin, useGoogleLogout} from 'react-google-login';
import Product from '../../components/product';

const Home = () => {

    const responseGoogle = (response) => {
        console.log(response);
    }

    return (
        <div>
            <GoogleLogin clientId="657238987331-ejs8f81k6le8n4rs2tk7ch0gk69ht4vl.apps.googleusercontent.com" 
            buttonText="Login with Google" 
            onSuccess={responseGoogle} 
            onFailure={responseGoogle}
            cookiePolicy="single_host_origin" />
            {/* <GoogleLogout
            clientId="657238987331-ejs8f81k6le8n4rs2tk7ch0gk69ht4vl.apps.googleusercontent.com"
            buttonText="Logout">
            </GoogleLogout> */}
            <Product/>
        </div>
    );
};

export default Home;