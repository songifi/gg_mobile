import React from "react";
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  TextInputProps,
  ViewStyle,
  TextStyle,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface SearchInputProps extends Omit<TextInputProps, "style"> {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  containerStyle?: ViewStyle;
  inputStyle?: TextStyle;
  placeholderStyle?: TextStyle;
  iconColor?: string;
}

export const SearchBar: React.FC<SearchInputProps> = ({
  value,
  onChangeText,
  placeholder = "Search...",
  containerStyle,
  inputStyle,
  placeholderStyle,
  iconColor = "#ADADAD",
  ...rest
}) => {
  return (
    <View style={[styles.searchView, containerStyle]}>
      <Ionicons
        name="search"
        size={20}
        color={iconColor}
        style={styles.searchIcon}
      />
      {value === "" && (
        <Text style={[styles.customPlaceholder, placeholderStyle]}>
          {placeholder}
        </Text>
      )}
      <TextInput
        value={value}
        onChangeText={onChangeText}
        style={[styles.searchInput, inputStyle]}
        {...rest}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchView: {
    position: "relative",
  },
  searchInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#DBE1E7",
    borderRadius: 4,
    paddingLeft: 36,
    marginHorizontal: 20,
    marginTop: 20,
    fontSize: 16,
    color: "#000",
  },
  customPlaceholder: {
    position: "absolute",
    top: 30,
    left: 55,
    color: "#ADADAD",
    fontSize: 16,
    zIndex: 1,
  },
  searchIcon: {
    position: "absolute",
    top: 32,
    left: 30,
    zIndex: 1,
  },
});
