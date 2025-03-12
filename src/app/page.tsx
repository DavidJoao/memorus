'use client'
import Link from "next/link"
import { useEffect } from "react"
import axios from "axios"
import Memorus from "@/app/components/general/Memorus"

export default function Home() {

    useEffect(() => {
        const printmessage = async () => {
            console.log(await axios.get("/api/helloworld"))
        }
        printmessage()
    }, [])

	return (
        <div className="flex flex-col items-center justify-center gap-3  min-h-screen page-bg p-3">
            <Memorus />
            <h2 className="text-black dark:text-neutral-300 font-semibold text-xl text-center">Your memories, our story.</h2>
            <div className="flex flex-row gap-2">
                <Link href={"/signin"} className="black-button w-[100px]">Sign In</Link>
                <Link href={"/signup"} className="white-button w-[100px]">Sign Up</Link>
            </div>
        </div>
    )


}