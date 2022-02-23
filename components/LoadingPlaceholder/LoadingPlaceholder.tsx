import { FunctionComponent } from "react";
import {
  Avatar,
  Container,
  Header,
  SubHeader,
  RowDiv,
  Flex,
  Text,
  FollowText,
  FollowBtn,
  AvatarDiv,
} from "./LoadingPlaceholder.styles";
type User = {
  backgroundImageUrl: string;
  profilePictureUrl: string;
  name: string;
  title: string;
  metrics: {
    followers: number;
    following: number;
  };
};
type LoadingPlaceholderProps = { profile: User };
const LoadingPlaceholder: FunctionComponent<LoadingPlaceholderProps> = ({
  profile,
}) => {
  return (
    <Container imgURL={profile.backgroundImageUrl}>
      <AvatarDiv>
        <Avatar imgURL={profile.profilePictureUrl} />
      </AvatarDiv>
      <RowDiv>
        <RowDiv>
          <Header>{profile.name}</Header>
          <SubHeader>{profile.title}</SubHeader>
        </RowDiv>
        <Flex>
          <RowDiv>
            <Text>
              {profile.metrics ? profile.metrics.followers : 0}
              <FollowText>Followers</FollowText>
            </Text>
          </RowDiv>
          <RowDiv>
            <Text>
              {profile.metrics ? profile.metrics.following : 0}
              <FollowText>Followers</FollowText>
            </Text>
          </RowDiv>
        </Flex>
        <RowDiv>
          <FollowBtn>Follow</FollowBtn>
        </RowDiv>
      </RowDiv>
    </Container>
  );
};

export default LoadingPlaceholder;
