import React from 'react'
import {
    Box
} from '@mui/material'
import ChatContext from './centerComponents/ChatContext';
import ChatInput from './centerComponents/ChatInput';
import "./centerGrid.css"
const CenterChat: React.FC = () => {
    return (
        <Box className="center-chat">
            
            <ChatContext />
            <ChatInput />
            
        </Box>
    )
}

export default CenterChat