import LoginForm from "@/components/form/loginForm";

export default function Login() {
  return (
    <div className="flex flex-col min-h-screen gap-32 items-center justify-start bg-custom-gradient py-20">
        <h1 className="font-bold text-4xl">
            Login Page
        </h1>
        <div className="sm:w-[500px] w-full pb-4 pt-1 px-6 bg-[#ffffff42]  rounded-md backdrop-blur-sm shadow-custom">
            <LoginForm />
        </div>
    </div>
  );
}
