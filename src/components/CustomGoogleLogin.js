import React from 'react';
import { GoogleLogin } from 'react-google-login';

const clientId = '840466999232-ftkvdkmekuig8i89t793qggpmun6td9d.apps.googleusercontent.com';

export default class Login extends React.Component {
    onSuccess (res) {
        console.log('[Login Success] currentUser:', res.profileObj);
    };
    
    onFailure(res) {
        console.log('[Login failed] res:', res);
    }

    render() {
    return <div>
            <GoogleLogin
                clientId={clientId}
                buttonText='Login to edit'
                onSuccess={this.onSuccess}
                onFailure={this.onFailure}
                cookiePolicy={'single_host_origin'}
                style={{ marginTop: '100px' }}
                isSignedIn={true}
            />
        </div>
    }

}