import MarkdownRenderer from '@/components/MarkdownRenderer';
import loginFormData from './loginForm.md?raw';

const LoginFormPage = () => {
  let data = {
    id: 'login-form-md',
    title: 'Login Form Example',
    content: loginFormData,
  };
  return <MarkdownRenderer docContent={data} />;
};

export default LoginFormPage;
