import Logotype from '../../components/logotype/logotype';
import {FormEvent, useState} from 'react';
import {useAppDispatch} from '../../hooks';
import {loginAction} from '../../store/api-actions';
import {AuthData} from '../../types/auth-data';

function SignIn() {
  const [isErrorText, setIsErrorText] = useState(false);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const validEmail = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
  const validPassword = /(?=.*[0-9])(?=.*[a-zA-Z])/;


  const isValidEmail = (currentEmail:string) => validEmail.test(currentEmail);
  const isValidPassword = (currentPassword:string) => validPassword.test(currentPassword);

  const validateFormText = (currentEmail:string|undefined, currentPassword:string|undefined) => {
    if ((typeof currentPassword !== 'undefined' && isValidPassword(currentPassword) === false) || (typeof currentEmail !== 'undefined' && isValidEmail(currentEmail) === false && typeof currentPassword !== 'undefined' && isValidPassword(currentPassword) === false)) {
      return { message:'We can’t recognize this email and password combination. Please try again.', isValid: false};
    }
    if(typeof currentEmail !== 'undefined' && isValidEmail(currentEmail) === false) {
      return { message:'Please enter a valid email address', isValid: false};
    }
    return { message:'', isValid: true};
  };


  const dispatch = useAppDispatch();

  const onSubmit = (authData: AuthData) => {
    dispatch(loginAction(authData));
    setEmail('');
    setPassword('');
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    validateFormText(email, password)?.isValid === false && setIsErrorText(true);
    validateFormText(email, password)?.isValid && setIsErrorText(false);
    validateFormText(email, password)?.isValid &&
    onSubmit({
      email: email,
      password: password,
    });
  };

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logotype/>
        <h1 className="page-title user-page__title">Sign in</h1>
      </header>
      <div className="sign-in user-page__content">
        <form action="#" className="sign-in__form" onSubmit={(evt)=>{handleSubmit(evt);}} noValidate>
          <div className="sign-in__fields">
            <div className="sign-in__message">
              {isErrorText && <p>{validateFormText(email, password)?.message}</p>}
            </div>
            <div className="sign-in__field">
              <input className="sign-in__input" type="email" placeholder="Email address" name="user-email" id="user-email" value={email} onChange={(evt)=>{setEmail(evt.target.value);}}/>
              <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
            </div>
            <div className="sign-in__field">
              <input className="sign-in__input" type="password" placeholder="Password" name="user-password" id="user-password" value={password} onChange={(evt)=>{setPassword(evt.target.value);}}/>
              <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
            </div>
          </div>
          <div className="sign-in__submit">
            <button
              className="sign-in__btn"
              type='submit'
              onClick={()=>{setIsErrorText(false);}}
            >
                  Sign in
            </button>
          </div>
        </form>
      </div>
      <footer className="page-footer">
        <div className="logo">
          <a href="main.html" className="logo__link logo__link--light">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </a>
        </div>
        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  );
}

export default SignIn;
