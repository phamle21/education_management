import apiBase from 'app/axios/apiBase';
import HtmlHead from 'components/html-head/HtmlHead';
import CsLineIcons from 'cs-line-icons/CsLineIcons';
import { useFormik } from 'formik';
import LayoutFullpage from 'layout/LayoutFullpage';
import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { NavLink, Redirect, Switch } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import * as Yup from 'yup';
import Swal from 'sweetalert2';
import { setCurrentUser } from 'auth/authSlice';
import { useDispatch } from 'react-redux';
import { userLoginState, tokenLoginState } from '../../recoil_store';

const Login = () => {
  const title = 'Login';
  const description = 'Login Page';

  const dispatch = useDispatch();

  const setUserLogin = useSetRecoilState(userLoginState);
  const setTokenLogin = useSetRecoilState(tokenLoginState);
  const [login, setLogin] = React.useState(false);

  if (localStorage.getItem('accessTokenEducation') !== null) {
    return <Redirect to="/admin" />
  }

  const validationSchema = Yup.object().shape({
    email: Yup.string().email().required('Email is required'),
    password: Yup.string().min(5, 'Must be at least 6 chars!').required('Password is required'),
  });
  const initialValues = { email: '', password: '' };

  const onSubmit = (values, { setStatus, setErrors }) => {
    apiBase.post('/login', values).then(res => {
      if (res.data.status === 'success') {
        // Recoil
        setUserLogin(res.data.user)
        setTokenLogin(res.data.authorisation.token)

        // Reduxt
        dispatch(setCurrentUser({
          currentUser: res.data.user,
          userToken: res.data.authorisation.token
        }))

        localStorage.setItem('accessTokenEducation', res.data.authorisation.token)
        Swal.fire({
          position: 'top-end',
          title: '',
          html: "Đăng nhập thành công",
          icon: 'success',
          showConfirmButton: false,
          timer: 3000
        })
        
        window.location.href = 'admin'

      }
      if (res.data.status === 'error') {
        setErrors({ email: res.data.msg })
        setErrors({ password: res.data.msg })
      }
    }).catch(err => {
      console.log(err)
    })
    console.log('submit form', values)
  };

  const formik = useFormik({ initialValues, validationSchema, onSubmit });
  const { handleSubmit, handleChange, values, touched, errors } = formik;

  const leftSide = (
    <div className="min-h-100 d-flex align-items-center">
      <div className="w-100 w-lg-75 w-xxl-50">
        <div>
          <div className="mb-5">
            <h1 className="display-3 text-white">Code Academy</h1>
            <h1 className="display-3 text-white">Ready For You To Learn</h1>
          </div>
          <p className="h6 text-white lh-1-5 mb-5">
            Dynamically target high-payoff intellectual capital for customized technologies. Objectively integrate emerging core competencies before
            process-centric communities...
          </p>
          {/* <div className="mb-5">
            <Button size="lg" variant="outline-white" href="/">
              Learn More
            </Button>
          </div> */}
        </div>
      </div>
    </div>
  );

  const rightSide = (
    <div className="sw-lg-70 min-h-100 bg-foreground d-flex justify-content-center align-items-center shadow-deep py-5 full-page-content-right-border">
      <div className="sw-lg-50 px-5">
        {/* <div className="sh-11">
          <NavLink to="/">
            <div className="logo-default" />
          </NavLink>
        </div> */}
        <div className="mb-5">
          <h2 className="cta-1 mb-0 text-primary">Xin chào,</h2>
          <h2 className="cta-1 text-primary">Chào mừng bạn đến với trang quản lý!</h2>
        </div>
        <div className="mb-5">
          <p className="h6">Vui lòng nhập chính xác các thông tin dưới đây để đăng nhập.</p>
        </div>
        <div>
          <form id="loginForm" className="tooltip-end-bottom" onSubmit={handleSubmit}>
            <div className="mb-3 filled form-group tooltip-end-top">
              <CsLineIcons icon="email" />
              <Form.Control type="text" name="email" placeholder="Email" value={values.email} onChange={handleChange} />
              {errors.email && touched.email && <div className="d-block invalid-tooltip">{errors.email}</div>}
            </div>
            <div className="mb-3 filled form-group tooltip-end-top">
              <CsLineIcons icon="lock-off" />
              <Form.Control type="password" name="password" onChange={handleChange} value={values.password} placeholder="Mật khẩu" />
              <NavLink className="text-small position-absolute t-3 e-3" to="/forgot-password">
                Quên mật khẩu?
              </NavLink>
              {errors.password && touched.password && <div className="d-block invalid-tooltip">{errors.password}</div>}
            </div>
            <Button size="lg" type="submit">
              Đăng nhập
            </Button>
          </form>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {login && <Redirect to="/admin" />}
      <HtmlHead title={title} description={description} />
      <LayoutFullpage left={leftSide} right={rightSide} />
    </>
  );
};

export default Login;
