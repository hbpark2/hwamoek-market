import { NextPage } from "next";
import styled from "styled-components";
import { Avatar } from "../../components/Common/styles";

const Container = styled.main``;

const Inner = styled.ul`
  max-width: 800px;
  width: 90%;
  margin: 2rem auto;
  padding: 2rem 1rem;
  background-color: ${({ theme }) => theme.color.beige2};
`;

const Item = styled.li`
  display: flex;
  /* margin: 1rem; */
  padding: 1rem;
  &:not(&:first-child) {
    border-top: 1px solid #777;
  }
`;

const ChatBox = styled.div`
  margin-left: 10px;
  span {
    display: block;
    margin: 0.4rem 0;
  }
`;

const chats: NextPage = () => {
  return (
    <Container>
      <Inner>
        {[1, 1, 1, 1, 1, 1, 1].map((_, i) => (
          <Item key={i}>
            <Avatar />
            <ChatBox>
              <span>Steve Jebs</span>
              <p>See you tomorrow in the corner at 2pm!</p>
            </ChatBox>
          </Item>
        ))}
      </Inner>
    </Container>
  );
};

export default chats;
