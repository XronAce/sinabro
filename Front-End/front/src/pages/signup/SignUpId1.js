import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import styled from "styled-components";
import CsBtn from "../../components/CsBtn";
import { useSelector, useDispatch } from "react-redux";
import { signUpActions } from "../../store/SignUpSlice";

function SignUpId1() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const moveToPw1 = () => {
    navigate("/signup/pw1");
  };

  // ๐id ์ ์ฅ
  const [id, setId] = useState("");

  // ๐store์ id ๋ถ๋ฌ์ค๊ธฐ
  // const stateId = useSelector((state) => state.signUp.id);
  // ์์ด๋ ๋ฐ์ดํฐ ์ ์ฅ์ฌ๋ถ ํ์ธ์ ์ํ ๋ณ์ state
  const state = useSelector((state) => state);

  // ๐id : ์ ์ญ์ผ๋ก ๋ณด๋ด๊ธฐ
  const sendId = () => {
    dispatch(signUpActions.addId(id));
  };

  // ๐stateId ๊ฐฑ์  ์ฌ๋ถ ํ์ธ ์ฝ์
  // console.log("stateId", stateId);
  console.log("state", state);

  // ๐์ค๋ณต์ฒดํฌ ํ์ธ ์ฌ๋ถ ๋ณ์
  // ๐์๋ฒ์์ ์ค๋ณต์ฒดํฌ๋ฅผ ํ์ ๋ ๋ง์ผ๋ฉด true ๋ฐํ
  const isChecked = false;

  return (
    <div>
      {/* ๐1. ์ค๋ณต์ฒดํฌ๊ฐ ์๋์ ๋ */}
      {!isChecked && (
        <StyledDiv1>
          <div>
            <h3>๊ณ ๊ฐ๋๊ป์ ์ฌ์ฉํ๊ณ  ์ถ์ผ์  ์์ด๋๋ฅผ ์ ์ด์ฃผ์ธ์!</h3>
          </div>

          <StyledDiv2>
            <StyledInput
              type="text"
              value={id}
              placeholder="์ฌ๊ธฐ์ ์์ด๋๋ฅผ ์๋ ฅํด์ฃผ์ธ์ :)"
              onChange={(e) => {
                setId(e.target.value);
              }}
            />
            <StyledButton1 onClick={sendId}>์ค๋ณต์ฒดํฌ</StyledButton1>
          </StyledDiv2>
          <div>
            <StyledButton2 onClick={moveToPw1}>๋ค์ ๋จ๊ณ๋ก</StyledButton2>
          </div>
        </StyledDiv1>
      )}

      {/* ๐2. ์ค๋ณต์ฒดํฌ๊ฐ ๋์ ๋ */}
      {isChecked && (
        <StyledDiv1>
          <div>
            <h3>์ค๋ณต์ฒดํฌ๊ฐ ์๋ฃ๋์์ต๋๋ค.</h3>
          </div>
          <StyledDiv2>
            <div>
              <h4>์ฌ์ฉํ์ค ์์ด๋ : {id}</h4>
              <StyledButton2 onClick={moveToPw1}>๋ค์ ๋จ๊ณ๋ก</StyledButton2>
            </div>
          </StyledDiv2>
        </StyledDiv1>
      )}

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
`;

const StyledInput = styled.input`
  width: 40%;
  padding: 10px;
  margin-right: 10px;
`;

const StyledButton1 = styled.button`
  cursor: pointer;
`;

const StyledButton2 = styled.button`
  margin-top: 15px;
  margin-bottom: 15px;
  cursor: pointer;
  padding: 10px;
`;
export default SignUpId1;
