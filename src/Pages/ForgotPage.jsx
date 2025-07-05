import { useState } from 'react'
import axios from 'axios'

export default function ForgotPage() {
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    const handleForgotPassword = async (e) => {
        e.preventDefault()
        setMessage(null)
        setError(null)
        setLoading(true)

        try {
            const response = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/forgot-password`, {
                email,
            })

            setMessage('A password reset link has been sent to your email.')
        } catch (err) {
            console.error('Password reset failed:', err)
            setError('Unable to process request. Please check your email address.')
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="relative min-h-screen bg-black p-8 flex items-center justify-center overflow-hidden">
            {/* Animated Background Blobs */}
            <div className="absolute top-0 left-0 w-full h-full z-0 overflow-hidden">
                <div className="absolute w-72 h-72 bg-purple-700 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob top-10 left-10" />
                <div className="absolute w-72 h-72 bg-pink-700 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob animation-delay-2000 top-40 right-10" />
                <div className="absolute w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob animation-delay-4000 bottom-10 left-20" />
            </div>

            {/* Forgot Password Card */}
            <div className="relative z-10 w-full max-w-md p-8 bg-gray-900 bg-opacity-90 rounded-3xl shadow-2xl text-white space-y-6">
                <h2 className="text-3xl font-bold text-center">Forgot Password</h2>
                <p className="text-sm text-gray-300 text-center">
                    Enter your email address and we'll send you a reset link.
                </p>

                <form onSubmit={handleForgotPassword} className="space-y-5">
                    <input
                        type="email"
                        placeholder="Email Address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-purple-600 transition"
                        required
                    />

                    {message && <p className="text-green-400 text-sm">{message}</p>}
                    {error && <p className="text-red-400 text-sm">{error}</p>}

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-purple-600 hover:bg-purple-700 transition text-white py-3 px-4 rounded-md font-semibold"
                    >
                        {loading ? 'Sending...' : 'Send Reset Link'}
                    </button>
                </form>
            </div>
        </div>
    )
}
