import React, { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { toast } from "sonner"
import { AppContext } from "./BillContext"

const Login = () => {
  const { setIsAuthenticated } = useContext(AppContext)
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const user = {
    username: "rajkumar",
    password: "123456",
  }

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!username) {
      toast.error("Please Enter a Username")
    }
    if (!password) {
      toast.error("Please Enter a Password")
    }
    if (username && password) {
      if (username === user.username && password === user.password) {
        navigate("/")
        setIsAuthenticated(true)
        toast.success(`Welcome Mr.${user.username?.toUpperCase()}`)
      } else {
        toast.error("Invalid Credentials!")
      }
    }
  }
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="p-10 border border-zinc-400/25 shadow-xl rounded-xl bg-white">
        <h1 className="text-3xl font-bold mb-4">
          Welcome to SRI MAHALXMI TRANSPORTS
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-2">
            <label htmlFor="username" className="text-zinc-500 font-semibold">
              Username
            </label>
            <input
              type="text"
              id="username"
              placeholder="Enter your username..."
              className="focus:outline-none border border-zinc-400/25 rounded-lg px-4 py-3 tracking-wider"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-2 my-4">
            <label htmlFor="password" className="text-zinc-500 font-semibold">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your Password..."
              className="focus:outline-none border border-zinc-400/25 rounded-lg px-4 py-3 tracking-wider"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className="px-6 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 font-semibold text-white tracking-wider cursor-pointer">
            Login
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login
