import { useLogin, useLocalStorage } from 'danholibraryrjs';

type Login = {
  username: string;
  password: string;
};

export default function App() {
  const [login, setLogin, removeLogin] = useLocalStorage('login', null as Login | null);
  const [component, logout] = useLogin({
    onLogin(username, password) {
      alert(`Logging in with username: ${username} and password: ${password}!`);
      setLogin({ username, password });
    },
    onLogout() {
      alert(`Logging out!`);
      removeLogin();
    },
    isLoggedIn: !!login,  
  });

  return component || <button onClick={logout}>Logout</button>;
}