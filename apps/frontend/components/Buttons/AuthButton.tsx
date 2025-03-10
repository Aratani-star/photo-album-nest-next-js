'use client'

import { useRouter } from 'next/router'

import { signInWithPopup } from 'firebase/auth'
import { auth, provider } from '../../lib/firebaseConfig'
import { useState } from 'react'

export default function AuthButton({
  label = '',
  backgroundColor = '#000000',
}) {
  const [user, setUser] = useState(null)

  const router = useRouter()
  return (
    <div>
      <button
        onClick={async () => {
          try {
            const result = await signInWithPopup(auth, provider)
            // setUser(result.user);
            setUser(result.user)
            console.log('User Info:', result.user)
            router.push('/album')
          } catch (error) {
            console.error('Error:', error)
          }
        }}
        className="p-2 bg-blue-500 text-white rounded"
      >
        {label}
        <style jsx>{`
          button {
            background-color: ${backgroundColor};
          }
        `}</style>
      </button>
    </div>
  )
}
