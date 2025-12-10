'use client';
import React from 'react';

type Props = {
    src: string;
    title: string;
};

export default function VideoDemo({ src, title }: Props) {
    return (
        <div className="w-full max-w-4xl mx-auto my-12 p-4">
            <h3 className="text-2xl font-bold mb-4 text-center text-gray-900 dark:text-white">{title}</h3>
            <div className="relative pt-[56.25%] rounded-xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-700 bg-black">
                <video
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    controls
                    playsInline
                    loop
                    muted
                    preload="metadata"
                >
                    <source src={src} type="video/mp4" />
                    Your browser does not support HTML5 video.
                </video>
            </div>
        </div>
    );
}
