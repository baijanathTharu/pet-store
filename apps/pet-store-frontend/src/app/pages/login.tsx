import { useState } from 'react';
import { signIn } from '../../auth/utils';

export function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    signIn({
      email,
      password,
    }).catch((e) => {
      console.error(e.message);
    });
  };
  return (
    <>
      <h3>Login</h3>
      <form onSubmit={handleLogin}>
        <input
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          placeholder="password"
        />
        <button>Log in</button>
      </form>
    </>
  );
}
