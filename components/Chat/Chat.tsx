import type { NextPage } from "next";
import styled, { css } from "styled-components";
import { Avatar } from "../Common/styles";

const Container = styled.div<{ isMine?: boolean }>`
  display: flex;
  align-items: center;
  margin: 0.7rem 0;
  ${({ isMine }) =>
    isMine &&
    css`
      flex-direction: row-reverse;
    `}
`;

const ChatAvatar = styled(Avatar)<{ isMine?: boolean }>`
  width: 45px;
  height: 45px;
  margin-right: 1rem;

  ${({ isMine }) =>
    isMine &&
    css`
      margin-left: 1rem;
      margin-right: 0;
    `}
`;

const Payload = styled.p``;

interface ChatProps {
  children: string;
  isMine?: boolean;
}

const Chat: NextPage<ChatProps> = ({ children, isMine }) => {
  return (
    <Container isMine={isMine}>
      <ChatAvatar isMine={isMine} />
      <Payload>{children}</Payload>
    </Container>
  );
};

export default Chat;
