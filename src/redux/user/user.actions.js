import userActionTypes from './user.types';

export const setCurrentUser = (user) => ({
	type: userActionTypes.GOOGLE_SIGNIN_SUCCESS,
	payload: user
});

export const checkUserSession = () => ({
	type: userActionTypes.CHECK_USER_SESSION
});

export const googleSignInStart = () => ({
  type: userActionTypes.GOOGLE_SIGNIN_START
});

export const emailSignInStart = (emailAndPassword) => ({
	type: userActionTypes.EMAIL_SIGNIN_START,
	payload: emailAndPassword
});

export const signInSuccess = (user) => ({
	type: userActionTypes.SIGN_IN_SUCCESS,
	payload: user
});

export const signInFailure = (error) => ({
	type: userActionTypes.SIGN_IN_FAILURE,
	payload: error
});

export const signUpStart = (userDetails) => ({
	type: userActionTypes.SIGN_UP_START,
	payload: userDetails
});

export const signUpSuccess = (user) => ({
	type: userActionTypes.SIGN_UP_SUCCESS,
	payload: user
});

export const signUpFailure = (error) => ({
	type: userActionTypes.SIGN_UP_FAILURE,
	payload: error
});

export const signOutStart = () => ({
	type: userActionTypes.SIGN_OUT_START,
});

export const signOutSuccess = () => ({
	type: userActionTypes.SIGN_OUT_SUCCESS
});

export const signOutFailure = (error) => ({
	type: userActionTypes.SIGN_OUT_FAILURE,
	payload: error
});

