import { useState, useEffect } from 'react';

export function useFetchPosts<T>() {
  const [posts, setPosts] = useState<Array<T>>([]);

  useEffect(() => {
    fetch('https://lodestonenews.com/news/topics?locale=na&limit=50')
      .then((response) => response.json())
      .then((posts: Array<T>) => setPosts(posts))
      .catch((err) => console.error(err));
  }, []);

  return posts;
}

export function useChunkArray<T>(
  arr: Array<T>,
  chunkSize: number
): { chunkedArray: Array<Array<T>>; totalPages: number } {
  const [chunkedArray, setChunkedArray] = useState<Array<Array<T>>>([]);

  const totalChunks: number = +Math.ceil(arr.length / chunkSize).toFixed(0);

  useEffect(() => {
    const chunks: Array<Array<T>> = [];
    for (let i = 0; i < totalChunks; i++) {
      chunks.push(arr.slice(i * chunkSize, i * chunkSize + chunkSize));
    }
    setChunkedArray(chunks);
  }, [arr, chunkSize, totalChunks]);

  return { chunkedArray, totalPages: totalChunks };
}
