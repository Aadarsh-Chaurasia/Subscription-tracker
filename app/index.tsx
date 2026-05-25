import "@/global.css"
import { Link } from "expo-router";
import { Text, View } from "react-native";
 
export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-background">
      <Text className="text-xl font-bold text-success">
        Welcome to Nativewind!
      </Text>
      <Link href="/onboarding" className="mt-4 px-4 py-2 bg-primary rounded text-white">
        Get Started
      </Link>
      <Link href="/settings" className="mt-4 px-4 py-2 bg-primary rounded text-white">
        Settings
      </Link>


      <Link href="/subscriptions/123" className="mt-4 px-4 py-2 bg-secondary rounded">
        View Subscription 123
      </Link>

      <Link href={{
        pathname: "/subscriptions/[id]",
        params: { id: "456" }
      }}> View Subscription 456
      </Link>
      
    </View>
  );
}