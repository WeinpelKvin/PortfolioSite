import React, {Component, useState} from 'react';
import '../../public/css/styleContent.css'; 
import '../../public/css/style.css'; 
import '../../public/css/Card.css';
import {Link} from "react-router-dom";
import arrow from "../../public/Images/Icons/Arrow.svg"
import Projects from '../Projects.json';   

class ContentComponent extends Component{
    constructor(props) {
        super(props);
        this.state = {};
    }
    render(){  

        // Determines the current, next, or previous project in array
        const project = Projects[this.props.location.params.key];
        const [image, setImage] = userState("");
        let nextProject;
        let previousProject;

        if((project.key+1) <= Projects.length-1) {
            nextProject= (project.key+1); 
        }
        else {
            nextProject = 0; 
        }

        if((project.key-1) >= 0) {
            previousProject = (project.key-1); 
        }
        else {
            previousProject = (Projects.length-1);
        }

        function ModalPopUp(key) {
            document.getElementById("imageModal").style.display = "block";
        }

        function CloseModal() {
            document.getElementById("imageModal").style.display = "none";
        }

        const RenderContent=()=>{
            const contentList = [];
            const Image=(props)=>{
                return(<img src={props.name} className="contentImages" alt={props.name} onClick={()=>{ModalPopUp(props.imageKey)}} />)
            }
            const Pg = (props) =>{
                return(<p>{props.name}</p>)
            }
            const H1 = (props) =>{
                return(<h1>(props.name)</h1>)
            }

            // Figures out what type of content is going to be rendered
            let imageKey = 0;
            for (let i = 0; i < project.content.length; i++) {
                const len = project.content[i].length;
                let sub = project.content[i].substring(len-4, len);
                if(sub === ".png" || sub === ".jpg"){
                    contentList.push(<Image id="myImg" key={i} imageKey={imageKey} name={project.content[i]}/>)
                    imageKey++;
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
            <div id="imageModal" className="modal">
                <div className="modal-content">
                    <button onClick={()=>{CloseModal()}}>Close</button>
                    <img className="modalImage" src="Images/Orbit/OrbitContent_1.png" alt="Orbit" />
                </div>
            </div>
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
                <p>hi</p>
            </article>
            <img className="arrow" src={arrow} alt="" onClick={()=>{window.scrollTo({top: 0, left:0, behavior: 'smooth'})}}></img>
        </div>
        )
    }
}
export default ContentComponent;