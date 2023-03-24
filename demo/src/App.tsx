import { useLogin, useLocalStorage } from 'danholibraryrjs';

type Login = {
  username: string;
  password: string;
};

export default function App() {
  const [login, setLogin, removeLogin] = useLocalStorage('login', undefined as Login | undefined);

  const [component, logout] = useLogin({
    onLogin(username, password) {
      setLogin({ username, password });
    },
    onLogout() {
      removeLogin();
    },
    isLoggedIn: !!login,  
  });

  return component || <button onClick={logout}>Logout</button>;
}