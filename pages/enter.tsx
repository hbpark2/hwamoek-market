import { useState } from "react";
import styled, { css } from "styled-components";
import { Button } from "../components/Common/styles";
import { FadeIn } from "../styles/animation";
import { media } from "../styles/theme";

const Container = styled.main`
  width: 100%;
  padding: 60px 0 20px;
  min-height: 100vh;
`;

const Inner = styled.div`
  max-width: 800px;
  width: 90%;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.color.beige2};
  border-radius: 10px;
  padding: 0 20px 20px;
  ${media.tablet} {
    width: 80%;
  }
`;

const Title = styled.h3`
  font-size: 4.2rem;
  font-weight: 600;
  text-align: center;
  padding: 3rem 0;
`;

const SubTitle = styled.h5`
  text-align: center;
  font-size: 1.6rem;
`;

const TabContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
`;

const TabButton = styled.button<{ _isActive: boolean }>`
  display: flex;
  padding: 10px 40px;
  transition: all 0.5s;
  font-size: 1.8rem;

  ${({ _isActive, theme }) =>
    _isActive
      ? css`
          color: ${theme.color.red};
          border-bottom: 2px solid ${theme.color.red};
        `
      : css`
          color: ${theme.color.black};
          border-bottom: 2px solid transparent;
        `};
`;

const Icon = styled.svg`
  width: 40px;
  height: 40px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  margin: 30px auto 0;
  width: 300px;
  animation-name: ${FadeIn};
  animation-duration: 1.5s;
  ${media.mobile} {
    width: 250px;
  }
`;

const InputWrap = styled.div`
  position: relative;
  margin: 10px 0 15px;
  width: 100%;
  div {
    display: flex;
    align-items: center;
    span {
      position: absolute;
      left: -40px;
      ${media.mobile} {
        left: -35px;
      }
    }
  }
`;

const Input = styled.input`
  background-color: #fffef2;
  border: none;
  display: block;
  width: calc(100% - 20px);
  padding: 10px;
  border-radius: 5px;
  box-shadow: ${({ theme }) => theme.boxShadow.normal};
  font-size: 1.6rem;
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

const BottomWrap = styled.div`
  width: 300px;
  margin: 0 auto;
  div {
    display: flex;
    justify-content: center;
  }
`;

const Divide = styled.div`
  position: relative;
  color: ${({ theme }) => theme.color.grey};
  margin: 30px 0 15px;
  span {
    position: relative;
    display: block;
    background-color: ${({ theme }) => theme.color.beige2};
    height: 20px;
    padding: 0 10px;
    z-index: 1;
  }
`;

const Line = styled.i`
  display: block;
  position: absolute;
  top: 10px;
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.color.grey};
  z-index: 0;
`;

const TheOthers = styled.div`
  button {
    margin: 0 10px;
  }
`;

export default function Enter() {
  const [method, setMethod] = useState<"email" | "phone">("email");
  const onEmailClick = () => setMethod("email");
  const onPhoneClick = () => setMethod("phone");
  return (
    <Container>
      <Inner>
        <Title>Hwamoek</Title>
        <div>
          <div>
            <SubTitle>Login with</SubTitle>
            <TabContainer>
              <TabButton
                _isActive={method === "email" ? true : false}
                onClick={onEmailClick}
              >
                Email
              </TabButton>
              <TabButton
                _isActive={method === "phone" ? true : false}
                onClick={onPhoneClick}
              >
                Phone
              </TabButton>
            </TabContainer>
          </div>
          {method === "email" && (
            <Form>
              <label>Email address</label>
              <InputWrap>
                <Input type="email" required />
              </InputWrap>
              <Button>Get login link</Button>
            </Form>
          )}

          {method === "phone" && (
            <Form>
              <label>Phone number</label>
              <InputWrap>
                <div>
                  <span>+82</span>
                  <Input type="number" required />
                </div>
              </InputWrap>
              <Button>Get one-time password</Button>
            </Form>
          )}

          <BottomWrap>
            <Divide>
              <div>
                <span>Or login with</span>
              </div>
              <Line />
            </Divide>
            <TheOthers>
              <button>
                <Icon
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                </Icon>
              </button>
              <button>
                <Icon
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                    clipRule="evenodd"
                  />
                </Icon>
              </button>
            </TheOthers>
          </BottomWrap>
        </div>
      </Inner>
    </Container>
  );
}
