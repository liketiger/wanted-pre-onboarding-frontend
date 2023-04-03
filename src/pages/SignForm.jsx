const SignForm = () => {
  let isValid = true;

  return <form>
    <input type="text" name="email" data-testid="email-input" />
    <input type="password" name="password" data-testid="password-input" />
    <button type="submit" data-testid="signup-button" disabled={!isValid}>회원가입</button>
  </form>
}

export default SignForm;