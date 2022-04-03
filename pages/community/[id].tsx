import type { NextPage } from "next";
import styled from "styled-components";
import { Button } from "../../components/Common/styles";
import User from "../../components/Common/User";
import Comment from "../../components/Community/Comment";
import {
  ActionWrap,
  ItemType,
  Question,
  TextArea,
} from "../../components/Community/styles";
import { media } from "../../styles/theme";

const Container = styled.main``;

const Inner = styled.ul`
  max-width: 800px;
  width: 90%;
  margin: 0 auto;
  padding: 2rem 1rem;
  ${media.mobile} {
    width: 95%;
    padding: 2rem 0rem;
  }
`;

const CommentWrap = styled.ul`
  margin: 1.5rem 0;
  padding-top: 1rem;
  border-top: 1px solid #999;
`;

const ReplyButton = styled(Button)`
  margin-top: 1rem;
`;

const CommunityPostDetail: NextPage = () => {
  return (
    <Container>
      <Inner>
        <ItemType>동네질문</ItemType>
        <User name="Jake" />
        <div>
          <Question>
            <span>Q.</span> What is the best mandu restaurant?
          </Question>
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
        </div>
        <CommentWrap>
          <Comment />
          <Comment />
        </CommentWrap>
        <div>
          <TextArea rows={4} placeholder="Answer this question!" />
          <ReplyButton>Reply</ReplyButton>
        </div>
      </Inner>
    </Container>
  );
};

export default CommunityPostDetail;
