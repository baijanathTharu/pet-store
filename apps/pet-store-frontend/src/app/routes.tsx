import { Link, Outlet, createBrowserRouter } from 'react-router-dom';
import { LoginPage } from './pages/login';
import { SignupPage } from './pages/sign-up';

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <div>
        <Link to={'/auth'}>Auth</Link>
      </div>
    ),
  },
  {
    path: '/auth',
    element: (
      <div>
        <h2>Auth</h2>
        <div>
          <nav>
            <ul>
              <li>
                <Link to={'/auth/login'}>Login</Link>
              </li>
              <li>
                <Link to={'/auth/sign-up'}>Signup</Link>
              </li>
              <li>
                <Link to={'/auth/change-password'}>Change Password</Link>
              </li>
              <li>
                <Link to={'/auth/forgot-password'}>Forgot Password</Link>
              </li>
            </ul>
          </nav>
          <Outlet />
        </div>
      </div>
    ),
    children: [
      {
        path: 'login',
        element: <LoginPage />,
      },
      {
        path: 'sign-up',
        element: <SignupPage />,
      },
      {
        path: 'forgot-password',
        element: <div>forgot password page</div>,
      },
    ],
  },
]);
