'use client';
import React, { useState } from 'react';

export default function ConvoGuardDemo() {
    const [messages, setMessages] = useState<{ role: 'user' | 'assistant' | 'system', content: string, status?: 'blocked' | 'safe' }[]>([
        { role: 'assistant', content: "Hello! I am your AI Health Assistant. How can I help you today?" }
    ]);
    const [input, setInput] = useState('');
    const [loading, setLoading] = useState(false);

    const sendMessage = async () => {
        if (!input.trim()) return;

        const userMsg = input;
        setInput('');
        setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
        setLoading(true);

        try {
            // 1. Validate with ConvoGuard
            const res = await fetch('/api/proxy', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ transcript: userMsg })
            });
            const data = await res.json();

            if (data.status === 'BLOCK' || (data.compliant === false)) {
                setMessages(prev => [...prev, {
                    role: 'system',
                    content: `🛡️ SAFETY INTERVENTION: Your message was blocked due to risk detection (${data.category || 'High Risk'}).`,
                    status: 'blocked'
                }]);
            } else {
                // 2. If Pass, Simulate AI Response
                setTimeout(() => {
                    setMessages(prev => [...prev, { role: 'assistant', content: "That sounds good! Being positive is great for your mental health. How else can I support you?" }]);
                }, 600);
            }

        } catch (error) {
            console.error(error);
            setMessages(prev => [...prev, { role: 'system', content: "Error connecting to safety engine." }]);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="py-12 bg-gray-50 dark:bg-gray-800">
            <div className="max-w-screen-xl mx-auto px-4">
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">ConvoGuard: Protection in Action</h2>
                    <p className="text-gray-500">See how our AI Guardrails protect users in real-time.</p>
                </div>

                <div className="max-w-md mx-auto bg-white dark:bg-gray-900 rounded-xl shadow-xl overflow-hidden border border-gray-200 dark:border-gray-700">
                    {/* Chat Header */}
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between">
                        <span className="font-semibold text-gray-700 dark:text-gray-200">AI Health Bot</span>
                        <div className="flex items-center gap-2">
                            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                            <span className="text-xs text-green-600 dark:text-green-400 font-medium">ConvoGuard Active</span>
                        </div>
                    </div>

                    {/* Chat Messages */}
                    <div className="h-80 overflow-y-auto p-4 space-y-4 bg-white dark:bg-gray-900">
                        {messages.map((m, i) => (
                            <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                <div className={`max-w-[80%] rounded-lg p-3 text-sm ${m.role === 'user'
                                        ? 'bg-blue-600 text-white rounded-br-none'
                                        : m.role === 'system'
                                            ? 'bg-red-50 text-red-600 border border-red-100'
                                            : 'bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-bl-none'
                                    }`}>
                                    {m.content}
                                </div>
                            </div>
                        ))}
                        {loading && (
                            <div className="flex justify-start">
                                <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-3 text-gray-500 text-xs">
                                    Validating safety...
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Input Area */}
                    <div className="p-4 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 flex gap-2">
                        <input
                            type="text"
                            className="flex-1 border border-gray-300 dark:border-gray-600 rounded-full px-4 py-2 text-sm focus:outline-none focus:border-blue-500 bg-white dark:bg-gray-700 dark:text-white"
                            placeholder="Type a message..."
                            value={input}
                            onChange={e => setInput(e.target.value)}
                            onKeyDown={e => e.key === 'Enter' && sendMessage()}
                        />
                        <button
                            onClick={sendMessage}
                            disabled={loading}
                            className="bg-blue-600 text-white rounded-full p-2 hover:bg-blue-700 disabled:opacity-50 transition-colors"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path></svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
