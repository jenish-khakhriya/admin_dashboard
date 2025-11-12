
import RegisterForm from "@/components/form/RegisterForm";


export default function Register() {
  return (
    <div className="flex flex-col min-h-screen gap-32 items-center justify-start bg-custom-gradient py-20">
        <h1 className="font-bold text-4xl">
            Register Page
        </h1>
        <div className="sm:w-[500px] w-full pb-4 pt-1 px-6 bg-[#ffffff42]  rounded-md backdrop-blur-sm shadow-custom">
            <RegisterForm />
        </div>
    </div>
  );
}
