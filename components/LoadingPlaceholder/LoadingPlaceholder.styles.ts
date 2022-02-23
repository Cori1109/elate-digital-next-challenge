import { styled } from "@styles/index";

export const Container = styled.div`
  height: 450px;
  width: 320px;
  border-radius: 10px;
  background-color: white;
  background-image: url(${({ imgURL }: any) => imgURL});
  background-position: top;
  background-size: 100% 35%;
  background-repeat: no-repeat;
  box-shadow: 0 1px 10px rgb(151 164 175 / 10%);
`;

export const AvatarDiv = styled.div`
  margin-top: 30%;
  display: flex;
  justify-content: center;
`;

export const Avatar = styled.div`
  margin: auto;
  width: 100px;
  height: 100px;
  border-radius: 50px;
  border: 2px solid white;
  background-image: url(${({ imgURL }: any) => imgURL});
  background-position: center;
  background-size: cover;
`;

export const RowDiv = styled.div`
  width: 100%;
  padding: 15px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Header = styled.div`
  margin: auto;
  font-size: 1.75rem;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const SubHeader = styled.div`
  margin: auto;
  font-size: 1.15rem;
  font-weight: normal;
  color: #728398;
`;

export const Flex = styled.div`
  display: flex;
`;

export const Text = styled.h3`
  margin: auto;
  font-size: 1rem;
  text-align: center;
  font-weight: bold;
`;

export const FollowText = styled.div`
  margin-top: 10px;
  font-weight: normal;
  color: #728398;
`;

export const FollowBtn = styled.button`
  border-radius: 8px;
  color: white;
  background-color: #151f21;
  font-size: 1rem;
  font-weight: bold;
  padding: 10px;
  width: 90%;
`;
