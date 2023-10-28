import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

export const AmplifyAuthPage = withAuthenticator(({ signOut, user }) => {
  if (user) {
    return (
      <div>
        <p>you are logged in as {user.username}</p>
        {typeof signOut === 'function' ? (
          <button
            onClick={() => {
              signOut();
            }}
          >
            Logout
          </button>
        ) : null}
      </div>
    );
  }
  return (
    <div>
      <p>You are not logged in. please login</p>
    </div>
  );
});
