import React from "react";
import styled from "styled-components";
import MainCategory from "./MainCategory";
import SubCategory from "./SubCategory";
import SearchBar from "./SearchBar";
import LectureItemCard from "./LectureItemCard";
import { useSelector } from "react-redux";

const StyledDiv = styled.div`
  width: 50%;
  padding-left: 5vw;
  padding-right: 5%;
  background-color: whitesmoke;
  border-right: 1px solid lightgray;
  /* @media only screen and (min-width: 600px) {
  }
  @media only screen and (min-width: 768px) {
  }
  @media only screen and (min-width: 992px) {
  }
  @media only screen and (min-width: 1200px) {
  } */
`;

const CardDiv = styled.div`
  @media only screen and (max-width: 600px) {
    display: flex;
  }
  @media only screen and (min-width: 1200px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 50px;
    row-gap: -1000px;
  }
`;

function LectureList() {
  // 강의 리스트 store에서 가져오기
  const cardData = useSelector(state => state.main.lectureCard);

  // console.log(cardData);
  return (
    <StyledDiv>
      <h1>강의 신청</h1>
      <p>새로 신청할 수 있는 강의 목록입니다</p>
      <SearchBar />
      <MainCategory />
      <SubCategory />
      <CardDiv>
        {cardData &&
          cardData.map(data => (
            <LectureItemCard
              key={data.no}
              no={data.no}
              subject={data.subject}
              startDate={data.startDate}
              endDate={data.endDate}
              content={data.content}
              savedName={data.savedName}
              isEnrolled={data.isEnrolled}
            />
          ))}
      </CardDiv>
    </StyledDiv>
  );
}

export default LectureList;
