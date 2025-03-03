import { StyleSheet, FlatList } from "react-native";
import FeedItem from "./FeedItem";
import { colors } from "@/constants";
import { useRef, useState } from "react";
import { useScrollToTop } from "@react-navigation/native";
import useGetInfiniteMyPosts from "@/hooks/queries/useGetInfiniteMyPosts";

const MyFeedList = () => {
  const {
    data: posts,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    refetch,
  } = useGetInfiniteMyPosts();

  const [isRefreshing, setIsRefreshing] = useState(false);
  const ref = useRef<FlatList | null>(null);
  useScrollToTop(ref);

  const handleRefresh = async () => {
    setIsRefreshing(true);
    await refetch();
    setIsRefreshing(false);
  };

  const handelEndReached = () => {
    if (hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  };

  return (
    <FlatList
      ref={ref}
      data={posts?.pages.flat()}
      renderItem={({ item }) => <FeedItem post={item} />}
      contentContainerStyle={styles.contentContainer}
      onEndReached={handelEndReached}
      keyExtractor={(item) => String(item.id)}
      onEndReachedThreshold={0.5}
      refreshing={isRefreshing}
      onRefresh={handleRefresh}
    />
  );
};
export default MyFeedList;

const styles = StyleSheet.create({
  contentContainer: {
    paddingVertical: 12,
    backgroundColor: colors.GRAY_200,
    gap: 12,
  },
});
