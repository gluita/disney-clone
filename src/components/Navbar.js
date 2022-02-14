import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../firebase-config";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  setSignOutState,
  setUserLoginDetails,
} from "../features/user/userSlice";
import { NavLink as Link } from "react-router-dom";
import { GoThreeBars, GoX } from "react-icons/go";
import { icons } from "react-icons/lib";

function Navbar() {
  const navMenuRef = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const username = useSelector((state) => state.user.name);
  const userphoto = useSelector((state) => state.user.photo);
  const [showMenu, setShowMenu] = useState(false);

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

  const hideMenu = () => {
    setShowMenu(false);
    changeMenu();
  };
  const menuShow = () => {
    setShowMenu(true);
    changeMenu();
  };

  const changeMenu = () => {
    if (showMenu) {
      navMenuRef.current.style.right = "0";
    } else {
      navMenuRef.current.style.right = "-100%";
    }
  };

  return (
    <Nav>
      <Logo>
        <img src="/assests/images/logo.svg" alt="" />
      </Logo>
      {!username ? (
        <LoginBtn  onClick={handleAuth}>Login</LoginBtn>
      ) : (
        <>
          <NavMenu ref={navMenuRef}>
            <NavLinks>
              <NavLink to="/home" activeClassName="active"  onClick={hideMenu}>
                <LinkContainer>
                  <NavImg>
                    <img src="/assests/images/home-icon.svg" alt="" />
                  </NavImg>
                  <LinkName>Home</LinkName>
                </LinkContainer>
              </NavLink>
              <NavLink to="/search" activeClassName="active" onClick={hideMenu}>
                <LinkContainer>
                  <NavImg>
                    <img src="/assests/images/search-icon.svg" alt="" />
                  </NavImg>
                  <LinkName>Search</LinkName>
                </LinkContainer>
              </NavLink>
              <NavLink to="/series" activeClassName="active" onClick={hideMenu}>
                <LinkContainer>
                  <NavImg>
                    <img src="/assests/images/series-icon.svg" alt="" />
                  </NavImg>
                  <LinkName>Series</LinkName>
                </LinkContainer>
              </NavLink>
            </NavLinks>
            <CloseBtn>
              <GoX onClick={hideMenu}></GoX>
            </CloseBtn>
            <SignOutMob onClick={handleAuth}>
              <p>Sign Out</p>
            </SignOutMob>
          </NavMenu>
          <Bars onClick={menuShow}>
            <GoThreeBars />
          </Bars>
          <SignOut onClick={handleAuth}>
            <img src={userphoto} alt="" />
          </SignOut>
        </>
      )}
    </Nav>
  );
}
const LoginBtn = styled.button`
  padding: 4px 16px;
  border: 1px solid white;
  display: flex;
  align-items: center;
  justify-content: center;
  background:transparent;
  color:white;
  font-size:20px;
  border-radius:3px;
  letter-spacing:1.5px;
`;
const Nav = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 66px;
  background: #040714;
  padding: 0 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 768px) {
    padding: 0 20px;
  }
  z-index: 10;
`;
const Logo = styled.div`
  height: 100%;
  max-width: 90px;
  img {
    width: 100%;
    height: 100%;
  }
  @media screen and (max-width:768px){
    width:72px;
  }
`;
const SignOutMob = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 2.4rem;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;
const NavMenu = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 45px;

  Link {
    display: flex;
    flex-direction: row;
  }
  @media screen and (max-width: 768px) {
    position: absolute;
    top: 0;
    right: -100%;
    bottom: 0;
    width: 80vw;
    min-height: 100vh;
    background-color: #040714;
    z-index: 9;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 50px -16px,
      rgb(0 0 0 / 73%) 0px 30px 22px -10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    display: grid;
    grid-template-rows: 1fr auto auto;
  }
`;
const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  &.active {
    color: #15cdfc;
  }
`;
const NavLinks = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    column-gap: 3rem;
  }
`;
const Bars = styled.div`
  font-size: 28px;
  display: flex;
  align-items: center;
  @media screen and (min-width: 728px) {
    display: none;
  }
`;
const LinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  /* p{
  font-size:18px;
  padding-top:4px;
} */
`;
const NavImg = styled.div`
  width: 25px;
`;
const LinkName = styled.p`
  padding-top: 2px;
  margin-left: 6px;
  display: flex;
  font-size: 14px;
  letter-spacing: 1.6px;
`;

const SignOut = styled(Logo)`
  display: flex;
  align-items: center;
  img {
    border-radius: 50%;
    width: 40px;
    height: 40px;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
const CloseBtn = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    position: absolute;
    display: block;
    border: none;
    background: transparent;
    font-size: 28px;
    top: 20px;
    left: 13px;

    ${GoX} {
      width: 50px;
    }
  }
`;
export default Navbar;