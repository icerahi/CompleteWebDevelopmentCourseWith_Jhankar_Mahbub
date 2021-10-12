import React from 'react'

const Expert = ({expert}) => {
    const {name,img,expertize}=expert
    return (
        <div className="col-lg-4 col-sm-6 col-12">
        <div className="card">
          <img src={img} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text text-danger"> {expertize}</p>
          </div>
        </div>
      </div>
    )
}

export default Expert
