// Login.jsx
import {React, useState} from 'react';
import { useNavigate } from "react-router-dom"

const Login = () => {
    const [rememberMe, setRememberMe] = useState(false);
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    })

    const navigate = useNavigate()

    const handleCheckboxChange = () => {
        setRememberMe(!rememberMe);
    };

    const handleChange = (event) => {
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value
            }
        })
    }

    const handleRedirect = (e) => {
        e.preventDefault();

        navigate("/dashboard");
    }

    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8 dark:bg-gray-950">
            <div className="w-full max-w-md space-y-8">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-50">
                        Sign in to your account
                    </h2>
                    <p className="mt-2 text-center text-sm text-gray-600 dark:text-gray-400">
                        Or{" "}
                        <a
                            className="font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300"
                            href="#"
                            rel="ugc"
                        >
                            start your 14-day free trial
                        </a>
                    </p>
                </div>
                <form className="mt-8 space-y-6" action="#" method="POST">
                    <input type="hidden" value="true" name="remember" />
                    <div className="-space-y-px rounded-md shadow-sm">
                        <div>
                            <label
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 sr-only"
                                htmlFor="email"
                            >
                                Email address
                            </label>
                            <input
                                className="h-10 rounded-md bg-background text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 relative block w-full appearance-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 dark:border-gray-700 dark:bg-gray-950 dark:text-gray-50 dark:placeholder-gray-400"
                                value={formData.email}
                                autoComplete="email"
                                required=""
                                placeholder="email"
                                type="email"
                                name="email"
                               onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 sr-only"
                                htmlFor="password"
                            >
                                Password
                            </label>
                            <input
                                className="h-10 rounded-md bg-background text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 relative block w-full appearance-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 dark:border-gray-700 dark:bg-gray-950 dark:text-gray-50 dark:placeholder-gray-400"
                                value={formData.password}
                                required=""
                                placeholder="Password"
                                type="password"
                                name="password"
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          
                        </div>
                        <div className="text-sm">
                            <a
                                className="font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300"
                                href="#"
                                rel="ugc"
                            >
                                Forgot your password?
                            </a>
                        </div>
                    </div>
                    <div>
                        <button
                            className="items-center whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:bg-indigo-400 dark:text-gray-950 dark:hover:bg-indigo-500 dark:focus:ring-indigo-400 dark:focus:ring-offset-gray-950"
                            type="submit"
                            onClick={handleRedirect}
                        >
                            Sign in
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;