
import React from 'react'
import { Box } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2';
import LeftNavbar from '@/components/Chat/LeftNavbar';
import CenterChat from '@/components/Chat/CenterChat';
import RightModal from '@/components/Chat/RightModal';

export default function ChatPage() {
  return (
    <Box
      sx={{
        backgroundColor: "#f3f6fb",
        height: "calc(100vh + 10px)",
      }}
    >
      <Grid container spacing={3}
      sx={{
        width: "100vw",

      }}
      >
      <Grid xs={2}>
        <LeftNavbar />
      </Grid>

      <Grid xs={9}>
      <CenterChat />
      </Grid>

      <Grid xs={1}>
      <RightModal />
      </Grid>
      </Grid>

    </Box>
  )
}
