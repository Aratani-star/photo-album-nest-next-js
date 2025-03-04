import { useState } from 'react'
import { useRouter } from 'next/router'
import { useAuth } from '../context/AuthContext'

export default function SignIn() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const router = useRouter()
  const { signIn } = useAuth()

  const handleLogin = () => {
    if (signIn(username, password)) {
      router.push('/')
    } else {
      router.push('/')
      return
      setError('Invalid username or password')
    }
  }

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded shadow-lg w-80">
        <h2 className="text-xl font-bold mb-4 text-black">Sign In</h2>
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full border p-2 rounded mt-2 text-black"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border p-2 rounded mt-2 text-black"
        />
        <button onClick={handleLogin} className="bg-blue-500 text-white px-4 py-2 mt-4 rounded w-full">
          Sign In
        </button>
      </div>
    </div>
  )
}
