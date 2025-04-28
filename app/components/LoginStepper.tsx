import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Platform,
} from "react-native";
import { useRouter } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import GoogleIcon from "./GoogleIcon";
import LoginStep0 from "./LoginStep0";
import LoginEnterPasswordStep from "./LoginEnterPasswordStep";
import ForgotPasswordStep from "./ForgotPasswordStep";
import ForgotPasswordCodeStep from "./ForgotPasswordCodeStep";
import ForgotPasswordResetStep from "./ForgotPasswordResetStep";

const { width } = Dimensions.get("window");

export default function LoginStepper() {
  const [step, setStep] = useState(0);
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [forgotEmail, setForgotEmail] = useState("");
  const router = useRouter();

  // Reset all state for a clean forgot password flow
  const resetForgotFlow = () => {
    setForgotEmail(email);
    setCode("");
    setPassword("");
    setConfirmPassword("");
  };

  const handleBack = () => {
    if (router.canGoBack()) {
      router.back();
    } else if (step > 0) {
      setStep(step - 1);
    } else {
      router.replace("/(routes)/onboarding"); // fallback if needed
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={handleBack}>
        <Ionicons name="chevron-back" size={24} color="#0B501E" />
      </TouchableOpacity>
      {step === 0 && (
        <>
          <LoginStep0
            onNext={(emailValue: string) => {
              setEmail(emailValue);
              setStep(1);
            }}
            styles={styles}
          />
        </>
      )}
      {step === 1 && (
        <LoginEnterPasswordStep
          email={email}
          onNext={() => router.replace("/(drawer)/(tabs)")}
          onForgotPassword={() => {
            resetForgotFlow();
            setStep(2);
          }}
          styles={styles}
        />
      )}
      {step === 2 && (
        <ForgotPasswordStep
          email={forgotEmail}
          onContinue={(inputEmail: string) => {
            setForgotEmail(inputEmail);
            setStep(3);
          }}
          styles={styles}
        />
      )}
      {step === 3 && (
        <ForgotPasswordCodeStep
          email={forgotEmail}
          onNext={() => setStep(4)}
          onResend={() => {
            alert("TODO: handle resend");
            /* TODO: handle resend */
          }}
          styles={styles}
        />
      )}
      {step === 4 && (
        <ForgotPasswordResetStep
          onConfirm={() => router.replace("/(drawer)/(tabs)")}
          styles={styles}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 24,
    // justifyContent: 'center',
  },
  backButton: {
    position: "absolute",
    top: Platform.OS === "ios" ? 56 : 32,
    left: 16,
    zIndex: 10,
    padding: 8,
    borderRadius: 20,
  },
  backButtonText: {
    fontSize: 28,
    color: "#0B501E",
    fontWeight: "bold",
  },
  title: {
    marginTop: 100,
    fontSize: 24,
    fontWeight: "bold",
    fontFamily: "Geist-Bold",
    lineHeight: 36,
    textAlign: "left",
    marginBottom: 24,
    // marginTop: 24,
  },
  subtitle: {
    fontSize: 14,
    marginBottom: 16,
    color: "#565656",
  },
  input: {
    borderWidth: 1,
    borderColor: "#DBE1E7",
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    fontSize: 16,
    backgroundColor: "#F7F8F9",
  },
  checkboxRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 22,
  },
  checkbox: {
    marginRight: 8,
    marginTop: 2,
  },
  checkboxBox: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderRadius: 4,
    borderColor: "#0B501E",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  checkboxChecked: {
    backgroundColor: "#0B501E",
    borderColor: "#0B501E",
  },
  checkboxText: {
    fontSize: 15,
    color: "#565656",
    flex: 1,
    lineHeight: 21,
  },
  nextButton: {
    backgroundColor: "#0B501E",
    borderRadius: 28,
    paddingVertical: 14, // slightly reduced
    alignItems: "center",
    marginTop: 8, // reduced
    marginBottom: 8, // reduced
  },
  nextButtonDisabled: {
    opacity: 0.5,
  },
  nextButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "600",
    fontFamily: "Geist-Bold",
  },
  dividerRow: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20, // reduced
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: "#E0E0E0",
  },
  dividerText: {
    marginHorizontal: 8, // reduced
    fontSize: 15,
    color: "#666666",
  },
  socialButton: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#DBE1E7",
    borderRadius: 28,
    paddingVertical: 12, // slightly reduced
    paddingHorizontal: 16,
    marginBottom: 8, // reduced
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  socialButtonText: {
    fontSize: 16,
    color: "#090909",
    fontWeight: "500",
  },
  bottomRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 18,
  },
  bottomText: {
    fontSize: 15,
    color: "#444",
  },
  loginText: {
    fontSize: 15,
    color: "#0B501E",
    fontWeight: "bold",
    fontFamily: "Geist-Bold",
    textDecorationLine: "underline",
  },
});
