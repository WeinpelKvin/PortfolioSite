import React, {Component} from 'react';
import '../../public/css/style.css' 
import Card from './Card.js';    
 
class Projects_Component extends Component{
    render(){
        const Projects = [
            {
                name: "Orbit App",
                image: "Images/Orbit_Home.jpg",
                link: "OrbitApp",
                type: "Mobile App",
                shortDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum placerat felis, sed iaculis velit fermentum sed. Mauris posuere, nisi a dignissim pharetra, nibh risus congue lectus, vel. ",
                longDescription: "Orbit is an app designed to show you what events, activities, or just general gatherings are currently happening around you. It does this by making a white circle around the current area where you are in the city and shows you possible events you can race to."
            },
            {
                name: "Saltwater Fish Tank",
                image: "Images/FishTank_Home.jpg",
                link: "SaltWaterFishTank.html",
                type: "Web Application",
                shortDescription: "From this application the user can see the problems in their tank through sensors placed around; temperature, salinity, pH, Alkalinity, etc. They also have a schedule function to keep track of all their tank routine. ",                
                longDescription: "From this application the user can see the problems in their tank through sensors placed around; temperature, salinity, pH, Alkalinity, etc. They also have a schedule function to keep track of all their tank routine. "
            },
            {
                name: "Pocket Full Of Sunshine",
                image: "Images/Sunshine_Home.jpg",
                link: "PocketFullOfSunshine.html",
                type: "Movie Branding",
                shortDescription: "The plot of the short film is about an innocent ex-convict named Marcus who struggles with his life outside of prison, especially finding a job and staying away from the people from his past.",
                longDescription: "The plot of the short film is about an innocent ex-convict named Marcus who struggles with his life outside of prison, especially finding a job and staying away from the people from his past."
            },
            {
                name: "Synesthesia Zine",
                image: "Images/Synesthesia_Home.jpg",
                link: "Synesthesia.html",
                type: "Zine Booklet",
                shortDescription: "A 30 page booklet designed to teach people about the history and modern day perception about Synesthesia, a disease that is not well known due to the nature of it.",
                longDescription: "A 30 page booklet designed to teach people about the history and modern day perception about Synesthesia, a disease that is not well known due to the nature of it. "
            },
            {
                name: "Renzo Piano Exhibit",
                image: "Images/RenzoPiano_Home.jpg",
                link: "RenzoPiano.html",
                type: "Exhibit Branding",
                shortDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum placerat felis, sed iaculis velit fermentum sed. Mauris posuere, nisi a dignissim pharetra, nibh risus congue lectus, vel. ",
                longDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum placerat felis, sed iaculis velit fermentum sed. Mauris posuere, nisi a dignissim pharetra, nibh risus congue lectus, vel. "
            },
            {
                name: "Randsom Note Generator",
                image: "Images/Generator_Home.jpg",
                link: "RansomNote.html",
                type: "Creative Coding",
                shortDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum placerat felis, sed iaculis velit fermentum sed. Mauris posuere, nisi a dignissim pharetra, nibh risus congue lectus, vel. ",
                longDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum placerat felis, sed iaculis velit fermentum sed. Mauris posuere, nisi a dignissim pharetra, nibh risus congue lectus, vel. "
            },
            {
                name: "Earth 2.0 Movie",
                image: "Images/Earth_Home.jpg",
                link: "Earth.html",
                type: "Movie Branding",
                shortDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum placerat felis, sed iaculis velit fermentum sed. Mauris posuere, nisi a dignissim pharetra, nibh risus congue lectus, vel. ",
                longDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum placerat felis, sed iaculis velit fermentum sed. Mauris posuere, nisi a dignissim pharetra, nibh risus congue lectus, vel. ",
            },
            {
                name: "Udelco",
                image: "Images/Udelco_Home.jpg",
                link: "Udelco.html",
                type: "Commercial Website",
                shortDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum placerat felis, sed iaculis velit fermentum sed. Mauris posuere, nisi a dignissim pharetra, nibh risus congue lectus, vel. ",
                longDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum placerat felis, sed iaculis velit fermentum sed. Mauris posuere, nisi a dignissim pharetra, nibh risus congue lectus, vel. ",
            },
            {
                name: "Motherboard",
                image: "Images/Motherboard_Home.jpg",
                link: "Motherboard.html",
                type: "Magazine",
                shortDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum placerat felis, sed iaculis velit fermentum sed. Mauris posuere, nisi a dignissim pharetra, nibh risus congue lectus, vel. ",
                longDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum placerat felis, sed iaculis velit fermentum sed. Mauris posuere, nisi a dignissim pharetra, nibh risus congue lectus, vel. ",
            }];
            
        const pieces = [];
        for (let i = 0; i < Projects.length; i++) {
            pieces.push(<Card key={i} cardInfo={Projects[i]}/>)
        }
        return (
            <div class="main wrapper">
                {pieces}
            </div>
        )
    }
}

export default Projects_Component;