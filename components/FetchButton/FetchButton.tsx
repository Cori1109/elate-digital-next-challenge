import { FunctionComponent } from "react";
import { ButtonContainer, ButtonText } from "./FetchButton.styles";

type FetchButtonProps = { fetchHandle: Function };
const FetchButton: FunctionComponent<FetchButtonProps> = ({ fetchHandle }) => {
  const fetchhandler = () => {
    fetchHandle({ fetch: true });
  };
  return (
    <ButtonContainer
      onClick={() => {
        fetchhandler();
      }}
    >
      <ButtonText>Fetch</ButtonText>
    </ButtonContainer>
  );
};

export default FetchButton;
