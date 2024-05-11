// Signup.jsx
import React, { useState } from 'react';

import { useNavigate } from "react-router-dom"

const Signup = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: ""
    })
    const [selectUsers, setSelectUsers] = useState(null)
    const history = useNavigate();

    const handleSelectUsers = (event)=> {
        setSelectUsers(event.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault(); 
        // handleSelectUsers();
        // history("/dashboard")

        if(selectUsers) {
            history(`${selectUsers}-dashboard`)
        }
    }
    const handleChange = (e) => {
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [e.target.name]: e.target.value
            }
        })
    }

    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8 dark:bg-gray-950">
            <div className="w-full max-w-md space-y-8">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-50">
                        Sign up for an account
                    </h2>
                    <p className="mt-2 text-center text-sm text-gray-600 dark:text-gray-400">
                        Or{" "}
                        <a
                            className="font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300"
                            href="/login"
                            rel="ugc"
                        >
                            log in to your existing account
                        </a>
                    </p>
                    <div className="options flex items-center justify-center pt-10">
                    <select onChange={handleSelectUsers}>
                          <option value="Buyers">Buyers</option>
                          <option value="Sellers">Sellers</option>
                          <option value="Land Instructor">Land Instructor</option> 
                    </select>
                    {selectUsers  && <p className='text-white ml-6'>You selected: {selectUsers}</p>}
                    </div>
                </div>
                <form className="mt-8 space-y-6" action="#" method="POST">
                    <input type="hidden" value="true" name="remember" />
                    <div className="-space-y-px rounded-md shadow-sm">
                        <div>
                            <label
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                htmlFor="name"
                            >
                                Name
                            </label>
                            <input
                                className="h-10 rounded-md bg-background text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 relative block w-full appearance-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 dark:border-gray-700 dark:bg-gray-950 dark:text-gray-50 dark:placeholder-gray-400"
                                id="name"
                                value={formData.name}
                                onChange={handleChange}
                                required=""
                                placeholder="Name"
                                type="text"
                                name="name"
                                fdprocessedid="gnozn"
                            />
                        </div>
                        <div>
                            <label
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                htmlFor="email-address"
                            >
                                Email address
                            </label>
                            <input
                                className="h-10 rounded-md bg-background text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 relative block w-full appearance-none border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 dark:border-gray-700 dark:bg-gray-950 dark:text-gray-50 dark:placeholder-gray-400"
                                value={formData.email}
                                onChange={handleChange}
                                required=""
                                placeholder="email@example.com"
                                type="email"
                                name="email"
                                fdprocessedid="ovjw5"
                            />
                        </div>
                        <div>
                            <label
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                htmlFor="password"
                            >
                                Password
                            </label>
                            <input
                                className="h-10 rounded-md bg-background text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 relative block w-full appearance-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 dark:border-gray-700 dark:bg-gray-950 dark:text-gray-50 dark:placeholder-gray-400"
                                value={formData.password}
                                onChange={handleChange}
                                autoComplete="current-password"
                                required=""
                                placeholder="Password"
                                type="password"
                                name="password"
                                fdprocessedid="gr0dag"
                            />
                        </div>
                    </div>
                    <div>
                        <button
                            className="items-center whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:bg-indigo-400 dark:text-gray-950 dark:hover:bg-indigo-500"
                            type="submit"
                            onClick={handleSubmit}   
                        >
                            Sign up
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Signup;