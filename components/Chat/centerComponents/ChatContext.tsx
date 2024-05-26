import React from 'react'
import {
    Box, Typography,

} from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2';
import LeftChatMessage from './LeftChatMessage';
import RightChatMessage from './RightChatMessage';
const chatMessage = [
    {
        direction: "right",
        avator: "/images/avatar/yjj.jpg",
        labelName: "你",
        context: "material UI如何解决分辨率影响页面布局"

    },
    {
        direction: "left",
        avator: "/images/avatar/chatgpt.png",
        labelName: "gpt-3.5 Turbo",
        context: "Material UI是一个基于React的UI组件库，它使用了Responsive布局和CSS Grid布局来解决不同分辨率影响页面布局的问题。\n\nResponsive布局：Material UI提供了一种响应式的设计方法，可以根据屏幕的大小和分辨率来自动调整页面的布局和样式。通过Media Query和CSS Flexbox，Material UI可以根据屏幕宽度和高度来调整组件的大小、位置和排列方式，从而适配不同大小的屏幕。\n\nCSS Grid布局：Material UI也使用了CSS Grid布局来实现页面的网格布局，这种布局方式可以让开发者更灵活地定义页面结构和布局。CSS Grid布局可以自动调整网格元素的位置和大小，从而适应不同分辨率的屏幕。\n\n通过这些技术，Material UI能够有效地解决分辨率影响页面布局的问题，使页面在不同设备和分辨率下都能够呈现出最佳的布局和用户体验。"
    },
    {
        direction: "right",
        avator: "/images/avatar/yjj.jpg",
        labelName: "你",
        context: "material UI如何解决分辨率影响页面布局"

    },
    {
        direction: "left",
        avator: "/images/avatar/chatgpt.png",
        labelName: "gpt-3.5 Turbo",
        context: "Material UI是一个基于React的UI组件库，它使用了Responsive布局和CSS Grid布局来解决不同分辨率影响页面布局的问题。\n\nResponsive布局：Material UI提供了一种响应式的设计方法，可以根据屏幕的大小和分辨率来自动调整页面的布局和样式。通过Media Query和CSS Flexbox，Material UI可以根据屏幕宽度和高度来调整组件的大小、位置和排列方式，从而适配不同大小的屏幕。\n\nCSS Grid布局：Material UI也使用了CSS Grid布局来实现页面的网格布局，这种布局方式可以让开发者更灵活地定义页面结构和布局。CSS Grid布局可以自动调整网格元素的位置和大小，从而适应不同分辨率的屏幕。\n\n通过这些技术，Material UI能够有效地解决分辨率影响页面布局的问题，使页面在不同设备和分辨率下都能够呈现出最佳的布局和用户体验。"
    },
    {
        direction: "right",
        avator: "/images/avatar/yjj.jpg",
        labelName: "你",
        context: "material UI如何解决分辨率影响页面布局"

    },
    {
        direction: "left",
        avator: "/images/avatar/chatgpt.png",
        labelName: "gpt-3.5 Turbo",
        context: "Material UI是一个基于React的UI组件库，它使用了Responsive布局和CSS Grid布局来解决不同分辨率影响页面布局的问题。\n\nResponsive布局：Material UI提供了一种响应式的设计方法，可以根据屏幕的大小和分辨率来自动调整页面的布局和样式。通过Media Query和CSS Flexbox，Material UI可以根据屏幕宽度和高度来调整组件的大小、位置和排列方式，从而适配不同大小的屏幕。\n\nCSS Grid布局：Material UI也使用了CSS Grid布局来实现页面的网格布局，这种布局方式可以让开发者更灵活地定义页面结构和布局。CSS Grid布局可以自动调整网格元素的位置和大小，从而适应不同分辨率的屏幕。\n\n通过这些技术，Material UI能够有效地解决分辨率影响页面布局的问题，使页面在不同设备和分辨率下都能够呈现出最佳的布局和用户体验。"
    }
]
export default function ChatData() {
    return (
        <Box className="chat-info">
            <Grid container spacing={2}>
                {
                    chatMessage.map((item, index) => {
                        return (
                            <Grid xs={12} display="flex" key={index}>
                                    {item.direction === "left"? <LeftChatMessage 
                                    avatar={item.avator} labelName={item.labelName} context={item.context}/>: <RightChatMessage 
                                    avatar={item.avator} labelName={item.labelName} context={item.context}/>}
                            </Grid>
                        )
                    })
                }
            </Grid>
            <Box className="chat-blur" />
        </Box>
    )
}
