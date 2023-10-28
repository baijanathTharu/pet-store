import { useState } from 'react';
import { signUp } from '../../auth/utils';
import { Link } from 'react-router-dom';

export function SignupPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState<'loading' | 'done' | 'idle' | 'error'>(
    'idle'
  );

  const handleRegister: React.FormEventHandler = async (e) => {
    e.preventDefault();
    setStatus('loading');
    const data = await signUp({
      email,
      password,
    }).catch((err) => {
      console.log(err);
      setStatus('error');

      setTimeout(() => {
        setStatus('idle');
      }, 5000);
    });

    if (data) {
      data.user.getUserData((e, res) => {
        if (e) {
          console.log(e);
          setStatus('error');
        } else {
          console.log('user', res);
          setStatus('done');
        }
      });
    }
  };
  return (
    <div>
      {status === 'error' ? <p>Something went wrong. check log</p> : null}
      {status === 'done' ? (
        <p>
          Registered successfully ! You can login now{' '}
          <Link to="/auth/login">Login</Link>
        </p>
      ) : null}
      {status === 'idle' || status === 'loading' ? (
        <>
          <h3>Register</h3>
          <form onSubmit={handleRegister}>
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
            <button>
              {status === 'loading' ? 'Signing up...' : 'Sign up'}
            </button>
          </form>
        </>
      ) : null}
    </div>
  );
}
