"use client"
import React, { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { CiDark, CiLight } from "react-icons/ci";

const ToggleTheme = () => {
	const { theme, setTheme } = useTheme()
	const [mounted, setMounted] = useState(false)

	useEffect(() => {
		setMounted(true)
	}, [])

	if (!mounted) return null

	return (
		<button className="text-xl" onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
			{theme === "light" ? <CiDark/> : <CiLight/>}
		</button>
	)
}

export default ToggleTheme
