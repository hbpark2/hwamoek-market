import type { NextPage } from "next";
import styled from "styled-components";
import {
  ActionWrap,
  ItemType,
  Question,
} from "../../components/Community/styles";

const Container = styled.main``;

const Inner = styled.ul`
  max-width: 800px;
  width: 90%;
  margin: 0 auto;
  padding: 2rem 1rem;
`;

const Item = styled.li`
  display: flex;
  flex-direction: column;
  margin: 2rem 0;
  background-color: #f6f5e8;
  padding: 2rem;
  border-radius: 15px;
  box-shadow: ${({ theme }) => theme.boxShadow.normal};
`;

const WriteUser = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #777;
`;

const WriteButton = styled.button`
  position: fixed;
  display: block;
  bottom: 40px;
  right: 20px;
  background-color: #555;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  transition: all 0.5s;
  position: fixed;
  display: block;
  bottom: 40px;
  right: 20px;
  background-color: #555;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  transition: all 0.5s;
  svg {
    width: 40px;
    height: 40px;
    color: ${({ theme }) => theme.color.beige1};
  }
  &:hover {
    background-color: ${({ theme }) => theme.color.black};
    transform: scale(1.1);
  }
`;

const Community: NextPage = () => {
  return (
    <Container>
      <Inner>
        {[1, 2, 3, 4, 5, 6].map((item, index) => {
          return (
            <Item key={`question${index}`}>
              <ItemType>질문</ItemType>
              <Question>
                <span>Q.</span> What is the best mandu restaurant?
              </Question>
              <WriteUser>
                <span>finn</span>
                <span>18시간 전</span>
              </WriteUser>
              <ActionWrap>
                <li>
                  <svg
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                  <span>궁금해요 1</span>
                </li>
                <li>
                  <svg
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    ></path>
                  </svg>
                  <span>답변 1</span>
                </li>
              </ActionWrap>
            </Item>
          );
        })}

        <WriteButton>
          <svg
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
            ></path>
          </svg>
        </WriteButton>
      </Inner>
    </Container>
  );
};

export default Community;
