import type { NextPage } from "next";
import styled from "styled-components";
import Chat from "../../components/Chat/Chat";
import { TextArea } from "../../components/Community/styles";

const Container = styled.main``;

const Inner = styled.div`
  max-width: 800px;
  width: 90%;
  margin: 2rem auto;
  padding: 2rem 1rem;
  background-color: ${({ theme }) => theme.color.beige2};
`;

const SendWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ChatTextArea = styled(TextArea)`
  flex: 0.9;
`;

const Button = styled.button`
  flex: 0.1;
  border: 1px solid #777;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.color.beige2};
  margin-left: 0.5rem;
`;

const ChatDetail: NextPage = () => {
  return (
    <Container>
      <Inner>
        <Chat>Hi how much are you selling them for?</Chat>
        <Chat isMine={true}>I want ￦20,000</Chat>
        <Chat>lalalala hanggundong286-13</Chat>

        <div>
          <SendWrap>
            <ChatTextArea rows={4} placeholder="Write a caption" />
            <Button>
              <span>
                전송
                {/* &rarr; */}
              </span>
            </Button>
          </SendWrap>
        </div>
      </Inner>
    </Container>
  );
};

export default ChatDetail;
