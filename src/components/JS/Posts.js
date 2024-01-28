import React, { useContext, useEffect, useState } from "react";
import "../CSS/Posts.css"
import Card from "./Card.js"



const Posts = () => {
    const [posts, setPosts] = useState("")
    const [tot, setTot] = useState([])
    var compl = [];
    var dat = {};
    var rawposts;
    const fetchData = async () => {
        rawposts = await fetch('https://webmosaic.petrichor.events/posts')
        let data = await rawposts.json()
        setPosts(data)
    }
    if (!posts || posts == undefined) {
        fetchData()
    }

    useEffect(() => {
        async function func() {
            for (let post of posts.posts) {
                if (post) {
                    console.log(post)
                    let id = post.id, title = post.name, body, author_id, author, likes, dislikes, comments = [];
                    await fetch(`https://webmosaic.petrichor.events/post?id=${id}`)
                        .then(res => res.json())
                        .then(data => {
                            body = data.body;
                            author_id = data.author_id;
                            likes = data.likes;
                            dislikes = data.dislikes;
                        })
                    await fetch(`https://webmosaic.petrichor.events/author?id=${author_id}`)
                        .then(res => res.json())
                        .then(data => {
                            author = data.name;
                        })
                    dat = {
                        "id": id,
                        "title": title,
                        "body": body,
                        "likes": likes,
                        "dislikes": dislikes,
                        "author": author,
                        "comments": comments,
                    }
                    if (!isincluded(dat)) {
                        compl.push(dat)
                        console.log(compl,'c')
                        setTot(tot => {
                            console.log('tot set')
                            return compl})
                    }
                }
            }
        }
        if (posts.posts) {
            func()
        }
    }, [posts])

    console.log(tot,'t')
    const isincluded = (dat) => {
        compl.forEach((obj) => {
            if (obj.id == dat.id) {
                return true
            }
        })
        return false
    }

    useEffect(()=>{
        console.log('tot changed')
    },[tot])

    return (
        <>
            <div className="posts-container">
                {
                    tot.map(
                        (obj, idx) => (
                            <Card key={idx} title={obj.title} body={obj.body} author={obj.author} id={obj.id} likes={obj.likes} dislikes={obj.dislikes} />
                        )
                    )
                }
            </div>
        </>
    )
}

export default Posts;