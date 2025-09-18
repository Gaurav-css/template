'use client';

import React, { useState, FormEvent } from 'react';

type FormData = {
  name?: string;
  email: string;
  password: string;
  confirmPassword?: string;
};

const GoogleIcon = () => (
    <svg className="w-5 h-5" viewBox="0 0 48 48"><path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.222,0-9.519-3.487-11.181-8.207l-6.571,4.819C9.656,39.663,16.318,44,24,44z"></path><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571l6.19,5.238C41.38,36.141,44,30.63,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path></svg>
);
const AppleIcon = () => (
    <svg className="w-5 h-5" viewBox="0 0 24 24"><path fill="currentColor" d="M12,2.2C10.9,2.2,9.7,2.7,9,3.5c-1-1-2.4-1.5-3.8-1.5c-2.2,0-4.1,1.8-4.1,4.1c0,1.3,0.6,2.5,1.5,3.4C2.8,9.7,2.2,10.9,2.2,12c0,1.1,0.6,2.3,1.5,3.2c-0.9,0.9-1.5,2.1-1.5,3.4c0,2.3,1.9,4.1,4.1,4.1c1.4,0,2.8-0.5,3.8-1.5c0.7,0.8,1.9,1.3,3,1.3s2.3-0.5,3-1.3c1,1,2.4,1.5,3.8,1.5c2.2,0,4.1-1.8,4.1-4.1c0-1.3-0.6-2.5-1.5-3.4c0.9-0.9,1.5-2.1,1.5-3.2c0-1.1-0.6-2.3-1.5-3.2c0.9-0.9,1.5-2.1,1.5-3.4c0-2.3-1.9-4.1-4.1-4.1c-1.4,0-2.8,0.5-3.8,1.5C14.3,2.7,13.1,2.2,12,2.2z M12,2.2c-0.1,0-0.2,0-0.3,0.1c-0.8,0.2-1.5,0.8-2,1.5c-0.7,1-1,2.3-0.8,3.5c0.2,1.5,1.1,2.8,2.4,3.4c0.1,0,0.2,0.1,0.3,0.1s0.2,0,0.3-0.1c1.3-0.6,2.2-1.9,2.4-3.4c0.2-1.2-0.1-2.5-0.8-3.5c-0.5-0.7-1.2-1.3-2-1.5C12.2,2.2,12.1,2.2,12,2.2z"></path></svg>
);


// --- Main Authentication Component ---
export default function AuthPage() {
    const [isLoginView, setIsLoginView] = useState<boolean>(true);
    const [formData, setFormData] = useState<FormData>({ email: '', password: '' });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (!isLoginView) {
            if (formData.password !== formData.confirmPassword) {
                alert("Passwords don't match!");
                return;
            }
        }
        // Placeholder for your actual login/signup logic
        console.log("Form data submitted:", formData);
        alert(`Simulating ${isLoginView ? 'Login' : 'Sign Up'}...`);
    };

    return (
        <div className="min-h-screen w-full flex items-center justify-center bg-gray-100 dark:bg-gray-900 p-4 pt-24">
            <div className="w-full max-w-4xl bg-white dark:bg-gray-800 rounded-2xl shadow-2xl grid grid-cols-1 md:grid-cols-2 overflow-hidden">
                
                {/* Left Column (Image) */}
                <div className="relative hidden md:block">
                   <img 
                      src="/img6.png" 
                      alt="A collage of happy pets and healthy food" 
                      className="absolute inset-0 w-full h-full object-cover" 
                    />
                    <div className="absolute top-8 left-8">
                        <img 
                           src="/whiteLogo.png" 
                           alt="Hooman Logo" 
                           className="h-10 w-auto" // Adjust size as needed
                        />
                    </div>
                </div>

                {/* Right Column (Form) */}
                <div className="p-8 md:p-12 flex flex-col justify-center">
                    <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
                        {isLoginView ? 'Log In' : 'Sign Up'}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 mb-8">
                        {isLoginView ? "Not a member yet?" : "Already have an account?"}
                        <button 
                            onClick={() => setIsLoginView(!isLoginView)}
                            className="text-orange-500 hover:underline font-semibold ml-2"
                        >
                            {isLoginView ? "Register now" : "Log in"}
                        </button>
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        {!isLoginView && (
                            <input
                                type="text"
                                name="name"
                                placeholder="Full Name"
                                required
                                onChange={handleInputChange}
                                className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-400"
                            />
                        )}
                        <input
                            type="email"
                            name="email"
                            placeholder="Email or Username"
                            required
                            onChange={handleInputChange}
                            className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-400"
                        />
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            required
                            onChange={handleInputChange}
                            className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-400"
                        />
                         {!isLoginView && (
                            <input
                                type="password"
                                name="confirmPassword"
                                placeholder="Confirm Password"
                                required
                                onChange={handleInputChange}
                                className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-400"
                            />
                        )}

                        {isLoginView && (
                            <div className="flex items-center justify-between text-sm">
                                <label className="flex items-center text-gray-600 dark:text-gray-400">
                                    <input type="checkbox" className="h-4 w-4 rounded border-gray-300 text-orange-500 focus:ring-orange-500" />
                                    <span className="ml-2">Keep me logged in</span>
                                </label>
                                <a href="#" className="font-semibold text-orange-500 hover:underline">Forgot your password?</a>
                            </div>
                        )}

                        <button
                            type="submit"
                            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-lg transition-colors duration-300"
                        >
                            {isLoginView ? 'LOG IN' : 'SIGN UP'}
                        </button>
                    </form>

                    <div className="flex items-center my-8">
                        <hr className="w-full border-gray-300 dark:border-gray-600"/>
                        <span className="px-4 text-gray-500 dark:text-gray-400 text-sm">Or</span>
                        <hr className="w-full border-gray-300 dark:border-gray-600"/>
                    </div>
                    
                    <div className="flex items-center justify-center gap-4">
                        <button className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                            <GoogleIcon />
                        </button>
                        <button className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                            <AppleIcon />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}