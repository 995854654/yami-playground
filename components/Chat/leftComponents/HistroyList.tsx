"use client"
import React from 'react'
import {
    Box,  List, ListItem, 
    ListItemText, ListItemIcon,

} from '@mui/material'
import ChatIcon from '@mui/icons-material/Chat';

const tempList = [
    {
        key: "111233",
        title: "What's material UI?",

    },
    {
        key: "111234",
        title: "What's material UI?",

    },
    {
        key: "111235",
        title: "What's material UI?",

    },
    {
        key: "111236",
        title: "What's material UI?",

    },
    {
        key: "1112337",
        title: "What's material UI?",

    },
    {
        key: "11123388",
        title: "What's material UI?",

    },
    {
        key: "1112362144",
        title: "What's material UI?",

    },
    {
        key: "1112334212137",
        title: "What's material UI?",

    },
    {
        key: "11123382321128",
        title: "What's material UI?",

    },
    {
        key: "111156889236",
        title: "What's material UI?",

    },
    {
        key: "11123398977",
        title: "What's material UI?",

    },
    {
        key: "111233808078",
        title: "What's material UI?",

    },
    {
        key: "1112380780786",
        title: "What's material UI?",

    },
    {
        key: "111233765675",
        title: "What's material UI?",

    },
    {
        key: "11125345783388",
        title: "What's material UI?",

    }
]
export default function HistroyList() {
  return (
    <Box className="chat-history-list">
    <List dense={false}>
        {
            tempList.map((item) => {
                return (
                    <ListItem key={item.key}>
                        <ListItemIcon sx={{ minWidth: "15%" }}>
                            <ChatIcon />
                        </ListItemIcon>
                        <ListItemText
                            primary={item.title}

                        />
                    </ListItem>
                )
            })
        }

    </List>
</Box>
  )
}
