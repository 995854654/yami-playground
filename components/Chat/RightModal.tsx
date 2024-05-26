import React from 'react'
import { Box,Tooltip } from '@mui/material'
import Fab from '@mui/material/Fab';
import EditIcon from '@mui/icons-material/Edit';
const RightModal: React.FC = () => {
    return (
        <Box>
            <Tooltip title="没想好做什么功能">
            <Fab color="primary" aria-label="add"
            // variant="extended"
                sx={{
                    marginTop:"85vh",
                    marginLeft: "50%",
                }}
            >
                <EditIcon />
            </Fab>
            </Tooltip>
            
        </Box>
    )
}

export default RightModal
