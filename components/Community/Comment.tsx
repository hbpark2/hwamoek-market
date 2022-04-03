import type { NextPage } from "next";
import styled from "styled-components";
import { media } from "../../styles/theme";
import { Avatar } from "../Common/styles";

const Container = styled.li`
  &:not(&:first-child) {
    margin-top: 1.5rem;
  }
`;

const Inner = styled.div`
  display: flex;
`;

const CommentAvatar = styled(Avatar)`
  width: 45px;
  height: 45px;
  background-color: #777;
  border-radius: 50%;
  margin-right: 1rem;
  ${media.mobile} {
    flex: 0.1;
    width: 35px;
    height: 35px;
  }
`;

const CommentBox = styled.div`
  display: flex;
  flex-direction: column;
  span {
    margin-bottom: 0.3rem;
  }
  ${media.mobile} {
    flex: 0.9;
  }
`;

const Comment: NextPage = () => {
  return (
    <Container>
      <Inner>
        <CommentAvatar />
        <CommentBox>
          <span>Steve Jebs</span>
          <span>2시간 전</span>
          <p>The best mandu restaurant is the one next to my house.</p>
        </CommentBox>
      </Inner>
    </Container>
  );
};

export default Comment;
