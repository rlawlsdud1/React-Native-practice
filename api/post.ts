import { CreatePostDto, CreateVoteDto, Post, VoteOption } from "@/types";
import axiosInstance from "./axios";

async function createPost(body: CreatePostDto) {
  const { data } = await axiosInstance.post("/posts", body);

  return data;
}

async function getPosts(page = 1): Promise<Post[]> {
  // URL 끝에 ?key=value 형식으로 추가되는 데이터를 query parameter라 한다
  // & 로 여러 개의 파라미터를 연결할 수 있음
  const { data } = await axiosInstance.get(`/posts?page=${page}`);

  return data;
}

async function getMyPosts(page = 1): Promise<Post[]> {
  const { data } = await axiosInstance.get(`/posts/my?page=${page}`);

  return data;
}

async function getUserPosts(id: number, page = 1): Promise<Post[]> {
  const { data } = await axiosInstance.get(`/posts/user/${id}?page=${page}`);

  return data;
}

async function getLikedPosts(page = 1): Promise<Post[]> {
  const { data } = await axiosInstance.get(`/likes?page=${page}`);

  return data;
}

async function deletePost(id: number): Promise<number> {
  const { data } = await axiosInstance.delete(`/posts/${id}`);

  return data;
}

async function getPost(id: number): Promise<Post> {
  const { data } = await axiosInstance.get(`/posts/${id}`);

  return data;
}

type RequestUpdatePost = {
  id: number;
  body: CreatePostDto;
};

async function updatePost({ id, body }: RequestUpdatePost): Promise<number> {
  const { data } = await axiosInstance.patch(`/posts/${id}`, body);

  return data;
}

async function createVote({
  postId,
  voteOptionId,
}: CreateVoteDto): Promise<{ postId: number; voteOption: VoteOption }> {
  const { data } = await axiosInstance.post(
    `/posts/${postId}/vote/${voteOptionId}`
  );

  return data;
}

async function likePost(id: number): Promise<number> {
  const { data } = await axiosInstance.post(`/likes/${id}`);

  return data;
}

export {
  createPost,
  getPosts,
  deletePost,
  getPost,
  updatePost,
  createVote,
  likePost,
  getMyPosts,
  getLikedPosts,
  getUserPosts,
};
