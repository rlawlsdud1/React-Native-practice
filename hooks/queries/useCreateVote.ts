import { createVote } from "@/api/post";
import { queryClient } from "@/api/queryClient";
import { queryKeys } from "@/constants";
import { useMutation } from "@tanstack/react-query";

export function useCreateVote() {
  return useMutation({
    mutationFn: createVote,
    onSuccess: (data) => {
      queryClient.invalidateQueries({
        // 순서는 동일하게 맞춰야 한다
        queryKey: [queryKeys.POST, queryKeys.GET_POST, data.postId],
      });
    },
  });
}
