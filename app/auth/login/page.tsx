
import { Title } from '@/components';
import { LoginForm } from './ui/LoginForm';

export default function LoginPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Title text='Login'/>

      <div className="w-full sm:w-[350px] px-10 justify-center">
      <div className="flex w-screen justify-center mt-10">
        <LoginForm />
        </div>
      </div>
    </div>
  );
}