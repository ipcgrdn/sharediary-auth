'use client'

import { Button } from "@/components/ui/button"
import { signIn } from 'next-auth/react'
import { motion } from "framer-motion"

export default function Login () {
    return (
         <div className="h-screen flex bg-gradient-to-r from-white to-black ">
            {/* 왼쪽 */}
            <div className="hidden md:w-1/2 md:min-h-screen md:flex md:justify-center md:items-center md:text-black">
                <motion.div  initial={{ x: -1000 }} animate={{ x: 0 }} transition={{delay:1.3, type:"spring", }} 
                className="text-4xl font-serif subpixel-antialiased tracking-wide">
                 How was your day 
                </motion.div>
            </div>
            {/* 오른쪽 */}
            <div className="md:w-1/2 w-full min-h-screen flex justify-center items-center
            md:border-l md:border-solid md:border-black">
                <motion.div  initial={{ y: -1000 }} animate={{ y: 0 }} transition={{delay:1.5, type:"spring", }}>
                    <div className="text-center">
                        <p className="font-mono text-3xl italic pb-8 px-20 tracking-tight text-white"> 
                        ShareDiary</p>
                    </div>
                    <div className="text-center">
                        <Button variant="outline" onClick={()=>{signIn("naver",  { redirect: true, callbackUrl: "/" })}}
                            className="my-2 px-28 rounded-xl align-middle">
                            <img src="/naverrealreal.png" alt="kakao" width={38} height={1}></img>
                            &nbsp;네이버 계정으로 로그인</Button>
                        <br />
                        <Button variant="outline" onClick={()=>{signIn("kakao",  { redirect: true, callbackUrl: "/" })}}
                            className="my-2 px-28 rounded-xl align-middle">
                            <img src="/kakaotalk.jpeg" alt="kakao" width={40} height={1}></img>
                            카카오 계정으로 로그인 </Button>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

                        