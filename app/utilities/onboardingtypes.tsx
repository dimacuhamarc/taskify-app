export type OnbType = 'SIGN_IN' | 'SIGN_UP';
export type OnboardingTitles = Record<OnbType, string>;
export type OnboardingMessages = Record<OnbType, string>;
export type OnboardingButtons = Record<OnbType, string>;

export const OnboardingMsg: OnboardingMessages = {
  SIGN_UP: 'Dont miss out and start organizing your tasks now!',
  SIGN_IN: 'Welcome back! Sign in and start managing your tasks with ease.',
};

export const OnboardingTtl: OnboardingTitles = {
  SIGN_UP: 'Create an Account',
  SIGN_IN: 'Sign In to your Account',
};

export const OnboardingButton: OnboardingButtons = {
  SIGN_UP: 'Already have an Account? Sign In',
  SIGN_IN: 'Don\'t have an Account? Join Now!',
};

export type SignInUpProps = {
  type: string;
};

export interface SignInInput {
  email: string;
  password: string;
}

export interface SignUpInput extends SignInInput {
  name: string;
}

export interface UserData {
  id: number;
  email: string;
  name: string;
}