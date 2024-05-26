import React from 'react'
import { Box, Button, Avatar } from '@mui/material'
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import Grid from '@mui/material/Unstable_Grid2';
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        backgroundColor: '#44b700',
        color: '#44b700',
        boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
        '&::after': {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            animation: 'ripple 1.2s infinite ease-in-out',
            border: '1px solid currentColor',
            content: '""',
        },
    },
    '@keyframes ripple': {
        '0%': {
            transform: 'scale(.8)',
            opacity: 1,
        },
        '100%': {
            transform: 'scale(2.4)',
            opacity: 0,
        },
    },
}));

export default function LeftNavbarBottom() {
    return (
        <Box sx={{
            marginTop: "15%"
        }}>
            <Grid container spacing={2}>
                <Grid
                    xs={12} display="flex"
                    justifyContent="center">
                    <Button
                        className="left-bottom-button"
                        startIcon={<SettingsOutlinedIcon />}
                        sx={{
                            borderRadius: "25px"
                        }}
                    >
                        Settings
                    </Button>

                </Grid>
                <Grid
                    xs={12} display="flex"
                    justifyContent="center">
                    <Box className="left-bottom-button"
                    >
                        <Grid container>
                            <Grid xs={3}>
                                <StyledBadge
                                    overlap="circular"
                                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                                    variant="dot"
                                >
                                    <Avatar
                                        component="span"
                                        sx={{
                                            width: "25",
                                            height: "25"
                                        }}
                                        alt="Remy Sharp" src="/images/avatar/yjj.jpg" />
                                </StyledBadge>
                            </Grid>
                            <Grid xs={9} display="flex" alignItems="center">
                                <Box component="span"
                                >Jun Jian Yang</Box>

                            </Grid>
                        </Grid>

                    </Box>

                </Grid>
            </Grid>
        </Box>
    )
}
