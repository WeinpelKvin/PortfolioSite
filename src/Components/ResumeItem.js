import React from 'react';
import '../../public/css/styleContent.css'; 

const ResumeItem = (props) => {
    const work = props.workplace;

    const ListItem = (props) => {
        return(<li>{props.element}</li>)
    }

    const List = (props) => {
        const items = [];
        for (let i=0; i < props.responsibilities.length; i++) items.push(<ListItem element={props.responsibilities[i]} key={i}/>)
        return(
            <ul className="responsibilities">{items}</ul>
        )
    }

    return (
        <div className="main">
            <div className="titleWrapper">
                <h1 className="title">{work.name}</h1>
                <div><h5 className="year">{work.year}</h5><h5 className="date">{work.date}</h5></div>
            </div>
            <h3 className="subtitle">{work.role}</h3>
            <p>{work.description}</p>
            <List responsibilities={work.responsibilities} />
            <hr></hr>
      </div>
    )
}

export default ResumeItem;