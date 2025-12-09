import React from 'react';

export default function CTA() {
    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                <div className="mx-auto max-w-screen-sm text-center">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold leading-tight text-gray-900 dark:text-white">Ready for DiGA compliance?</h2>
                    <p className="mb-6 font-light text-gray-500 dark:text-gray-400 md:text-lg">Join HelloBetter, MindDoc, and Ada Health in building trust with regulators.</p>
                    <a href="https://calendly.com/your-calendly-link" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                        Book a 30min Demo
                    </a>
                </div>
            </div>
        </section>
    );
}
