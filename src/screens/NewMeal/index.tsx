import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  Alert,
  Keyboard,
  ScrollView,
  TouchableWithoutFeedback,
} from "react-native";
import Header from "../../components/Header";
import Input from "../../components/Input";
import Options from "../../components/Options";
import { RoundedContainer } from "../../components/Ui/styles";
import { addMeal } from "../../storage/addMeal";
import { Container, CreateMeal, Date, Separator } from "./styles";

export default function NewMeal() {
  const navigation = useNavigation();
  const [meal, setMeal] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [hour, setHour] = useState("");
  const [diet, setDiet] = useState("");

  async function handleAddMeal() {
    const newMeal = {
      meal,
      description,
      date,
      hour,
      diet,
    };

    try {
      await addMeal(newMeal).then(() => {
        navigation.navigate("feedback");
      });
    } catch (error) {
      console.log(error);
      Alert.alert("Ops", "Não foi possível adicionar a refeição.");
    }
  }

  return (
    <Container>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <Header title="Nova refeição" />

        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <RoundedContainer>
            <Input
              label="Nome"
              value={meal}
              onChangeText={(text: string) => setMeal(text)}
            />

            <Input
              label="Descrição"
              multiline
              value={description}
              onChangeText={(text: string) => setDescription(text)}
            />

            <Date>
              <Input
                label="Data"
                mask="99/99/9999"
                value={date}
                onChangeText={(text: string) => setDate(text)}
              />

              <Separator />

              <Input
                label="Hora"
                mask="99:99"
                value={hour}
                onChangeText={(text: string) => setHour(text)}
              />
            </Date>

            <Options setDiet={setDiet} />

            <CreateMeal title="Cadastrar refeição" onPress={handleAddMeal} />
          </RoundedContainer>
        </TouchableWithoutFeedback>
      </ScrollView>
    </Container>
  );
}
