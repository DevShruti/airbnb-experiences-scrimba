import hero from '../images/photo-grid.png';
import '../App.css';

export default function Navbar(){
    return(
        <section className ="hero">
        <img src={hero} className="hero--photo" alt="hero" />
        <h1 className="hero--header">Online Experiences</h1>
        <p className="hero--text">Join unique interactive activities led by 
            one-of-a-kind hosts—all without leaving home.</p>
        </section>
    )
}