import React, { useState , useEffect} from "react";
import { useRouter } from 'next/router'
import axios from "axios";


const Posts = () => {
    const router = useRouter()
    const slug= router?.query?.posts
    console.log(router.query.posts)
    const url=`https://blogv2.terablock.com/ghost/api/content/posts/slug/${slug}/?key=0489294cc94510ae9335da2c7f&limit=5&filter=tag:cryptobasics&include=tags`
    useEffect(() => {
        axios.get(url).then((res) => {
        //   setCryptoBasis(res.data.posts);
          console.log(res,'cryptoBasis from api....')
        });
      }, []);
  return (
    <div>Posts</div>
  )
}

export default Posts