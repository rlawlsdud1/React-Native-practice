import { baseUrls } from "@/api/axios";
import { ImageUri } from "@/types";
import { router } from "expo-router";
import {
  Image,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
} from "react-native";

interface ImagePreviweList {
  imageUris: ImageUri[];
}

const ImagePreviweList = ({ imageUris = [] }: ImagePreviweList) => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.container}
    >
      {imageUris.map(({ uri }, index) => {
        const imageUri = `${
          Platform.OS === "ios" ? baseUrls.ios : baseUrls.android
        }/${uri}`;

        return (
          <Pressable
            key={uri + index}
            style={styles.imageContainer}
            onPress={() =>
              router.push({ pathname: "/image", params: { uri: imageUri } })
            }
          >
            <Image style={styles.image} source={{ uri: imageUri }} />
          </Pressable>
        );
      })}
    </ScrollView>
  );
};
export default ImagePreviweList;

const styles = StyleSheet.create({
  container: {
    gap: 5,
    flexGrow: 1,
  },
  imageContainer: {
    width: 90,
    height: 90,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 8,
  },
});
