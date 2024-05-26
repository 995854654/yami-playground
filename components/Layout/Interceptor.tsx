import React, { useEffect } from 'react'


export default function Interceptor() {
    useEffect(() => {
        console.log("检测是否登录正常")
    },[])
    return (
        <></>
    )
}
