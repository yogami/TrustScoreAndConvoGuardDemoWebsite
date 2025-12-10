'use client';
import React, { useEffect, useState } from 'react';
import QRCode from 'react-qr-code';

export default function TrustScoreDemo() {
    const [score, setScore] = useState(95);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchScore = async () => {
            const apiUrl = process.env.NEXT_PUBLIC_TRUSTSCORE_API_URL;
            const agentId = process.env.NEXT_PUBLIC_DEMO_AGENT_ID;

            if (apiUrl && agentId) {
                setLoading(true);
                try {
                    const res = await fetch(`${apiUrl}/api/trustscore/${agentId}`);
                    if (res.ok) {
                        const data = await res.json();
                        if (data.score) setScore(data.score);
                    }
                } catch (error) {
                    console.error("Failed to fetch TrustScore", error);
                } finally {
                    setLoading(false);
                }
            }
        };

        fetchScore();
    }, []);

    return (
        <div id="demo" className="py-12 bg-gray-50 dark:bg-gray-800">
            <div className="max-w-screen-xl mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">TrustScore: Public Reputation</h2>
                <div className="flex justify-center items-center gap-8 flex-col md:flex-row">
                    {/* Badge Card */}
                    <div className="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-900 dark:border-gray-700 w-full max-w-sm">
                        <div className="flex items-center justify-between mb-4">
                            <span className="text-xl font-bold dark:text-white">Example App</span>
                            <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">Demo Mode</span>
                        </div>
                        <div className="flex justify-center items-center my-4">
                            <div className="relative w-32 h-32">
                                <svg className="w-full h-full" viewBox="0 0 36 36">
                                    <path
                                        className="text-gray-200 dark:text-gray-700"
                                        d="M18 2.0845
                                a 15.9155 15.9155 0 0 1 0 31.831
                                a 15.9155 15.9155 0 0 1 0 -31.831"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="3"
                                    />
                                    <path
                                        className={loading ? "text-gray-400" : (score > 80 ? "text-green-500" : "text-yellow-500")}
                                        strokeDasharray={`${score}, 100`}
                                        d="M18 2.0845
                                a 15.9155 15.9155 0 0 1 0 31.831
                                a 15.9155 15.9155 0 0 1 0 -31.831"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="3"
                                    />
                                    <text x="18" y="20.35" className="text-3xl font-bold dark:text-white" textAnchor="middle" fill="currentColor">
                                        {loading ? "..." : score}
                                    </text>
                                </svg>
                            </div>
                        </div>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Checks: GDPR, MDR Readiness</p>
                        <div className="text-sm text-gray-500 dark:text-gray-400">Last scan: {new Date().toLocaleDateString()}</div>
                    </div>

                    {/* QR Code Placeholder */}
                    <div className="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-900 dark:border-gray-700 w-full max-w-sm flex flex-col items-center">
                        <div className="bg-white p-4 rounded mb-4">
                            <QRCode
                                value={`https://compliance-stack-berlin.up.railway.app/?source=qr&score=${score}`}
                                size={128}
                                style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                                viewBox={`0 0 128 128`}
                            />
                        </div>
                        <p className="text-sm text-sm text-gray-500 dark:text-gray-400">Scan to see verified public profile</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
