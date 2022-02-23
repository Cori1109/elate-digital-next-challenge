import { styled } from "@styles/index";

export const ButtonContainer = styled.button`
  height: 50px;
  width: 200px;
  border-radius: 25px;
  background-color: ${({ theme }) => theme.colors.primary700};
`;

export const ButtonText = styled.span`
  font-family: ${({ theme }) => theme.fontFamily.default};
  color: ${({ theme }) => theme.colors.neutral100};
  font-size: 20px;
`;
