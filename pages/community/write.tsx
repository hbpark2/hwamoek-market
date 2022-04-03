import type { NextPage } from "next";
import styled from "styled-components";
import { Button } from "../../components/Common/styles";
import { TextArea } from "../../components/Community/styles";
import { media } from "../../styles/theme";

const Container = styled.main``;

const Form = styled.form`
  max-width: 800px;
  width: 90%;
  margin: 0 auto;
  padding: 2rem 1rem;
  ${media.mobile} {
    width: 95%;
    padding: 2rem 0rem;
  }
`;

const ReplyButton = styled(Button)`
  margin-top: 1rem;
`;

const Write: NextPage = () => {
  return (
    <Container>
      <Form>
        <TextArea rows={4} placeholder="Answer this question!" />
        <ReplyButton>Reply</ReplyButton>
      </Form>
    </Container>
  );
};

export default Write;
