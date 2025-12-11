'use client';
import React, { useState } from 'react';

export default function ConvoGuardDemo() {
    const [input, setInput] = useState('curl -X POST https://api.convoguard.com/v1/validate \\\n  -d \'{"transcript": "User: I am feeling great today!"}\'');
    const [output, setOutput] = useState<string | null>(null);

    const runDemo = async () => {
        setOutput("// Validating...");

        try {
            // Parse the curl command to get the JSON body
            const match = input.match(/-d\s+'([^']+)'/) || input.match(/-d\s+"([^"]+)"/);
            let body: any = {};
            if (match && match[1]) {
                try {
                    const parsed = JSON.parse(match[1]);
                    // Map 'text' to 'transcript' if present, otherwise keep as is
                    body = { transcript: parsed.text || parsed.transcript || parsed.message };
                } catch (e) {
                    console.error("Failed to parse JSON", e);
                }
            } else if (!input.trim().startsWith('curl')) {
                // Assume plain text input
                body = { transcript: input.trim() };
            }

            // Use environment variable or fallback to simulate for local dev without env
            const apiUrl = process.env.NEXT_PUBLIC_CONVOGUARD_API_URL;

            if (!apiUrl) {
                // FALLBACK SIMULATION (If no API URL provided)
                setTimeout(() => {
                    const textToCheck = JSON.stringify(body).toLowerCase();
                    if (textToCheck.includes('suicide') || textToCheck.includes('end it') || textToCheck.includes('kill myself')) {
                        setOutput(JSON.stringify({
                            status: "BLOCK",
                            risk_level: "HIGH",
                            category: "SELF_HARM",
                            action: "intervention_protocol_v1",
                            audit_id: "cg_sim_" + Math.random().toString(36).substr(2, 9),
                            timestamp: new Date().toISOString()
                        }, null, 2));
                    } else {
                        setOutput(JSON.stringify({
                            status: "PASS",
                            risk_level: "LOW",
                            audit_id: "cg_sim_" + Math.random().toString(36).substr(2, 9),
                            timestamp: new Date().toISOString()
                        }, null, 2));
                    }
                }, 800);
                return;
            }

            // Use local proxy to avoid CORS issues
            const res = await fetch('/api/proxy', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body)
            });

            const data = await res.json();
            setOutput(JSON.stringify(data, null, 2));

        } catch (error) {
            setOutput(JSON.stringify({ error: "API Connect Error", details: error instanceof Error ? error.message : String(error) }, null, 2));
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
