import React, { useState } from "react";
import "../CSS/Post.css"
import { useParams } from "react-router";
import Share from "./Share";

const Post = () => {
  const { id } = useParams()
  const [post, setPost] = useState([])
  const cur = window.location.host + window.location.pathname

  const fetchData = async () => {

    let pstdat, comment, authdat;

    await fetch(`https://webmosaic.petrichor.events/post?id=${id}`)
      .then(res => res.json())
      .then(async (res) => {
        pstdat = res;
        authdat = await fetch(`https://webmosaic.petrichor.events/author?id=${res.author_id}`)
          .then(res => res.json())
      })

    comment = await fetch(`https://webmosaic.petrichor.events/comments?post_id=${id}`)
      .then(res => {
        if (res.ok) {
          return res.json()
        }
        else {
          return [{ body: 'No comments yet', id: 1 }]
        }
      })

    setPost([
      {
        'id': pstdat.id,
        'title': pstdat.name,
        'body': pstdat.body,
        'likes': pstdat.likes,
        'dislikes': pstdat.dislikes,
        'comments': comment,
        'author': authdat.name
      }
    ])
  }

  if (!(post[0])) {
    fetchData()
  }

  const clicked = () => {
    let doc = document.querySelector('.comments')
    if (doc != null) {
      doc.style.visibility = 'hidden';
    }
  }
  const cmclicked = () => {
    let doc = document.querySelector('.comments')
    let cmimg = document.querySelector('.cmimg')
    if (doc != null) {
      doc.style.visibility = 'visible';
    }
    if (cmimg != null) {
      if (post[0]?.comments[0].body == 'No comments yet') {
        cmimg.style.display = 'none';
      }
      else {
        cmimg.style.display = 'inline-flex';
      }
    }
  }

  const show = () => {
    var doc = document.querySelector('.share')
    doc.style.visibility = 'visible';
  }

  return (
    <>
      <div className="container">
        <div className="auth">
          <div className="img"><i className="fa-solid fa-user fa-2xl small-icon" style={{ color: "#0460b8" }}></i></div>
          <div className="name">{post[0]?.author}</div>
        </div>
        <div className="title">{post[0]?.title}</div>
        <div className="body">{post[0]?.body}
        </div>
        <div className="mot">
          <div>
            <div className="lk">
              <i className="fa-solid fa-thumbs-up fa-2xl" style={{ color: "rgb(3 127 102)" }}></i>
              <p>{post[0] ? post[0].likes : "likes"}</p>
            </div>
            <div className="dlk">
              <i className="fa-solid fa-thumbs-up fa-2xl fa-rotate-180" style={{ color: "rgb(3 127 102)" }}></i>
              <p>{post[0] ? post[0].dislikes : "dislikes"}</p>
            </div>
            <div className="cm" onClick={() => {
              cmclicked()
            }}>
              <i className="fa-regular fa-comment fa-2xl" style={{ color: "rgb(3 127 102)" }}></i>
              <p>comments</p>
            </div>
            <div className="sharing" onClick={()=>{show()}}>
              <i className="fas fa-share-alt fa-2xl" style={{ color: "rgb(3 127 102)" }}></i>
              <p>Share</p>
            </div>
          </div>
        </div>
      </div>
      <Share/>
      <div className="comments">
        <p style={{ float: 'right', marginTop: '-1em', fontWeight: '700', fontSize: 'larger', cursor: 'pointer' }} onClick={() => { clicked() }}>X</p>
        <h4 style={{ textAlign: 'center' }}>Comments</h4>
        {
          post[0]?.comments?.map(
            (obj, idx) => (
              <div key={idx}>
                <div className="cmimg"><i className="fa-solid fa-user fa-xl" style={{ color: "#0460b8" }}></i></div>
                <div style={{ display: 'inline-block', height: '5em' }}>
                  <p style={{ color: 'white', marginLeft: '.5em' }}>{obj.body}</p>
                </div>
              </div>
            )
          )
        }
      </div>
    </>
  )
}

export default Post;