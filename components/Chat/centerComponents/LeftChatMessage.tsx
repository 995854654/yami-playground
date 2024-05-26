import React from 'react'
import { Box, Avatar, IconButton, Tooltip } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import GoodIcon from "@/components/customIcon/Good"
import BadIcon from "@/components/customIcon/Bad"

type ChatContextBase = {
    avatar: string,
    labelName: string,
    context: string
}
export default function LeftChatMessage({
    avatar, labelName, context
}: ChatContextBase) {
    return (
        <Box>
            <Box
                sx={{
                    width: "100%"
                }}
            >
                <Grid container spacing={1}>
                    <Grid xs display="flex" justifyContent="start">
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
                    <Grid xs={12} display="flex" justifyContent="start">
                        <Box>
                            <Box
                                sx={{
                                    backgroundColor: "#ffffff",
                                    padding: "2%",
                                    boxShadow: "1 0 2px rgba(0, 0, 0, 0.5)",
                                    borderRadius: "25px",
                                }}
                            >{context}</Box>
                            <Box sx={{ marginLeft: "2%" }}>
                                <Tooltip title="点赞">
                                    <IconButton>
                                        <GoodIcon sx={{
                                            height: "20px",
                                            width: "20px"
                                        }} />
                                    </IconButton>
                                </Tooltip>
                                <Tooltip title="踩">
                                    <IconButton>
                                        <BadIcon sx={{
                                            height: "20px",
                                            width: "20px"
                                        }} />
                                    </IconButton>
                                </Tooltip>
                                <Tooltip title="复制">
                                    <IconButton>
                                        <ContentCopyIcon sx={{
                                            height: "20px",
                                            width: "20px"
                                        }} />
                                    </IconButton>
                                </Tooltip>


                            </Box>

                        </Box>

                    </Grid>

                </Grid>

            </Box>

        </Box>
    )
}
