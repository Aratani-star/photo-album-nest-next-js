import AuthButton from "@/components/Atoms/AuthButton";
export default function SignIn() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold">NextAuth.js + Firebase</h1><br/>
      <AuthButton />
    </div>
  )
}