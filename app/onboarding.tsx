import { View, Text } from 'react-native';
import { Link } from "expo-router";

const onboarding = () => {
  return (
    <View>
      <Text>onboarding</Text>
      <Link href="/(auth)/sign-in" className="mt-4 px-4 py-2 bg-primary rounded text-white">
        Sign In
      </Link>
      <Link href="/(auth)/sign-up" className="mt-4 px-4 py-2 bg-primary rounded text-white">
        Sign Up
      </Link>
    </View>
  )
}

export default onboarding