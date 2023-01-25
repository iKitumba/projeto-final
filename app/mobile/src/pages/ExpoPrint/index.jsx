import * as React from "react";
import {
  View,
  StyleSheet,
  Button,
  Platform,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import * as Print from "expo-print";
import { shareAsync } from "expo-sharing";
import Title from "../../components/Title";
import Constants from "expo-constants";
import { Ionicons } from "@expo/vector-icons";

const html = `
<html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no" />
  </head>
  <body style="text-align: center;">
    <h1 style="font-size: 50px; font-family: Helvetica Neue; font-weight: normal;">
      Hello Expo!
    </h1>
    <img
      src="https://d30j33t1r58ioz.cloudfront.net/static/guides/sdk.png"
      style="width: 90vw;" />
  </body>
</html>
`;

export default function ExpoPrint({ navigation }) {
  const [selectedPrinter, setSelectedPrinter] = React.useState();

  const print = async () => {
    // On iOS/android prints the given html. On web prints the HTML from the current page.
    await Print.printAsync({
      html,
      printerUrl: selectedPrinter?.url, // iOS only
    });
  };

  const printToFile = async () => {
    // On iOS/android prints the given html. On web prints the HTML from the current page.
    const { uri } = await Print.printToFileAsync({ html });
    console.log("File has been saved to:", uri);
    await shareAsync(uri, { UTI: ".pdf", mimeType: "application/pdf" });
  };

  const selectPrinter = async () => {
    const printer = await Print.selectPrinterAsync(); // iOS only
    setSelectedPrinter(printer);
  };

  function handleBack() {
    navigation.goBack();
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.topRow}>
          <TouchableOpacity style={styles.goBack} onPress={handleBack}>
            <Ionicons name="arrow-back" size={24} color="#61768D" />
            <Text style={styles.topOpctionName}>Imprimir Arquivo</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={[styles.buttonPrint, { backgroundColor: "#097FFA" }]}
          onPress={print}
        >
          <Text style={styles.buttonPrintText}>Imprimir</Text>
        </TouchableOpacity>
        <View style={styles.spacer} />

        <TouchableOpacity style={styles.buttonPrint} onPress={printToFile}>
          <Text style={styles.buttonPrintText}>Salvar Como PDF</Text>
        </TouchableOpacity>
        {Platform.OS === "ios" && (
          <>
            <View style={styles.spacer} />
            <Button title="Select printer" onPress={selectPrinter} />
            <View style={styles.spacer} />
            {selectedPrinter ? (
              <Text
                style={styles.printer}
              >{`Selected printer: ${selectedPrinter.name}`}</Text>
            ) : undefined}
          </>
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E7EBEF",
    paddingTop: Constants.statusBarHeight + 24,
    paddingHorizontal: 24,
  },
  header: {},
  topRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  goBack: {
    flexDirection: "row",
    alignItems: "center",
  },
  topOpctionName: {
    marginLeft: 12,
    fontSize: 16,
    fontWeight: "300",
    color: "#61768D",
    textTransform: "uppercase",
  },

  buttonsContainer: {
    marginVertical: 24,
  },

  buttonPrint: {
    height: 45,
    backgroundColor: "#61768D",
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 6,
  },

  buttonPrintText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#E7EBEF",
  },
});
