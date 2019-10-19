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
        function popUpModal(){
            alert("image clicked");
        }
        const project = this.props.location.params;
        return (    
            <div className="Contentwrapper">
                <aside className="main">
                    <img 
                        src={project.image} 
                        className="contentImages" 
                        alt=""
                        onClick={popUpModal}
                    />
                    <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>  
                </aside>
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
