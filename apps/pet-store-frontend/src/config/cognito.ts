export const cognitoConfig = {
  clientId: import.meta.env.VITE_AUTH_CLIENT_ID,
  userPool: import.meta.env.VITE_AUTH_USER_POOL,
  region: import.meta.env.VITE_AWS_REGION,
  callbackUri: import.meta.env.VITE_AUTH_CALLBACK_URI,
  signoutUri: import.meta.env.VITE_AUTH_SIGNOUT_URI,
  tokenScopes: ['openid', 'email', 'profile', 'aws.cognito.signin.user.admin'],
};
