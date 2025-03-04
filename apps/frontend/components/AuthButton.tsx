"use client";

import { useRouter } from 'next/router'

import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../lib/firebaseConfig";
import { useState } from "react";

export default function AuthButton() {
  const [user, setUser] = useState(null);

  const router = useRouter()
  return (
    <div>
      {user ? (
        <button
          onClick={async () => {
            try {
              const result = await signInWithPopup(auth, provider);
              setUser(result.user);
              console.log("User Info:", result.user);
              router.push('/album')
            } catch (error) {
              console.error("Error:", error);
            }
          }}
          className="p-2 bg-blue-500 text-white rounded"
        >
          Sign in with Google
        </button>
      ) : (
        <button
          onClick={async () => {
            try {
              const result = await signInWithPopup(auth, provider);
              setUser(result.user);
              console.log("User Info:", result.user);
              router.push('/album')
            } catch (error) {
              console.error("Error:", error);
            }
          }}
          className="p-2 bg-blue-500 text-white rounded"
        >
          Sign in with Google
        </button>
      )}
    </div>
  );
}