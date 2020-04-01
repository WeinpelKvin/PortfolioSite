import React from 'react';
import Image from './Image';
import H1 from './H1';
import Pg from './Pg';

const RenderContent = (project) => {
    const contentList = [];

    // Figures out what type of content is going to be rendered
    let imageKey = 0;
    for (let i = 0; i < project.content.length; i++) {
        const len = project.content[i].length;
        let sub = project.content[i].substring(len-4, len);
        if(sub === ".png" || sub === ".jpg"){
            if (project.content[i].width() > project.content[i].height()) {
                project.content[i].addClass("Horizontal");
            } else {
                project.content[i].addClass("Vertical");
            }
            contentList.push(<Image id="myImg" key={i} imageKey={imageKey} name={project.content[i]}/>)
            imageKey++;
        }else if(sub === "  h1"){
            contentList.push(<H1 key={i} name={project.content[i]}/>)
        }else{
            contentList.push(<Pg key={i} name={project.content[i]}/>)
        }
    }
    return(
        <div className="main">
            <div className="projectHeader">
                <h1>{project.name}</h1>
            </div>
            {contentList}
        </div>
    )
}

export default RenderContent;
