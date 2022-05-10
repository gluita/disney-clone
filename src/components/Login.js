import styled from "styled-components";
import React, { useEffect } from "react";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../firebase-config";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  setSignOutState,
  setUserLoginDetails,
} from "../features/user/userSlice";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const username = useSelector((state) => state.user.name);
  const userphoto = useSelector((state) => state.user.photo);

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        setUser(user);
        navigate("/home");
      }
    });
  }, [username]);

  const setUser = (user) => {
    dispatch(
      setUserLoginDetails({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      })
    );
  };
  const handleAuth = () => {
    if (!username) {
      const provider = new GoogleAuthProvider();
      signInWithPopup(auth, provider)
        .then((re) => {
          setUser(re.user);
        })
        .catch((err) => {
          console.log(err.message);
        });
    } else if (username) {
      auth
        .signOut()
        .then(() => {
          dispatch(setSignOutState());
          navigate("/");
        })
        .catch((err) => console.log(err.message));
    }
  };

  return (
    <Container>
      <Content>
        <CTA>
          <CTA_logo_one src="/assests/images/cta-logo-one.svg" alt="" />
          <Sign_up onClick={handleAuth}> Get Started</Sign_up>
          <Description>
            Dua Lipa!!!! Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            cumque illo, culpa doloribus deserunt nostrum iure quasi consequatur
            aperiam.
          </Description>
          <CTA_logo_two src="/assests/images/cta-logo-two.png" alt="" />
        </CTA>
        <BgImage />
      </Content>
    </Container>
  );
}

const Container = styled.section`
  overflow: hidden;
  display: flex;
  height: 100vh;
  flex-direction: column;
  text-align: center;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  margin-bottom: 10vw;
  width: 100%;
  position: relative;
  justify-content: center;
  align-items: center;
  padding: 80px 40px;
  height: 100%;
  box-sizing: border-box;
`;
const BgImage = styled.div`
  height: 100%;
  background-position: top;
  background-image: url("/assests/images/login-background.jpg");
  z-index: -1;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  background-size: cover;
  background-repeat: no-repeat;
`;

const CTA = styled.div`
  max-width: 550px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const CTA_logo_one = styled.img`
  width: 100%;
  max-width: 678px;
  display: block;
  margin-bottom: 12px;
`;
const Sign_up = styled.a`
  font-weight: bold;
  width: 100%;
  background-color: #0063e5;
  padding: 16px 0;
  letter-spacing: 1.4px;
  font-size: 18px;
  margin-bottom: 12px;
  border-radius: 5px;
  &:hover {
    background-color: #0483ee;
  }
`;
const Description = styled.p`
  width: 100%;
  font-size: 14px;
  margin-bottom: 24px;
  letter-spacing: 1.5px;
  line-height: 1.5;
`;
const CTA_logo_two = styled.img`
  max-width: 548px;
  width: 100%;
`;
export default Login;
