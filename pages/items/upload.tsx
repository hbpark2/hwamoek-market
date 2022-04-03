import type { NextPage } from "next";
import styled from "styled-components";

const Container = styled.main``;

const Inner = styled.div`
  max-width: 800px;
  width: 90%;
  margin: 0 auto;
  padding: 20px 10px;
`;

const AddImageButtonWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px dashed #777;
  border-radius: 5px;
  margin-bottom: 2rem;
  background-color: ${({ theme }) => theme.color.beige2};

  cursor: pointer;
`;

const AddImageButton = styled.label`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 4rem;
  cursor: pointer;
  svg {
    width: 6rem;
    height: 6rem;
  }
  input {
    display: none;
  }
`;

const TitleLabel = styled.label`
  display: block;
  font-size: 1.8rem;
  margin-bottom: 1rem;
`;

const PriceContainer = styled.div`
  margin-bottom: 2rem;
`;

const PriceWrap = styled.div`
  display: flex;
  align-items: center;
`;

const PriceInput = styled.div`
  border: 1px solid #777;
  padding: 7px 10px;
  margin-right: 0.5rem;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.color.beige2};
  input {
    border: none;
    background-color: transparent;
    width: 20rem;
    margin-left: 0.5rem;
  }
`;

const DescriptionContainer = styled.div`
  textarea {
    width: calc(100% - 20px);
    border: 1px solid #777;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.color.beige2};
    resize: none;
    font-family: inherit;
    font-size: 1.4rem;
    padding: 10px;
  }
`;

const UploadButton = styled.button`
  width: 100%;
  padding: 2rem 1rem;
  background-color: #777;
  color: #fff;
  font-size: 1.8rem;
  border-radius: 5px;
  margin-top: 4rem;
  transition: all 0.5s;
  &:hover {
    background-color: #333;
  }
`;

const Upload: NextPage = () => {
  return (
    <Container>
      <Inner>
        <div>
          <AddImageButtonWrap>
            <AddImageButton htmlFor="imageInput">
              <svg
                stroke="currentColor"
                fill="none"
                viewBox="0 0 48 48"
                aria-hidden="true"
              >
                <path
                  d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <input id="imageInput" type="file" />
            </AddImageButton>
          </AddImageButtonWrap>
        </div>
        <PriceContainer>
          <TitleLabel htmlFor="priceInput">Price</TitleLabel>
          <PriceWrap>
            <PriceInput>
              <span>₩</span>
              <input id="priceInput" type="number" placeholder="0.00" />
            </PriceInput>
            <div>
              <span>WON</span>
            </div>
          </PriceWrap>
        </PriceContainer>
        <DescriptionContainer>
          <TitleLabel>Description</TitleLabel>
          <div>
            <textarea rows={4} />
          </div>
        </DescriptionContainer>
        <UploadButton>Upload product</UploadButton>
      </Inner>
    </Container>
  );
};

export default Upload;
