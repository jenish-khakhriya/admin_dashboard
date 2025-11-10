import LoginForm from "@/components/form/loginForm";

export default function Login() {
  return (
    <div className="flex flex-col h-screen gap-32 items-center justify-start bg-custom-gradient py-20">
        <h1 className="font-bold text-4xl">
            Login Page
        </h1>
        <div className="w-[500px] py-12 px-6 bg-[#ffffff42]  rounded-md backdrop-blur-sm shadow-custom">
            <LoginForm />
        </div>
    </div>
  );
}
