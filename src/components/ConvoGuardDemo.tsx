'use client';
import React, { useState } from 'react';

export default function ConvoGuardDemo() {
    const [input, setInput] = useState('curl -X POST https://api.convoguard.com/v1/validate \\\n  -d \'{"text": "I feel hopeless and want to end it"}\'');
    const [output, setOutput] = useState<string | null>(null);

    const runDemo = () => {
        if (input.toLowerCase().includes('suicide') || input.toLowerCase().includes('end it') || input.toLowerCase().includes('kill myself')) {
            setOutput(JSON.stringify({
                status: "BLOCK",
                risk_level: "HIGH",
                category: "SELF_HARM",
                action: "intervention_protocol_v1",
                audit_id: "cg_93849283",
                timestamp: new Date().toISOString()
            }, null, 2));
        } else {
            setOutput(JSON.stringify({
                status: "PASS",
                risk_level: "LOW",
                audit_id: "cg_93849289",
                timestamp: new Date().toISOString()
            }, null, 2));
        }
    };

    return (
        <div className="py-12 bg-gray-900 text-white">
            <div className="max-w-screen-xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-8">ConvoGuard AI: Real-time Validation</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <h3 className="text-lg font-semibold mb-2 text-gray-300">Request (Editable)</h3>
                        <textarea
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            className="w-full h-64 bg-black font-mono text-sm p-4 rounded border border-gray-700 text-green-400 focus:outline-none focus:border-blue-500"
                        />
                        <button onClick={runDemo} className="mt-4 px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded font-medium transition-colors">
                            Run Validation
                        </button>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-2 text-gray-300">Response & Audit Log</h3>
                        <pre className={`w-full h-64 bg-black font-mono text-sm p-4 rounded border border-gray-700 overflow-auto ${output && output.includes("BLOCK") ? "text-red-400" : "text-green-400"}`}>
                            {output || "// Click Run Validation..."}
                        </pre>
                    </div>
                </div>
            </div>
        </div>
    );
}
