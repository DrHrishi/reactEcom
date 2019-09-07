import React from 'react';

import './Sign-In.styles.scss'
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { SignInWithGoogle } from '../../firebase/firebase.utils';

class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }
    handelSubmit = (e) => {
        e.preventDefault();
        this.setState({ email: '', password: '' });
    }

    handelChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }
    render() {
        return (<div className='sign-in'>
            <h2>I already have account</h2>
            <span>Sign in with your Email and Password</span>

            <form onSubmit={this.handelSubmit}>
                <FormInput type="email" name="email" label='email' handelChange={this.handelChange} value={this.state.email} required />

                <FormInput type="password" name="password" label="passowrd" handelChange={this.handelChange} value={this.state.password} required />

                <div className='bottons'>
                    <CustomButton type="submit" value="Submit Form" > Sign In</CustomButton>
                    <CustomButton onClick={SignInWithGoogle} isGoogleSignIn>Sign In With Google</CustomButton>
                </div>
            </form>
        </div >
        )
    }
}
export default SignIn;