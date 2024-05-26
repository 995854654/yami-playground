"use client";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import AuthenForm from './AuthenForm';
import FunctionList from './FunctionList';
import { authenUserModel } from "@/models/base/user"
import { postByFormData } from "@/utils/httpRequest"
import api from "@/config/api"
import CryptoJS from "crypto-js"
import { APIResponse } from '@/models/base/response';
import type { RootState, Dispatch } from '@/store'
import { useSelector, useDispatch } from 'react-redux';
import { useMemo, useState } from 'react';

export default function HomePage() {
    const [submitLoading, setSubmitLoading] = useState(false)
    const isAuthenticated = useSelector(
        (rootState: RootState) => rootState.authenModel.isAuthenticated
    )

    const dispatch = useDispatch<Dispatch>()
    const signIn = async (formData: authenUserModel) => {
        setSubmitLoading(true)
        let data = new FormData()
        data.append("username", formData.username)
        data.append("password", CryptoJS.MD5(formData.password).toString())
        const response: APIResponse = await postByFormData(api.login, data)
        setSubmitLoading(false)
        if (response.success) {
            dispatch.notificationModel.notify({ notifyType: "success", message: response.msg })
            saveToken(response.data.access_token, response.data.token_type)
            dispatch.authenModel.changeAuthenticatedStatus(true)
        } else {
            dispatch.notificationModel.notify({ notifyType: "error", message: response.msg })
        }
    }
    const saveToken = (token: string, tokenType: string) => {
        sessionStorage.setItem("token", token)
        sessionStorage.setItem("token_type", tokenType)
    }

    useMemo(() => {
        console.log("call API")
        if (isAuthenticated) {
            dispatch.authenModel.verify_authen_state()
        }
    }, [])
    return (
        <Box
            sx={{
                backgroundColor: '#d5e1e1',
                minHeight: "100vh"
            }}
        >
            <Typography variant="h4" gutterBottom
                sx={{
                    textAlign: "center",
                    paddingTop: "80px",
                }}
            >
                Welcome to the YAMI Set!!
            </Typography>
            {isAuthenticated ? <FunctionList /> : <AuthenForm submitForm={signIn} loading={submitLoading}/>}
        </Box>
    );
}
