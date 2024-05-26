import React, { useState } from 'react'
import { FormLabel, TextField, Box } from '@mui/material';
import { authenUserModel } from "@/models/base/user"
import { LoadingButton } from '@mui/lab';
import Grid from '@mui/material/Unstable_Grid2';
interface AuthenFormProps {
    submitForm: (formData: authenUserModel) => void;
    loading: boolean
}

const AuthenForm: React.FC<AuthenFormProps> = ({ submitForm,loading }) => {

    const [formData, setFormData] = useState({} as authenUserModel)
    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };
    return (
        <Grid container spacing={5}>
            <Grid xs={4}></Grid>
            <Grid xs={4}>
            <Box
            sx={{
                marginTop: "50px",
                padding: "10%"
            }}
        >
            <Box>
               
                <Box sx={{
                    fontWeight: "900",
                    marginBottom: "20px"
                }}>
                    Sign in Yami
                </Box>
            </Box>
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 2 },
                    boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.1)',
                    borderRadius: '10px',
                    paddingLeft: '40px',
                    paddingRight: '50px',
                    paddingTop: '20px',
                    paddingBottom: "20px",
                    backgroundColor: '#ffffff',
                    width: 600,
                    maxWidth: '100%'
                }}
                //   noValidate
                autoComplete="off"
            >
                <Box
                    sx={{ marginLeft: "-16px" }}
                >
                    <FormLabel sx={{ marginLeft: "16px" }}>username:</FormLabel>
                    <TextField
                        fullWidth
                        id="outlined-username"
                        label="username"
                        name="username"
                        color="primary"
                        onChange={handleChange}
                    />
                </Box>
                <Box
                    sx={{ marginLeft: "-16px" }}
                >
                    <FormLabel sx={{ marginLeft: "16px" }}>password:</FormLabel>
                    <TextField
                        fullWidth
                        id="outlined-password"
                        label="password"
                        name="password"
                        color="primary"
                        onChange={handleChange}
                    />
                </Box>
                <LoadingButton 
                loading={loading}
                variant="contained" onClick={() => submitForm(formData)} >LOG IN</LoadingButton>
            </Box>


        </Box>

            </Grid>
            <Grid xs={4}></Grid>
        </Grid>
        

    )
}

export default AuthenForm