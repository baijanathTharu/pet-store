import { Auth } from 'aws-amplify';

export async function signUp({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  return await Auth.signUp({
    username: email,
    password,
  });
}

export async function signIn({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  return await Auth.signIn(email, password);
}

export async function confirmSignUp({
  email,
  code,
}: {
  email: string;
  code: string;
}) {
  return await Auth.confirmSignUp(email, code);
}

export async function resendConfirmationCode(username: string) {
  return await Auth.resendSignUp(username);
}

export async function signOut({ global = false }: { global: boolean }) {
  return await Auth.signOut({ global });
}

export async function forgotPassword(email: string) {
  return await Auth.forgotPassword(email);
}

export async function forgotPasswordSubmit({
  email,
  code,
  newPassword,
}: {
  email: string;
  code: string;
  newPassword: string;
}) {
  try {
    await Auth.forgotPasswordSubmit(email, code, newPassword);
    return {
      success: true,
    };
  } catch (e) {
    console.error(e);
    return {
      success: false,
    };
  }
}

export async function changePassword({
  oldPassword,
  newPassword,
}: {
  oldPassword: string;
  newPassword: string;
}) {
  try {
    const user = await Auth.currentAuthenticatedUser();
    await Auth.changePassword(user, oldPassword, newPassword);
    return {
      success: true,
    };
  } catch (e) {
    console.error(e);
    return {
      success: false,
    };
  }
}

export function getIdToken() {
  return new Promise((resolve, reject) => {
    Auth.currentSession()
      .then((data) => {
        const idToken = data.getIdToken();
        resolve(idToken.getJwtToken());
      })
      .catch(() => {
        reject(Error('Not signed in.'));
      });
  });
}

export function getCurrentUser() {
  return new Promise((resolve, reject) => {
    Auth.currentSession()
      .then((data) => {
        const idToken = data.getIdToken();
        const user = idToken.payload;
        resolve(user);
      })
      .catch(() => {
        reject(Error('Not signed in.'));
      });
  });
}
