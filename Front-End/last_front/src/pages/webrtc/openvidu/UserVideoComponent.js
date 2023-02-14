import React, { Component } from "react";
import styled, { css } from "styled-components";
import OpenViduVideoComponent from "./OvVideo";
import "./UserVideo.css";

const StyledVideo = styled.div`
  width: 100%;
  position: relative;
`;

const StyledBtn1 = styled.button`
  font-weight: 700;
  font-size: 20px;
  position: absolute;
  left: 43%;
`;

const StyledBtn2 = styled.button`
  position: absolute;
  left: 50%;
  font-weight: 700;
  font-size: 20px;
`;

const UserVideoComponent = ({ streamManager, user, mode, role }) => {
  const getNicknameTag = () => {
    return JSON.parse(streamManager.stream.connection.data).clientData;
  };
  return (
    <div>
      {streamManager !== undefined ? (
        <StyledVideo className="streamcomponent">
          <OpenViduVideoComponent
            streamManager={streamManager}
            user={user}
            mode={mode}
          />
          {/* <StyledBtn1>무대로</StyledBtn1>
          <StyledBtn2>마이크켜기</StyledBtn2>
          <StyledBtn2>마이크끄기</StyledBtn2> */}
          <div>
            <p>{getNicknameTag()}</p>
          </div>
        </StyledVideo>
      ) : null}
    </div>
  );
};

export default UserVideoComponent;
