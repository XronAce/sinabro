import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import styled from "styled-components";
import CsBtn from "../../components/CsBtn";
import { useSelector, useDispatch } from "react-redux";
import { signUpActions } from "../../store/SignUpSlice";

function SignUpName() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const moveToBirth = () => {
    navigate("/signup/birth");
  };

  // ๐์ด๋ฆ ์ ์ฅ
  const [name, setName] = useState("");

  // ๐store์ state๋ถ๋ฌ์ค๊ธฐ
  const state = useSelector((state) => state);

  // ๐name: ์ ์ญ์ผ๋ก ๋ณด๋ด๊ธฐ
  const sendName = () => {
    dispatch(signUpActions.addName(name));
  };

  // ๐stateName ๊ฐฑ์  ์ฌ๋ถ ํ์ธ ์ฝ์
  console.log("state", state);

  return (
    <div>
      <StyledDiv1>
        {/* <h1>SignUpName</h1> */}
        <div>
          <h3>๊ณ ๊ฐ๋์ ์ด๋ฆ์ ์ ์ด์ฃผ์ธ์!</h3>
        </div>
        <StyledDiv2>
          <StyledInput
            type="text"
            value={name}
            placeholder="๊ณ ๊ฐ๋์ ์ด๋ฆ์ ์ ์ด์ฃผ์ธ์ :)"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <StyledButton1
            onClick={() => {
              sendName();
              moveToBirth();
            }}
          >
            ํ์ธ
          </StyledButton1>
        </StyledDiv2>
      </StyledDiv1>
      <LoginDiv>
        <StyledLink to="/cs">
          <CsBtn />
        </StyledLink>
      </LoginDiv>
    </div>
  );
}
const LoginDiv = styled.div`
  padding-left: 18%;
  padding-right: 18%;
  padding-top: 5vh;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;
const StyledDiv1 = styled.div`
  border: 1px solid black;
  width: 60%;
  margin: auto;
`;
const StyledDiv2 = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 20px;
`;

const StyledInput = styled.input`
  width: 40%;
  padding: 10px;
  margin-right: 10px;
`;

const StyledButton1 = styled.button`
  cursor: pointer;
  padding: 10px;
`;

export default SignUpName;
