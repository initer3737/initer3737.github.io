import React from 'react'
    type props={
        header:string,
        body:string,
        footer:string,
    }
function Card(props:props) {
    const {header,body,footer}=props;
  return (
    <div className="card">
        <div className="card-header">{header}</div>
        <div className="card-body">{body}</div>
        <div className="card-footer">{footer}</div>
    </div>
  )
}

export default Card