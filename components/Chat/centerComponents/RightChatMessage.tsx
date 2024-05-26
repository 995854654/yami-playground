import React from 'react'
import { Box, Avatar } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2';
type ChatContextBase = {
    avatar: string,
    labelName: string,
    context: string
}
export default function RightChatMessage({
    avatar, labelName, context
}: ChatContextBase) {
    return (
        <Box
            sx={{
                width: "100%"
            }}
        >
            <Box
            >
                <Grid container spacing={1}>
                    <Grid xs={12} display="flex" justifyContent="end">
                        <Avatar
                            component="span"
                            sx={{
                                width: "25px",
                                height: "25px"
                            }}
                            alt="Remy Sharp" src={avatar} />
                        <Box component="span"
                            sx={{ fontWeight: "900", marginLeft: "1%" }}
                        >{labelName}</Box>

                    </Grid>

                    <Grid xs={12} display="flex" justifyContent="end">
                        <Box
                            sx={{
                                backgroundColor: "#ffffff",
                                padding: "2%",
                                boxShadow: "1 0 2px rgba(0, 0, 0, 0.5)",
                                borderRadius: "25px",
                            }}
                        >{context}</Box>
                    </Grid>
                </Grid>

            </Box>

        </Box>
    )
}
