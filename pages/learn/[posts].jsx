import React, { useState, useEffect } from "react";
import { useRouter } from 'next/router'
import axios from "axios";
import DOMPurify from 'dompurify'
import { useScreenSize } from "../../src/functions/useScreenSize";



const Posts = () => {
    const router = useRouter()
    console.log(router, 'router');
    const slug = router?.query?.posts
    const width = useScreenSize().width;
    const sanitize = (content) => {
        return process.browser ? DOMPurify.sanitize(content) : content;
    };
    const [slugData, setSlugData] = useState([])
    const url = `https://blogv2.terablock.com/ghost/api/content/posts/slug/${slug}/?key=0489294cc94510ae9335da2c7f&&include=tags`
    useEffect(() => {
        if (slug !== undefined) {
            axios.get(url).then((res) => {
                setSlugData(res.data.posts);
                console.log(slugData, 'cryptoBasis from api....')
            });
        }
    }, [slug]);
    return (
        <div>
            {slugData?.map((el) => (
                <>
                    <div className="d-flex flex-column justify-content-center align-items-center">
                        <div className="d-flex justify-content-center" style={{ backgroundImage: `url(${el.feature_image})`, maxHeight:'400px', width:'100%',backgroundPosition:'center', height:'50vh',overflow:'hidden', backgroundSize : "cover" }}>
                        </div>
                        <h1 className="text-center pb-4 pt-4 font-weight-bold d-flex justify-content-center" style={{fontWeight : 900}}>{el.title}</h1>
                        <div className="d-flex justify-content-center">
                            <div dangerouslySetInnerHTML={{ __html: sanitize(el.html ?? {}) }} style={{ maxWidth: '90%', justifyContent: 'center', fontWeight: 500 }} className='d-flex flex-column justify-content-center' />
                        </div>
                    </div>
                </>
            ))}
        </div>
    )
}

export default Posts