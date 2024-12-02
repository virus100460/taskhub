import React, { useState } from 'react'

const Login = ({handleLogin}) => {

    

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const submitHandler = (e)=>{
        e.preventDefault()
        handleLogin(email,password)
        setEmail("")
        setPassword("")
    }


    return (
      <>
        <div className="flex h-screen w-screen items-center justify-center gap-5">
          <div className="border-2 rounded-xl border-emerald-600 p-20">
            <form
              onSubmit={(e) => {
                submitHandler(e);
              }}
              className="flex flex-col items-center justify-center"
            >
              <input
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                required
                className="outline-none bg-transparent border-2 border-emerald-600 font-medium text-lg py-2 px-6 rounded-full placeholder:text-gray-400"
                type="email"
                placeholder="Enter your email"
              />
              <input
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                required
                className="outline-none bg-transparent border-2 border-emerald-600 font-medium text-lg py-2 px-6 rounded-full mt-3 placeholder:text-gray-400"
                type="password"
                placeholder="Enter password"
              />
              <button className="mt-7 text-white border-none outline-none hover:bg-emerald-700 font-semibold bg-emerald-600 text-lg py-2 px-8 w-full rounded-full placeholder:text-white">
                Log in
              </button>
            </form>
          </div>
          <div>
            <p>Please find login cred below 👇</p>
          </div>
        </div>
        <div className="px-[55px]">
          <h1 className="text-center text-red-300 pb-5">login cred</h1>
          <div className="bg-slate-400 p-5">
            <p className="text-black">admin</p>
            <p className="text-black">
              email: "admin@me.com", password: "123"{" "}
            </p>
          </div>
          <br />
          <div className="bg-slate-400 p-5">
            <p className="text-black">employee</p>
            <p className="text-black">email: "e@e.com", password: "123",</p>
            <p className="text-black">
              email: "employee2@example.com", password: "123",
            </p>
            <p className="text-black">
              email: "employee3@example.com", password: "123",
            </p>
            <p className="text-black">
              {" "}
              pemail: "employee4@example.com", password: "123",
            </p>
            <p className="text-black">
              email: "employee5@example.com", password: "123",
            </p>
          </div>
        </div>
      </>
    );
}

export default Login