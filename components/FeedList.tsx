import { View, Text, StyleSheet, FlatList } from "react-native";
import FeedItem from "./FeedItem";
import { colors } from "@/constants";

const dummyData = Array.from({ length: 10 }, () => ({
  id: 1,
  userId: 1,
  title: "더미 제목",
  description:
    "더미 내용입니다 더미 내용입니다 더미 내용입니다 더미 내용입니다 더미 내용입니다 더미 내용입니다 더미 내용입니다 더미 내용입니다 더미 내용입니다 더미 내용입니다 더미 내용입니다 더미 내용입니다 더미 내용입니다 더미 내용입니다 더미 내용입니다 더미 내용입니다",
  createdAt: "2025-01-01",
  author: {
    id: 1,
    nickname: "닉네임",
    imageUri: "",
  },
  imageUris: [],
  likes: [],
  hasVote: false,
  voteCount: 1,
  commentCount: 1,
  viewCount: 1,
})).map((v, i) => ({ ...v, id: i }));

const FeedList = () => {
  return (
    <FlatList
      data={dummyData}
      renderItem={({ item }) => <FeedItem post={item} />}
      contentContainerStyle={styles.contentContainer}
      keyExtractor={(item) => String(item.id)}
    />
  );
};
export default FeedList;

const styles = StyleSheet.create({
  contentContainer: {
    paddingVertical: 12,
    backgroundColor: colors.GRAY_200,
    gap: 12,
  },
});
