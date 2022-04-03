import type { NextPage } from "next";
import styled from "styled-components";
import User from "../../components/Common/User";
import { media } from "../../styles/theme";

const Container = styled.main``;

const Inner = styled.div`
  max-width: 800px;
  width: 90%;
  margin: 0 auto;
  padding: 20px 10px;
`;

const Top = styled.div``;
const Bottom = styled.div``;

const ImageWrap = styled.div`
  height: 500px;
  background-color: #555;
  margin: 0 auto;
`;

const Line = styled.i`
  display: block;
  width: 100%;
  height: 1px;
  background-color: #777;
`;

const Content = styled.div`
  margin-top: 20px;
`;

const Title = styled.h2`
  font-size: 4.2rem;
  font-weight: 600;
`;

const Price = styled.span`
  display: block;
  font-size: 2.6rem;
  margin: 10px 0;
`;

const Caption = styled.p`
  margin: 20px auto;
  line-height: 1.2em;
`;

const ButtonWrap = styled.div`
  display: flex;
  margin-bottom: 3rem;
  button {
    display: block;
  }
`;

const ChatButton = styled.button`
  flex: 0.7;
  background-color: #777;
  color: #fff;
  padding: 20px 10px;
  transition: all 0.5s;
  font-size: 1.8rem;

  &:hover {
    background-color: #333;
  }
`;
const LikeButton = styled.button`
  margin-left: 15px;
  svg {
    width: 30px;
  }
`;

const SubTitle = styled.h3`
  font-size: 3.2rem;
  font-weight: 600;
`;

const SimilarItemsContainer = styled.ul`
  display: grid;
  margin-top: 20px;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
  ${media.mobile} {
    gap: 10px;
  }
`;

const SimilarItems = styled.li`
  h3 {
    margin: 7px 0 4px;
  }
`;

const SimilarImage = styled.div`
  width: 100%;
  height: 200px;
  background-color: #777;
  ${media.mobile} {
    height: 100px;
  }
`;

const ItemDetail: NextPage = () => {
  return (
    <Container>
      <Inner>
        <Top>
          <ImageWrap />
          <User name="Jake" />

          <Line />
          <Content>
            <Title>Galaxy S50</Title>
            <Price>$140</Price>
            <Caption>
              My money&apos;s in that office, right? If she start giving me some
              bullshit about it ain&apos;t there, and we got to go someplace
              else and get it, I&apos;m gonna shoot you in the head then and
              there. Then I&apos;m gonna shoot that bitch in the kneecaps, find
              out where my goddamn money is. She gonna tell me too. Hey, look at
              me when I&apos;m talking to you, motherfucker. You listen: we go
              in there, and that ni**a Winston or anybody else is in there, you
              the first motherfucker to get shot. You understand?
            </Caption>
            <ButtonWrap>
              <ChatButton>Talk to seller</ChatButton>
              <LikeButton>
                <svg
                  className="h-6 w-6 "
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </LikeButton>
            </ButtonWrap>
          </Content>
        </Top>

        <Bottom>
          <SubTitle>Similar items</SubTitle>
          <SimilarItemsContainer>
            {[1, 2, 3, 4, 5, 6].map((item, index) => (
              <SimilarItems key={`similar items${index}`}>
                <SimilarImage />
                <h3>Galaxy S60</h3>
                <p>$6</p>
              </SimilarItems>
            ))}
          </SimilarItemsContainer>
        </Bottom>
      </Inner>
    </Container>
  );
};

export default ItemDetail;
