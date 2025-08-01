export const passwordRegex =
  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[^A-Za-z\d])[A-Za-z\d\W]{8,}$/;

export const usernameRegex = /^([a-zA-Z0-9]+|[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;

export const passwordErrorMessage =
  'Password must include letters, numbers and special characters, and be at least 8 characters long';

export const usernameErrorMessage = 'Username can only contain letters and numbers';
