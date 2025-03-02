import { colors } from "@/constants";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { Octicons, MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";
import { Post } from "@/types";
import Profile from "./Profile";
import useAuth from "@/hooks/queries/useAuth";
import { useActionSheet } from "@expo/react-native-action-sheet";
import { useDeletePost } from "@/hooks/queries/useDeletePost";
import { router } from "expo-router";
import ImagePreviweList from "./ImagePreviweList";
import Vote from "./Vote";
import useLikePost from "@/hooks/queries/useLikePost";

interface FeedItemProps {
  post: Post;
  isDetail?: boolean;
}

const FeedItem = ({ post, isDetail = false }: FeedItemProps) => {
  const { auth } = useAuth();
  const likeUsers = post.likes?.map((like) => Number(like.userId));
  let isLiked = likeUsers?.includes(Number(auth.id));
  const { showActionSheetWithOptions } = useActionSheet();
  const deletePost = useDeletePost();
  const likePost = useLikePost();

  const handlePressOption = () => {
    const options = ["삭제", "수정", "취소"];
    const destructiveButtonIndex = 0;
    const cancelButtonIndex = 2;

    showActionSheetWithOptions(
      { options, cancelButtonIndex, destructiveButtonIndex },
      (selectedIndex?: number) => {
        switch (selectedIndex) {
          case destructiveButtonIndex:
            deletePost.mutate(post.id, {
              onSuccess: () => isDetail && router.back(),
            });
            break;
          case 1:
            router.push(`/post/update/${post.id}`);
            break;
          case cancelButtonIndex:
            break;
          default:
            break;
        }
      }
    );
  };

  const handlePressFeed = () => {
    if (!isDetail) {
      router.push(`/post/${post.id}`);
    }
  };

  const handlePressLike = () => {
    if (!auth.id) {
      router.push("/auth");
      return;
    }
    if (!isDetail) {
      router.push(`/post/${post.id}`);
      return;
    }

    likePost.mutate(post.id);
  };

  const ContainerComponent = isDetail ? View : Pressable;

  return (
    <ContainerComponent onPress={handlePressFeed}>
      <View style={styles.container}>
        <View style={styles.contentContainer}>
          <Profile
            imageUri={post.author.imageUri}
            nickname={post.author.nickname}
            createdAt={post.createdAt}
            onPress={() => {}}
            option={
              auth.id === post.author.id && (
                <Ionicons
                  name="ellipsis-vertical"
                  size={24}
                  color={colors.BLACK}
                  onPress={handlePressOption}
                />
              )
            }
          />
          <Text style={styles.title}>{post.title}</Text>
          <Text numberOfLines={3} style={styles.description}>
            {post.description}
          </Text>
          <ImagePreviweList imageUris={post.imageUris} />
          {!isDetail && post.hasVote && (
            <View style={styles.voteContainer}>
              <View style={styles.voteTextContainer}>
                <MaterialCommunityIcons
                  name="vote"
                  size={24}
                  color={colors.ORANGE_600}
                />
                <Text style={styles.voteText}>투표</Text>
              </View>
              <Text style={styles.voteCount}>{post.voteCount}명 참여중..</Text>
            </View>
          )}
          {isDetail && post.hasVote && (
            <Vote
              postId={post.id}
              voteCount={post.voteCount}
              postVotes={post.votes ?? []}
            />
          )}
        </View>
        <View style={styles.menuContainer}>
          <Pressable style={styles.menu} onPress={handlePressLike}>
            <Octicons
              name={isLiked ? "heart-fill" : "heart"}
              size={16}
              color={isLiked ? colors.ORANGE_600 : colors.BLACK}
            />
            <Text style={isLiked ? styles.activeMenuText : styles.menuText}>
              {post.likes.length || "좋아요"}
            </Text>
          </Pressable>
          <Pressable style={styles.menu} onPress={handlePressFeed}>
            <MaterialCommunityIcons
              name="comment-processing-outline"
              size={16}
              color={colors.BLACK}
            />
            <Text style={styles.menuText}>{post.commentCount || "댓글"}</Text>
          </Pressable>
          <Pressable style={styles.menu} onPress={handlePressFeed}>
            <Ionicons name="eye-outline" />
            <Text style={styles.menuText}>{post.viewCount}</Text>
          </Pressable>
        </View>
      </View>
    </ContainerComponent>
  );
};
export default FeedItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.WHITE,
  },
  contentContainer: {
    padding: 16,
  },
  menuContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    borderTopColor: colors.GRAY_300,
    borderTopWidth: StyleSheet.hairlineWidth,
  },
  title: {
    fontSize: 18,
    color: colors.BLACK,
    fontWeight: "600",
    marginVertical: 8,
  },
  description: {
    fontSize: 16,
    color: colors.BLACK,
    marginBottom: 14,
  },
  menu: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 16,
    width: "33%",
    gap: 4,
  },
  menuText: {
    fontSize: 14,
    color: colors.GRAY_700,
  },
  activeMenuText: {
    fontWeight: "500",
    color: colors.ORANGE_600,
  },
  voteContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 14,
    gap: 16,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: colors.ORANGE_600,
    backgroundColor: colors.ORANGE_100,
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
  voteTextContainer: {
    gap: 6,
    flexDirection: "row",
    alignItems: "center",
  },
  voteText: {
    fontSize: 14,
    fontWeight: "bold",
    color: colors.ORANGE_600,
  },
  voteCount: {
    fontSize: 14,
    fontWeight: "bold",
    color: colors.BLACK,
  },
});
