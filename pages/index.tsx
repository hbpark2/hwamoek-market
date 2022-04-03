import type { NextPage } from "next";
import styled from "styled-components";

const Container = styled.main``;
const Inner = styled.ul`
  display: flex;
  flex-direction: column;
  max-width: 800px;
  width: 90%;
  margin: 0 auto;
`;
const Item = styled.li`
  display: flex;
  justify-content: space-between;
  margin: 1.5rem 0;
  padding: 15px 10px;
  background-color: ${({ theme }) => theme.color.beige2};
  box-shadow: ${({ theme }) => theme.boxShadow.normal};
  border-radius: 10px;
`;

const Content = styled.div`
  display: flex;
`;

const Mentions = styled.ul`
  display: flex;
  align-items: flex-end;
  li {
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.color.grey};
    margin-left: 10px;
  }
  svg {
    width: 20px;
    height: 20px;
    color: ${({ theme }) => theme.color.grey};
  }
`;

const ImageWrap = styled.div`
  width: 150px;
  height: 150px;
  background-color: #333;
  border-radius: 20px;
`;

const Descriptions = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 20px;
  li {
    margin: 5px 0;
  }
`;

const AddButton = styled.button`
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

const Home: NextPage = () => {
  return (
    <Container>
      <Inner>
        {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((_, i) => (
          <Item key={i}>
            <Content>
              <ImageWrap />
              <Descriptions>
                <li>
                  <h3>New iPhone 14</h3>
                </li>
                <li>Black</li>
                <li>$95</li>
              </Descriptions>
            </Content>
            <Mentions>
              <li>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  ></path>
                </svg>
                <span>1</span>
              </li>
              <li>
                <svg
                  className="w-4 h-4"
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
                <span>1</span>
              </li>
            </Mentions>
          </Item>
        ))}
        <AddButton>
          <svg
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
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
        </AddButton>
      </Inner>
    </Container>
  );
};

export default Home;
