import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { LoadingButton } from '@mui/lab';
import { GraphQLClient } from 'graphql-request';
import { useState } from 'react';
import { clientWithoutAuth } from '../../graphql/graphQLClients';
import { registrationData } from '../../graphql/queries';

export async function getServerSideProps() {
    const { registrations } = await clientWithoutAuth.request(registrationData)

    return {
        props: {
            registrations,
        },
    };
}


export default function FormPropsTextFields({ registrations }) {
    console.log(registrations)
    const [registrationOnchange, setregistrationOnchange] = useState([])
    const HandleRegistrationChange = (e) => {
        setregistrationOnchange({
            ...registrationOnchange,
            [e.target.name]: e.target.value
        })
    }

    const HandleRegistration = async (e) => {
        e.preventDefault()
        console.log(registrations)
    }
    return (
        <div className="registration container">
            <Box
                component="form"
                onSubmit={HandleRegistration}

            >
                <div>
                    <TextField
                        required
                        label="UserName"
                        name='username'
                        onChange={HandleRegistrationChange}
                    />

                </div>
                <div>
                    <TextField
                        type="email"
                        label="Email"
                        name='email'
                        required
                        onChange={HandleRegistrationChange}
                    >
                    </TextField>
                </div>
                <div>
                    <TextField
                        type="password"
                        label="Password"
                        name='password'
                        required
                        onChange={HandleRegistrationChange}
                    >
                    </TextField>
                </div>
                <LoadingButton variant="outlined" type='submit'>
                    Submit
                </LoadingButton>
            </Box>
        </div>

    );
}
