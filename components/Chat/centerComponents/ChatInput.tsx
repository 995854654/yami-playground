import React from 'react'
import {
    Box, Paper, InputBase, IconButton,
    ButtonBase
} from '@mui/material'
import NearMeOutlinedIcon from '@mui/icons-material/NearMeOutlined';
import Image from 'next/image';
import Grid from '@mui/material/Unstable_Grid2';
export default function ChatInput() {
    return (
        <Box className="chat-input">
            <Grid container>
                <Grid xs display="flex" justifyContent="center">
                    <Paper
                        sx={{
                            p: '0.5% 1%',
                            display: 'flex',
                            alignItems: 'center',
                            width: 700,
                            borderRadius: "50px",
                            boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
                            transition: "all 0.3s ease",
                            "&:hover": {
                                transform: "scale(1.05)",
                                boxShadow: "0 0 10px rgba(0, 0, 0, 0.8)"
                            }
                        }}
                    >
                        <ButtonBase sx={{ marginLeft: "10px" }}>
                            <Image alt="brain" src="/images/common/brain.png" width={25} height={25}></Image>
                        </ButtonBase>
                        <InputBase
                            multiline
                            sx={{ ml: 1, flex: 1 }}
                            placeholder="input what you want to know"
                        />
                        <IconButton type="button" sx={{
                            p: '10px',
                            backgroundColor: "#5662f6",
                            "&:hover": {
                                backgroundColor: "#d7f7eb"
                            }
                        }} aria-label="search">
                            <NearMeOutlinedIcon sx={{ color: "white" }} />
                        </IconButton>

                    </Paper>
                </Grid>

            </Grid>

        </Box>
    )
}
