
// import { useRouter } from "next/router";

// export default function SignIn() {
//   // const [error, setError] = useState('')
//   const router = useRouter()
//   // router.push('/api/auth/signin')
//   // // const { signIn } = useAuth()

//   // // const handleLogin = () => {
//   // //   if (signIn(username, password)) {
//   // //     router.push('/')
//   // //   } else {
//   // //     setError('Invalid username or password')
//   // //   }
//   // // }

//   return (
//     <div>Sign In</div>
//   )
// }



import AuthButton from "@/components/AuthButton";
export default function SignIn() {
  // const [username, setUsername] = useState('')
  // const [error, setError] = useState('')
  // const router = useRouter()
  // const { signIn } = useAuth()

  // const handleLogin = () => {
  //   if (signIn(username, password)) {
  //     router.push('/')
  //   } else {
  //     setError('Invalid username or password')
  //   }
  // }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold">NextAuth.js + Firebase</h1><br/>
      <AuthButton />
    </div>
  )
}