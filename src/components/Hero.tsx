import React from 'react';

export default function Hero() {
    return (
        <section className="relative overflow-hidden">
            <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-24 relative z-10">
                <div className="inline-flex items-center justify-center px-4 py-2 mb-8 text-sm font-medium text-blue-700 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-200 animate-float">
                    🚀 Now Live: EU AI Act Compliance Suite
                </div>
                <h1 className="mb-4 text-5xl font-extrabold tracking-tight leading-none text-gray-900 md:text-6xl lg:text-7xl dark:text-white">
                    TrustScore + ConvoGuard <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">AI Stack</span>
                </h1>
                <p className="mb-8 text-lg font-normal text-gray-600 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-300">
                    The complete compliance operating system for Digital Health.
                    <br />
                    <span className="font-semibold text-blue-600 dark:text-blue-400">Automated Audit Trails</span> •
                    <span className="font-semibold text-purple-600 dark:text-purple-400"> Real-time Safety Guardrails</span>
                </p>
                <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                    <a href="#demo" className="inline-flex justify-center items-center py-4 px-8 text-base font-bold text-center text-white rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900 transform transition hover:scale-105 shadow-lg shadow-blue-500/50">
                        Launch Live Demo
                        <svg className="w-5 h-5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                    </a>
                </div>
            </div>

            {/* Background Glow Effect */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-4xl opacity-30 pointer-events-none">
                <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
                <div className="absolute top-20 right-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
                <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
            </div>
        </section>
    );
}
