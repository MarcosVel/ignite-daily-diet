import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";

type StatsProps = {
  downFifty: boolean;
};

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.gray_700};
  padding: 0 24px;
`;

export const Logo = styled.Image`
  margin: 0 auto;
`;

export const Statistic = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6,
})<StatsProps>`
  margin: 32px 0 40px;
  align-items: center;
  justify-content: center;
  padding: 20px;
  border-radius: 8px;
  background-color: ${({ theme, downFifty }) =>
    downFifty ? theme.COLORS.red_light : theme.COLORS.green_light};
`;

export const Open = styled.TouchableOpacity`
  position: absolute;
  top: 8px;
  right: 8px;
`;

export const AddMeal = styled.View`
  margin-bottom: 32px;
`;

export const MealsList = styled.SectionList`
  flex: 1;
`;

export const SectionTitle = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.LG}px;
    color: ${theme.COLORS.gray_100};
  `}
`;

export const SectionFooterSeparator = styled.View`
  height: 32px;
`;
