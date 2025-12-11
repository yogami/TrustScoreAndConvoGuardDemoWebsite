'use client';
import React, { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

function CertificateContent() {
    const searchParams = useSearchParams();
    const score = searchParams.get('score') || '95';
    const company = "Example Health App";

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
            <div className="bg-white w-full max-w-2xl shadow-2xl rounded-xl overflow-hidden border border-gray-200">
                <div className="bg-green-600 p-6 text-center">
                    <h1 className="text-3xl font-bold text-white mb-2">Verified Compliance Certificate</h1>
                    <p className="text-green-100">Issued by Compliance Stack Berlin</p>
                </div>
                <div className="p-8 text-center">
                    <div className="mb-8">
                        <div className="inline-flex items-center justify-center w-32 h-32 rounded-full bg-green-50 mb-4">
                            <span className="text-5xl font-bold text-green-600">{score}</span>
                        </div>
                        <h2 className="text-2xl font-bold text-gray-800">{company}</h2>
                        <div className="flex items-center justify-center gap-2 mt-2 text-green-600 font-medium">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                            <span>Active & Compliant</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 text-left mb-8">
                        <div className="p-4 bg-gray-50 rounded-lg">
                            <p className="text-sm text-gray-500">Regulation</p>
                            <p className="font-semibold text-gray-800">EU AI Act (High Risk)</p>
                        </div>
                        <div className="p-4 bg-gray-50 rounded-lg">
                            <p className="text-sm text-gray-500">Data Privacy</p>
                            <p className="font-semibold text-gray-800">GDPR Compliant</p>
                        </div>
                        <div className="p-4 bg-gray-50 rounded-lg">
                            <p className="text-sm text-gray-500">Medical Class</p>
                            <p className="font-semibold text-gray-800">MDR Class IIa</p>
                        </div>
                        <div className="p-4 bg-gray-50 rounded-lg">
                            <p className="text-sm text-gray-500">Last Audit</p>
                            <p className="font-semibold text-gray-800">{new Date().toLocaleDateString()}</p>
                        </div>
                    </div>

                    <div className="border-t border-gray-100 pt-6">
                        <p className="text-xs text-gray-400">Certificate ID: REF-{Math.random().toString(36).substr(2, 9).toUpperCase()}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function CertificatePage() {
    return (
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading Certificate...</div>}>
            <CertificateContent />
        </Suspense>
    );
}
