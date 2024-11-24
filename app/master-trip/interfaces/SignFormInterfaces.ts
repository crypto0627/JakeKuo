export interface SignUpProps {
  onSignUp: (username: string, email: string, password: string) => void
  onClose: () => void
  onGoogleSignUp: () => void
  onGitHubSignUp: () => void
}

export interface SignUpFormData {
  username: string
  email: string
  password: string
}

export interface SignInProps {
  onSignIn: (email: string, password: string) => void
  onClose: () => void
  onForgotPassword: () => void
}
