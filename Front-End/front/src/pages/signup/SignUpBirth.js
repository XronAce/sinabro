import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import styled from "styled-components";
import CsBtn from "../../components/CsBtn";
import BirthCalendar from "../signup/components/BirthCalendar";
import { useDispatch } from "react-redux";
import { signUpActions } from "../../store/SignUpSlice";

function SignUpBirth() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const moveToPhone = () => {
    navigate("/signup/phone1");
  };

  // ๐์๋์์ผ ์ ์ฅ
  const [birth, setBirth] = useState("");

  // ๐BirthCalendar๋ก๋ถํฐ ๋ฐ์ดํฐ ์ ๋ฌ๋ฐ๊ธฐ ์ํ ์ฝ๋
  const dateHandle = (date) => {
    setBirth(date);
  };

  // ๐store์ ์๋์์ผ ๋ถ๋ฌ์ค๊ธฐ
  // const state = useSelector((state) => state);

  // ๐birth : ์ ์ญ์ผ๋ก ๋ณด๋ด๊ธฐ
  const sendBirth = () => {
    dispatch(signUpActions.addBirth(birth));
  };

  return (
    <div>
      <StyledDiv1>
        {/* <h1>SignUpBirth</h1> */}
        <div>
          <h3>๊ณ ๊ฐ๋์ ์๋์์ผ์ ์ ํํด์ฃผ์ธ์!</h3>
        </div>

        <StyledCalendar>
          <BirthCalendar dateHandle={dateHandle} />
        </StyledCalendar>

        <StyledDiv2>
          <h3>{birth}</h3>

          <StyledButton1
            onClick={() => {
              moveToPhone();
              sendBirth();
            }}
          >
            ํ์ธ
          </StyledButton1>
        </StyledDiv2>
        {/* 
        <div>
          <StyledButton2 onClick={moveToPhone}>๋ค์ ๋จ๊ณ๋ก</StyledButton2>
        </div> */}
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
  justify-content: center;
  padding-top: 20px;
  padding-bottom: 20px;
`;

// const StyledInput = styled.input`
//   width: 40%;
//   padding: 10px;
//   margin-right: 10px;
// `;

const StyledButton1 = styled.button`
  cursor: pointer;
  padding: 10px;
`;

// const StyledButton2 = styled.button`
//   margin-top: 15px;
//   margin-bottom: 15px;
//   cursor: pointer;
//   padding: 10px;
// `;

const StyledCalendar = styled.div`
  justify-content: center;
  margin: auto;
`;
export default SignUpBirth;
