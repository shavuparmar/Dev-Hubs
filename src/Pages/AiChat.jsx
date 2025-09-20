import React, { useState } from 'react';
import SidebarLayout from '../Common/SideBarLayout';

export default function AiChat() {
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(false);


    const handleSend = async () => {
        if (!input.trim()) return;

        const userMessage = { sender: 'user', text: input };
        setMessages((prev) => [...prev, userMessage]);
        setInput('');
        setLoading(true);

        try {
            const response = await fetch("http://localhost:4000/api/chat", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ message: input }), // ✅ must match { message } on server
            });

            const data = await response.json();

            if (data.reply) {
                setMessages((prev) => [...prev, { sender: 'ai', text: data.reply }]);
            } else {
                setMessages((prev) => [...prev, { sender: 'ai', text: "No reply received." }]);
            }
        } catch (error) {
            console.error("Error:", error);
            setMessages((prev) => [...prev, { sender: 'ai', text: "AI kaam nhi kr rha hai ." }]);
        } finally {
            setLoading(false);
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && !loading) {
            handleSend();
        }
    };

    return (
        <SidebarLayout>
            {/* Messages Area */}
            <div className="pb-32 px-4 pt-4 max-h-[calc(100vh-100px)] overflow-y-auto flex flex-col space-y-4">
                {messages.length === 0 && (
                    <p className="text-center text-gray-400 mt-10">Start chatting with AI...</p>
                )}
                {messages.map((msg, idx) => (
                    <div
                        key={idx}
                        className={`max-w-xl px-4 py-3 rounded-lg shadow-sm ${msg.sender === 'user'
                            ? 'bg-blue-500 text-white self-end ml-auto'
                            : 'bg-gray-200 text-gray-800 self-start mr-auto'
                            }`}
                    >
                        {msg.text}
                    </div>
                ))}
                {loading && (
                    <div className="text-sm text-gray-500 animate-pulse text-center">AI is typing...</div>
                )}
            </div>

            {/* Input Section */}
            <div className="fixed bottom-0 left-0 w-full  py-4 px-6 z-50">
                <div className="w-full max-w-2xl mx-auto flex gap-2">
                    <input
                        type="text"
                        placeholder="Type your message..."
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={handleKeyDown}
                        className="flex-grow h-12 px-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 bg-gray-100"
                        disabled={loading}
                    />
                    <button
                        onClick={handleSend}
                        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition disabled:opacity-50"
                        disabled={loading}
                    >
                        Send
                    </button>
                </div>
                <p className="text-sm text-gray-500 mt-2 text-center">
                    AI can make mistakes — please double-check responses.
                </p>
            </div>
        </SidebarLayout>
    );
}
