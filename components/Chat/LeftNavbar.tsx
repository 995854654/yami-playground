"use client"
import React from 'react'
import {
    Box, Button, IconButton,
    Divider
} from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from "@/components/customIcon/Search"
import "./leftGrid.css"
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Unstable_Grid2';
import HistroyList from './leftComponents/HistroyList';
import LeftNavbarBottom from './leftComponents/LeftNavbarBottom';


const Front = styled('span')(({ theme }) => ({
    ...theme.typography.button,
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(1),
}));

const LeftNavbar: React.FC = () => {
    return (
        <Box
            className="left-navbar"
        >
            <Box>

                <img
                    src="/images/common/chat-title.png"
                    style={{
                        width: "60%",
                        marginTop: "5%",
                        marginLeft: "5%",
                    }}
                    alt="" />
            </Box>
            <Box
                sx={{
                    marginTop: "10%",
                    marginBottom: "5%",
                    paddingLeft: "8%",
                    paddingRight: "5%"
                }}
            >
                <Grid container spacing={8}
                >
                    <Grid xs display="flex" justifyContent="center">

                        <Button
                            variant="contained"
                            sx={{
                                width: "100%",
                                borderRadius: "25px",
                            }}
                            startIcon={<AddIcon />}

                        >
                            New Chat
                        </Button>
                        <IconButton
                            sx={{
                                backgroundColor: "black",
                                marginLeft: "5%"
                            }}
                            aria-label="fingerprint" >
                            <SearchIcon color="white" />
                        </IconButton>
                    </Grid>
                </Grid>

            </Box>
            <Divider />
            <Box sx={{
                paddingLeft: "6%",
                paddingRight: "5%",

            }}>
                <Grid container spacing={8}>
                    <Grid xs={6} display="flex" justifyContent="start">
                        <Front>History</Front>
                    </Grid>
                    <Grid xs={6} display="flex" justifyContent="end">
                        <Button>clear</Button>
                    </Grid>
                </Grid>


            </Box>
            <Divider />
            <HistroyList />

            <Divider />
            <LeftNavbarBottom />

        </Box>
    )
}

export default LeftNavbar