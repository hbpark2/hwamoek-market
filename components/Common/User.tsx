import type { NextPage } from "next";
import styled from "styled-components";
import { Avatar } from "./styles";
const UserWrap = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0;
`;

const Username = styled.div`
  margin-left: 10px;
  span {
    display: block;
    margin: 4px 0;
  }
`;

interface User {
  name?: string;
}

const User: NextPage<User> = ({ name }) => {
  return (
    <UserWrap>
      <Avatar />
      <Username>
        <span>{name}</span>
        <span>View profile &rarr;</span>
      </Username>
    </UserWrap>
  );
};
export default User;
