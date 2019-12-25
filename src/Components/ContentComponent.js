import React, {Component} from 'react';
import '../../public/css/styleContent.css'; 
import '../../public/css/style.css'; 
import '../../public/css/Card.css';
import {Link} from "react-router-dom";
import Projects from '../Projects.json';   

class ContentComponent extends Component{
    constructor(props) {
        super(props);
        this.state = {};
    }
    render(){  

        // Determines the current, next, or previous project in array
        const project = Projects[this.props.location.params.key];

        let nextProject;
        let previousProject;
        console.log("Key " + project.key);

        if((project.key+1) <= Projects.length-1) {
            nextProject= (project.key+1); 
        }
        else {
            nextProject = 0; 
        }
        console.log("Next " + nextProject);

        if((project.key-1) >= 0) {
            previousProject = (project.key-1); 
        }
        else {
            previousProject = (Projects.length-1);
        }
        console.log("Previous " + previousProject);


        function popUpModal(){
            alert("image clicked");
        }

        const RenderContent=()=>{
            const contentList = [];
            const Image = (props) =>{
                return(
                    <img 
                        src={props.name} 
                        className="contentImages" 
                        alt=""
                        onClick={popUpModal}
                    />
                )
            }
            const Pg = (props) =>{
                return(
                    <p>{props.name}</p>
                )
            }
            const H1 = (props) =>{
                return(
                    <h1>(props.name)</h1>
                )
            }

            // Figures out what type of content is going to be rendered
            for (let i = 0; i < project.content.length; i++) {
                const len = project.content[i].length;
                let sub = project.content[i].substring(len-3, len);
                if(sub === "png" || sub === "jpg"){
                    contentList.push(<Image key={i} name={project.content[i]}/>)
                }else if(sub === " h1"){
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

        return (    
            <div className="Contentwrapper">
                <RenderContent/>
                <article className="aside aside-1">
                    <div className="infoPanel">
                        <Link to={{
                            pathname: "/contentPage",
                            params: {   
                                key: previousProject,
                                name: Projects[previousProject].name,
                                image: Projects[previousProject].image,
                                type: Projects[previousProject].type,
                                shortDescription: Projects[previousProject].shortDescription,
                                longDescription: Projects[previousProject].longDescription,
                                content: Projects[previousProject].content
                            }
                        }} className="button infoButton">prev</Link>      
                        <Link to={{
                            pathname: "/contentPage",
                            params: {   
                                key: nextProject,
                                name: Projects[nextProject].name,
                                image: Projects[nextProject].image,
                                type: Projects[nextProject].type,
                                shortDescription: Projects[nextProject].shortDescription,
                                longDescription: Projects[nextProject].longDescription,
                                content: Projects[nextProject].content
                            }
                        }} className="button infoButton">next</Link> 
                        <p className="infoDescription">{project.longDescription}</p>  
                    </div>
                </article>
            </div>
        )
    }
}
export default ContentComponent;