import { Login } from "@/components/Login";
import { LoginTips } from "@/components/LoginTips";

export default function Home() {
  return (
    <div className="h-screen w-full flex justify-center items-center p-10">
      <div className="flex w-full h-full">
        <LoginTips className="w-2/5" />
        <Login className="flex-1" />
      </div>
    </div>
  );
}
