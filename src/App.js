import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from "./components/Card"
import data from "./data"

function App() {
  const names = data.map( item => {
    return( 
   <Card 
   img={item.Coverimg}
   rating={item.stats.rating}
   reviewCount={item.stats.reviewCount}
   location={item.location}
   title={item.title}
   price={item.price}
    
  /> 
  )
  
  })  
  return (
     <>
     <Navbar/>
     <Hero/>
     {names}
     </>
  );
}

export default App;
