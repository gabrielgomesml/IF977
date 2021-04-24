import React, { useState, useEffect } from 'react';

import { useDataContext } from '../utils/dataContext';

interface LoginProps {
    email: string;
    password: string;
}

const LoginToken: React.FC<LoginProps> = ({email, password}) => {
    const [tokenData, setTokenData] = useState<any>();
    console.log('oiiiiiiiiiii')
    const axios = require('axios').default;
    const handleToken = async () => {
        const res = await axios.post(`https://api.strateegia.digital/users/v1/auth/signin`,{},{auth:{username:email, password:password}})
        console.log(res.data);
        setTokenData(res.data);
    }
    useEffect(() => {
        handleToken();
      }, []);

    return (tokenData)
}

const getToken = async (email: string, password: string) => {
    //const [user, setUser] = useDataContext();
    
    const axios = require('axios').default;
    const res = await axios.post(`https://api.strateegia.digital/users/v1/auth/signin`,{},{auth:{username:email, password:password}})
    if (res && res.data) {
        const { access_token, refresh_token } = res.data;
        const user_data = await axios.get(`https://api.strateegia.digital/users/v1/user/me`,{headers:{"Authorization":`Bearer ${access_token}`}});
        console.log(user_data);
    } else {
        return 'error';
    }
}

export default getToken;
//export default LoginToken;