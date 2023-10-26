import { RouterProvider } from 'react-router-dom';
import { Amplify } from 'aws-amplify';
import { router } from './routes';
import { cognitoConfig } from '../config/cognito';

Amplify.configure({
  Auth: {
    userPoolId: cognitoConfig.userPool,
    userPoolWebClientId: cognitoConfig.clientId,
    region: cognitoConfig.region,
    oauth: {
      scope: cognitoConfig.tokenScopes,
      redirectSignIn: cognitoConfig.callbackUri,
      redirectSignOut: cognitoConfig.signoutUri,
      responseType: 'code',
    },
  },
});

export function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
