import React from "react";
import { useTheme } from "styled-components/native";
import { Label } from "../../components/Ui/styles";
import { Container, Img } from "./styles";
import goodFeedback from "../../assets/goodFeedback.png";
import badFeedback from "../../assets/badFeedback.png";
import Button from "../../components/Button";
import { useNavigation } from "@react-navigation/native";

export default function Feedback() {
  const { COLORS, FONT_SIZE } = useTheme();
  const navigation = useNavigation();

  return (
    <Container>
      <Label bold size={FONT_SIZE.XL} color={COLORS.green_dark} mb={8}>
        Continue assim!
      </Label>
      <Label color={COLORS.gray_100}>
        Você continua <Label bold>dentro da dieta.</Label> Muito bem!
      </Label>
      <Img source={goodFeedback} />
      <Button
        title="Ir para a página inicial"
        onPress={() => navigation.navigate("home")}
      />
    </Container>
  );
}