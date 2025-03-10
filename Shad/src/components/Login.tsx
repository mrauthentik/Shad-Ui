import { LoginForm } from "./login-form"

const Login = () => {
  return (
    
    <div className="flex min-h-svh flex-col items-center justify-center bg-black p-6 md:p-10 rounded">
        <div className="w-full max-w-sm md:max-w-3xl">
         <LoginForm />
        </div>
      
    </div>
  )
}

export default Login
