import { useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Header } from "../Header/Header";
import { Nav } from "../Nav/Nav";
import register from "../../pages/Home/register.svg";
import { useMemo } from "react";

export const Layout = ({ children }) => {
  const navigate = useNavigate();

  const location = useLocation();
  const { pathname } = location;

  const isFloat = useMemo(
    () => pathname === "/" || pathname === "/lost",
    [pathname]
  );

  const handleClick = useCallback(() => {
    if (pathname === "/") {
      navigate("/register");
    } else if (pathname === "/lost") {
      navigate("/register2");
    }
  }, [navigate, pathname]);

  return (
    <>
      <Header />
      <Nav />
      <div style={{ height: "150px" }} />
      {children}
      {isFloat && <FloatBtn src={register} alt="" onClick={handleClick} />}
    </>
  );
};

const FloatBtn = styled.img`
  position: fixed;
  bottom: 100px;
  right: 300px;
`;
