import React, { useState } from "react";
import { useTheme } from "styled-components/native";
import { Label } from "../Ui/styles";
import { Container, Icon, Option, Type } from "./styles";

export default function Options() {
  const { FONT_SIZE, COLORS } = useTheme();
  const [yesSelected, setYesSelected] = useState(false);
  const [noSelected, setNoSelected] = useState(false);

  return (
    <Container>
      <Label bold size={FONT_SIZE.SM}>
        Está dentro da dieta?
      </Label>

      <Option>
        <Type
          style={{ marginRight: 8 }}
          yesSelected={yesSelected}
          onPress={() => [setYesSelected(!yesSelected), setNoSelected(false)]}
        >
          <Icon name="dot-fill" size={16} color={COLORS.green_dark} />
          <Label bold size={FONT_SIZE.SM} color={COLORS.gray_100}>
            Sim
          </Label>
        </Type>
        <Type
          noSelected={noSelected}
          onPress={() => [setNoSelected(!noSelected), setYesSelected(false)]}
        >
          <Icon name="dot-fill" size={16} color={COLORS.red_dark} />
          <Label bold size={FONT_SIZE.SM} color={COLORS.gray_100}>
            Não
          </Label>
        </Type>
      </Option>
    </Container>
  );
}