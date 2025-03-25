'use client'
import React, { ChangeEvent, useState } from "react"

interface SigninFormI {
    email: string;
    password: string;
}

const SigninForm = () => {
    const initialForm: SigninFormI = {
        email: "",
        password: "",
    }

    const [form, setForm] = useState(initialForm)

    const handleChange = async (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value
        })
    }

    return (
        <form className="flex flex-col sm:grid sm:grid-cols-2 gap-2 p-2 w-full sm:w-1/2">
            <div className="flex flex-col col-span-2">
                <label className="text-xs dark:text-neutral-300">Email</label>
                <input 
                    name="email" 
                    value={form.email} 
                    className="input" 
                    onChange={handleChange}
                    type="email"
                />
            </div>

            <div className="flex flex-col col-span-2">
                <label className="text-xs dark:text-neutral-300">Password</label>
                <input 
                    name="password" 
                    value={form.password} 
                    className="input" 
                    onChange={handleChange}
                    type="password"
                />
            </div>

            <div className="col-span-2">
                <button className="white-button w-full">Sign In</button>
            </div>
        </form>
    )
}

export default SigninForm
