import { ref, onValue, remove } from "firebase/database";
import { database } from "../config/FirebaseConfig";

export interface Comment {
  id: string;
  post_id: number;
  content: string;
  created_at: string;
  user_id: number;
}

export const listenComments = (callback: (comments: Comment[]) => void) => {
  const commentsRef = ref(database, "comments");

  const unsubscribe = onValue(commentsRef, (snapshot) => {
    const data = snapshot.val();
    const loadedComments: Comment[] = [];

    for (let id in data) {
      loadedComments.push({
        id,
        post_id: Number(data[id].post_id),
        content: data[id].content,
        created_at: data[id].created_at,
        user_id: data[id].user_id,
      });
    }

    callback(loadedComments);
  });

  return unsubscribe;
};

export const deletePostAndComments = async (postFirebaseId: string, postId: number) => {
  const postRef = ref(database, `forum_posts/${postFirebaseId}`);
  await remove(postRef);

  const commentsRef = ref(database, "comments");
  onValue(commentsRef, (snapshot) => {
    const data = snapshot.val();
    for (let id in data) {
      if (Number(data[id].post_id) === postId) {
        const commentRef = ref(database, `comments/${id}`);
        remove(commentRef);
      }
    }
  }, { onlyOnce: true });
};
