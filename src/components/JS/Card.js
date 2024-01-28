import React from "react";
import { Link } from "react-router-dom";
import CSSModules from "react-css-modules";
import styles from "../CSS/Card.css"

const Card = (props) => {
    return (
        <div className="card">
            <div className="tit">{props.title}</div>
            <div className="author">~{props.author}</div>
            <div className="shrtdesc">{props.body?.slice(0, 150)}...</div>
            <Link to={`/post/${props.id}`} style={{ textDecoration: 'none', color: 'black', float: "right", marginTop: "-0.6em" }}><button type="submit" style={{ cursor: 'pointer', backgroundColor: 'rgb(197 179 250 / 85%)', border: 'none',color:'#3a1c8a' }}>Read More...</button></Link>
            <div className="crdmot">
                <div>
                    <div className="crdlk">
                        <i className="fa-solid fa-thumbs-up fa-2xl" style={{ color: "rgb(131 85 251 / 99%)" }}></i>
                        <p>{props.likes}</p>
                    </div>
                    <div className="crddlk">
                        <i className="fa-solid fa-thumbs-up fa-2xl fa-rotate-180" style={{ color: "rgb(131 85 251 / 99%)" }}></i>
                        <p>{props.dislikes}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CSSModules(Card, styles, { allowMultiple: true });