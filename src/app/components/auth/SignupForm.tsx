'use client'
import { SignupFormI } from "@/app/utils/interfaces"
import React, { ChangeEvent, useState } from "react"


const SignupForm = () => {

    const initialForm: SignupFormI = {
         email: "",
         name: "",
         username: "",
         password: "",
         confirmPassword: "",
    }
    
    const [form, setForm] = useState(initialForm)
    const [message, setMessage] = useState("")

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
                <label className="text-xs dark:text-neutral-300">Name</label>
                <input name="name" value={form.name} className="input" onChange={handleChange}/>
            </div>

			<div className="flex flex-col">
                <label className="text-xs dark:text-neutral-300">Email</label>
                <input name="email" value={form.email} className="input" onChange={handleChange}/>
            </div>


			<div className="flex flex-col">
                <label className="text-xs dark:text-neutral-300">Username</label>
                <input name="username" value={form.username} className="input" onChange={handleChange}/>
            </div>

			<div className="flex flex-col">
                <label className="text-xs dark:text-neutral-300">Password</label>
                <input name="password" value={form.password} className="input" onChange={handleChange}/>
            </div>

			<div className="flex flex-col">
                <label className="text-xs dark:text-neutral-300">Confirm Password</label>
                <input name="confirmPassword" value={form.confirmPassword} className="input" onChange={handleChange}/>
            </div>

            <div className="col-span-2">
                <button className="white-button w-full">Signup</button>
                <p>{message}</p>
            </div>

		</form>
	)
}

export default SignupForm
