import React from "react";
import "../CSS/Share.css"

const Share = () => {
    const cur = window.location.host + window.location.pathname

    const copy = () => {
        var copyText = document.getElementById("url");
        copyText.select();
        copyText.setSelectionRange(0, 99999);
        navigator.clipboard.writeText(copyText.value);
        let doc = document.querySelector('.cpy');
        doc.innerHTML = 'Copied!';
        setTimeout(() => {
        doc.innerHTML = 'Copy';
        }, 1500);
    }

    const hide = () => {
        var doc = document.querySelector('.share')
        doc.style.visibility = 'hidden';
    }

    return (
        <div className="share">
            <p style={{float:'right',marginTop:'-2.5em',fontWeight:'bold',cursor:'pointer'}} onClick={()=>{hide()}}>X</p>
            <div className='social'>
            <a href={`https://api.whatsapp.com/send?text=https%3A%2F%2F${cur}`} target="_blank">
            <i className="fa-brands fa-whatsapp large-icon" style={{color: '#29a61a'}}></i>
            <p style={{display:'block'}}>Whatsapp</p>
            </a>
            </div>
            <div className='social'>
            <a href={`https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2F${cur}`} target="_blank">
            <i className="fa-brands fa-facebook large-icon" style={{color: '#0865fe'}}></i>
            <p style={{display:'block'}}>Facebook</p>
            </a>
            </div>
            <div className='social'>
            <a href={`https://twitter.com/intent/tweet?text=Check%20out%20this%20cool%20website:%20https://${cur}`} target="_blank">
            <i className="fa-brands fa-x-twitter large-icon" style={{color: 'black'}}></i>
            <p style={{display:'block'}}>Twitter</p>
            </a>
            </div>
            <div className='social'>
            <a href={`https://t.me/share/url?url=https%3A%2F%2F${cur}&amp;`} target="_blank">
            <i className="fa-brands fa-telegram large-icon" style={{color: '#259fdc'}}></i>
            <p style={{display:'block'}}>Telegram</p>
            </a>
            </div>
            <div style={{display:'inline-flex',justifyContent:'center',width:"28em"}}>
            <input id="url" type="text" value={`https://${cur}`} style={{height:'2em',width:'25em',}}></input>
            <button className="cpy" style={{height:'2.4em',width:'5em',marginLeft:'0.2em',cursor:'pointer'}} onClick={()=>{copy()}}>Copy</button>
            </div>
        </div>
    )
}

export default Share;