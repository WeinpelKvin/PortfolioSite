import React, {Component} from 'react';
import '../../public/css/styleContent.css'; 
import '../../public/css/style.css'; 
import '../../public/css/Card.css';
import {Link} from "react-router-dom";

class ContentComponent extends Component{
    constructor(props) {
        super(props);
        this.state = {};
    }
    render(){  
        const project = this.props.location.params;

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

            for (let i = 0; i < project.content.length; i++) {
                const len = project.content[i].length;
                let sub = project.content[i].substring(len-3, len);
                if(sub === "png" || sub === "jpg"){
                    contentList.push(<Image key={i} name={project.content[i]}/>)
                }else{
                    console.log("paragraph " +project.content[i])
                    contentList.push(<Pg key={i} name={project.content[i]}/>)
                }
               // contentRow.push(<Card key={i} cardInfo={Projects[i]}/>)
            }
            return(
                <aside className="main">
                    <img 
                        src={project.image} 
                        className="contentImages" 
                        alt=""
                        onClick={popUpModal}
                    />
                    <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>  
                    <img 
                        src={project.content[0]} 
                        className="contentImages" 
                        alt=""
                        onClick={popUpModal}
                    />
                    {contentList}
                </aside>
            )
        }

        return (    
            <div className="Contentwrapper">
                <RenderContent/>
                <article className="aside aside-1">
                    <div className="InfoPanel">
                        <h1>{project.name}</h1>
                        <p className="infoDescription">{project.longDescription}</p>  
                        <Link to="/portfolio" className="button">back</Link>
                    </div>
                </article>
            </div>
        )
    }
}

export default ContentComponent;
