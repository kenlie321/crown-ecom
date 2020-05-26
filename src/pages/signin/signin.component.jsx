import React from 'react';
import './sign-in-and-sign-up.styles.scss';

import SigninComp from '../../component/sign-in/sign-in.component';
import SignUp from '../../component/sign-up/sign-up.component';

const SignIn = () => (
    <div className='sign-in-and-sign-up'>
        <SigninComp />
        <SignUp />
    </div>
);

export default SignIn;
