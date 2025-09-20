import { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default function RegisterPage() {
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [message, setMessage] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleRegister = async (e) => {
    e.preventDefault()
    setMessage(null)
    setError(null)

    if (password !== confirmPassword) {
      return setError('Passwords do not match.')
    }

    setLoading(true)

    try {
      // Make sure your backend server is running at this URL
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL || 'http://localhost:4000'}/api/register`,
        {
          email,
          username,
          password,
        },
        { timeout: 5000 } // optional: timeout to detect network issues
      )

      console.log('Registration Success:', response.data)
      setMessage('Account created successfully! Please log in.')
      setError(null)

      // Clear form fields after success
      setEmail('')
      setUsername('')
      setPassword('')
      setConfirmPassword('')
    } catch (err) {
      console.error('Registration failed:', err)

      // Better network error handling
      if (err.code === 'ERR_NETWORK') {
        setError('Cannot connect to server. Is backend running?')
      } else if (err.response?.data?.error) {
        setError(err.response.data.error)
      } else {
        setError('Registration failed. Please try again.')
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="relative min-h-screen bg-black p-8 flex items-center justify-center overflow-hidden">
      {/* Animated Blobs Background */}
      <div className="absolute top-0 left-0 w-full h-full z-0 overflow-hidden">
        <div className="absolute w-72 h-72 bg-purple-700 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob top-10 left-10" />
        <div className="absolute w-72 h-72 bg-pink-700 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob animation-delay-2000 top-40 right-10" />
        <div className="absolute w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob animation-delay-4000 bottom-10 left-20" />
      </div>

      {/* Register Form Card */}
      <div className="relative z-10 w-full max-w-md p-8 bg-gray-900 bg-opacity-90 rounded-3xl shadow-2xl text-white space-y-6">
        <h2 className="text-3xl font-bold text-center">Create Account</h2>
        <p className="text-sm text-gray-300 text-center">
          Fill in the details to register a new account.
        </p>

        <form onSubmit={handleRegister} className="space-y-5">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-purple-600 transition"
            required
          />

          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-purple-600 transition"
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-purple-600 transition"
            required
          />

          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
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
            {loading ? 'Registering...' : 'Register'}
          </button>
        </form>

        <div className="text-sm text-center mt-4 text-gray-400">
          Already have an account?{' '}
          <Link to="/login" className="text-purple-400 hover:underline">
            Login
          </Link>
        </div>
      </div>
    </div>
  )
}
