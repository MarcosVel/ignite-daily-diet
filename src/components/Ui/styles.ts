import { Text, TextProps } from "react-native";
import styled, { css } from "styled-components/native";

type Props = TextProps & {
  size?: number;
  color?: string;
  mt?: number;
  mb?: number;
};

export const Label = styled(Text)<Props>`
  ${({ theme, size, color }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${size || theme.FONT_SIZE.MD}px;
    color: ${color || theme.COLORS.gray_200};
  `}

  margin-top: ${({ mt }) => mt || 0}px;
  margin-bottom: ${({ mb }) => mb || 0}px;
`;
