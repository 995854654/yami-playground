"use client"
import React from 'react'
import { Provider } from "react-redux";
import { store } from "@/store";
import { Box } from '@mui/material';
import Notification from "@/components/Message"
import Interceptor from './Interceptor';
import { getPersistor } from "@rematch/persist";
import { PersistGate } from "redux-persist/lib/integration/react";
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
const persistor = getPersistor();

export default function IndexLayout({ children }: { children: React.ReactNode }) {
    return (
        <Box>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <PersistGate persistor={persistor}>
                    <Provider store={store}>
                        <Notification />
                        <Interceptor />
                        {children}
                    </Provider>
                </PersistGate>
            </ThemeProvider>


        </Box>

    )
}
