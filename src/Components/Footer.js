import React, {Component} from 'react';
import '../../public/css/style.css' 

    
class Footer extends Component{
    render(){
        return (
            <footer className="footer"> 
                <div className="footerContainter">         
                    <div className="column">
                        <h1>footer info 1</h1>
                        <h3>foot info</h3>
                        <h3>foot info</h3>
                        <h3>foot info</h3>
                    </div>
                    <div className="column">
                        <h1>footer info 1</h1>
                    </div>
                    <div className="column">
                        <h1>footer info 1</h1>
                    </div>
                </div>  
            </footer>
        )
    }
}

export default Footer;
