import { View, ScrollView, Text, StyleSheet, Image } from "react-native";
import Constants from "expo-constants";

import Search from "../../components/Search";
import Title from "../../components/Title";

import elipseImg from "../../assets/elipse.png";

export default function Comunicados() {
  return (
    <ScrollView style={styles.container}>
      <Search />
      <Title text="Últimos comunicados" />

      <View style={styles.comunicadosContainer}>
        <View style={styles.comunicadoContainer}>
          <View style={styles.comunicadoHeader}>
            <View style={styles.comunicadoHeaderTop}>
              <Image source={elipseImg} />
              <Text style={styles.comunicadoAssunto}>
                Assunto do comunicado
              </Text>
            </View>
            <Text style={styles.comunicadoData}>Aos 19 De Novembro 2022</Text>
          </View>
          <Text style={styles.comunicadoContent}>
            In this book, we take you on a fun, hands-on and pragmatic journey
            to learning Node.js, Express and MongoDB development. You'll start
            building your first Node.js app within minutes. Every chapter is
            written in a bite-sized manner and straight to the point as I don’t
            want to waste your time (and most certainly mine) on the content you
            don't need.
          </Text>
          <View style={styles.separator} />
        </View>
        <View style={styles.comunicadoContainer}>
          <View style={styles.comunicadoHeader}>
            <View style={styles.comunicadoHeaderTop}>
              <Image source={elipseImg} />
              <Text style={styles.comunicadoAssunto}>
                Assunto do comunicado
              </Text>
            </View>
            <Text style={styles.comunicadoData}>Aos 19 De Novembro 2022</Text>
          </View>
          <Text style={styles.comunicadoContent}>
            In this book, we take you on a fun, hands-on and pragmatic journey
            to learning Node.js, Express and MongoDB development. You'll start
            building your first Node.js app within minutes. Every chapter is
            written in a bite-sized manner and straight to the point as I don’t
            want to waste your time (and most certainly mine) on the content you
            don't need.
          </Text>
          <View style={styles.separator} />
        </View>
        <View style={styles.comunicadoContainer}>
          <View style={styles.comunicadoHeader}>
            <View style={styles.comunicadoHeaderTop}>
              <Image source={elipseImg} />
              <Text style={styles.comunicadoAssunto}>
                Assunto do comunicado
              </Text>
            </View>
            <Text style={styles.comunicadoData}>Aos 19 De Novembro 2022</Text>
          </View>
          <Text style={styles.comunicadoContent}>
            In this book, we take you on a fun, hands-on and pragmatic journey
            to learning Node.js, Express and MongoDB development. You'll start
            building your first Node.js app within minutes. Every chapter is
            written in a bite-sized manner and straight to the point as I don’t
            want to waste your time (and most certainly mine) on the content you
            don't need.
          </Text>
          <View style={styles.separator} />
        </View>
        <View style={styles.comunicadoContainer}>
          <View style={styles.comunicadoHeader}>
            <View style={styles.comunicadoHeaderTop}>
              <Image source={elipseImg} />
              <Text style={styles.comunicadoAssunto}>
                Assunto do comunicado
              </Text>
            </View>
            <Text style={styles.comunicadoData}>Aos 19 De Novembro 2022</Text>
          </View>
          <Text style={styles.comunicadoContent}>
            In this book, we take you on a fun, hands-on and pragmatic journey
            to learning Node.js, Express and MongoDB development. You'll start
            building your first Node.js app within minutes. Every chapter is
            written in a bite-sized manner and straight to the point as I don’t
            want to waste your time (and most certainly mine) on the content you
            don't need.
          </Text>
          <View style={styles.separator} />
        </View>
        <View style={styles.comunicadoContainer}>
          <View style={styles.comunicadoHeader}>
            <View style={styles.comunicadoHeaderTop}>
              <Image source={elipseImg} />
              <Text style={styles.comunicadoAssunto}>
                Assunto do comunicado
              </Text>
            </View>
            <Text style={styles.comunicadoData}>Aos 19 De Novembro 2022</Text>
          </View>
          <Text style={styles.comunicadoContent}>
            In this book, we take you on a fun, hands-on and pragmatic journey
            to learning Node.js, Express and MongoDB development. You'll start
            building your first Node.js app within minutes. Every chapter is
            written in a bite-sized manner and straight to the point as I don’t
            want to waste your time (and most certainly mine) on the content you
            don't need.
          </Text>
          <View style={styles.separator} />
        </View>
        <View style={styles.comunicadoContainer}>
          <View style={styles.comunicadoHeader}>
            <View style={styles.comunicadoHeaderTop}>
              <Image source={elipseImg} />
              <Text style={styles.comunicadoAssunto}>
                Assunto do comunicado
              </Text>
            </View>
            <Text style={styles.comunicadoData}>Aos 19 De Novembro 2022</Text>
          </View>
          <Text style={styles.comunicadoContent}>
            In this book, we take you on a fun, hands-on and pragmatic journey
            to learning Node.js, Express and MongoDB development. You'll start
            building your first Node.js app within minutes. Every chapter is
            written in a bite-sized manner and straight to the point as I don’t
            want to waste your time (and most certainly mine) on the content you
            don't need.
          </Text>
          <View style={styles.separator} />
        </View>
        <View style={styles.comunicadoContainer}>
          <View style={styles.comunicadoHeader}>
            <View style={styles.comunicadoHeaderTop}>
              <Image source={elipseImg} />
              <Text style={styles.comunicadoAssunto}>
                Assunto do comunicado
              </Text>
            </View>
            <Text style={styles.comunicadoData}>Aos 19 De Novembro 2022</Text>
          </View>
          <Text style={styles.comunicadoContent}>
            In this book, we take you on a fun, hands-on and pragmatic journey
            to learning Node.js, Express and MongoDB development. You'll start
            building your first Node.js app within minutes. Every chapter is
            written in a bite-sized manner and straight to the point as I don’t
            want to waste your time (and most certainly mine) on the content you
            don't need.
          </Text>
          <View style={styles.separator} />
        </View>
        <View style={styles.comunicadoContainer}>
          <View style={styles.comunicadoHeader}>
            <View style={styles.comunicadoHeaderTop}>
              <Image source={elipseImg} />
              <Text style={styles.comunicadoAssunto}>
                Assunto do comunicado
              </Text>
            </View>
            <Text style={styles.comunicadoData}>Aos 19 De Novembro 2022</Text>
          </View>
          <Text style={styles.comunicadoContent}>
            In this book, we take you on a fun, hands-on and pragmatic journey
            to learning Node.js, Express and MongoDB development. You'll start
            building your first Node.js app within minutes. Every chapter is
            written in a bite-sized manner and straight to the point as I don’t
            want to waste your time (and most certainly mine) on the content you
            don't need.
          </Text>
          <View style={styles.separator} />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight + 24,
    backgroundColor: "#E7EBEF",
    paddingHorizontal: 24,
    paddingVertical: 24,
  },
  comunicadosContainer: {
    marginBottom: 200,
  },
  comunicadoHeader: {
    marginBottom: 12,
  },
  comunicadoHeaderTop: {
    flexDirection: "row",
    alignItems: "center",
  },
  comunicadoAssunto: {
    fontSize: 20,
    marginLeft: 8,
    flexWrap: "wrap",
    color: "#61768D",
    textTransform: "uppercase",
  },
  comunicadoData: {
    fontSize: 12,
    color: "#61768D",
    opacity: 0.4,
  },
  comunicadoContent: {
    fontSize: 20,
    color: "#61768D",
    lineHeight: 27,
  },
  separator: {
    width: "100%",
    height: 8,
    backgroundColor: "#ECF6FF",
    marginVertical: 12,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.09)",
  },
});
