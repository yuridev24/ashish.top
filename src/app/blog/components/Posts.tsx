'use client'

import { query } from '@/lib/hashnode';
import { useState, useEffect } from 'react';

import { Post } from "./Post";

export const Posts = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    query({
      query: `
        query($id: ObjectId!) {
          publication(id: $id) {
            posts(first: 20) {
              edges {
                node {
                  coverImage {
                    url
                  }
                  id
                  slug
                  title
                  subtitle
                  publishedAt
                }
              }
            }
          }
        }
      `,
      variables: {
        id: process.env.HASHNODE_HOST_ID
      }
    }).then((result) => {
      setData(result.data);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      {data.publication.posts.edges.map((edge) => (
        <Post key={edge.node.id} post={edge.node} />
      ))}
    </div>
  );
}