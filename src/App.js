import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from "./components/Card"
import data from "./data"

function App() {
  const names = data.map( item => {
    return( 
      <Card
      key={item.id}
      item={item}
  />
  )
  
  })  
  return (
     
     <div>
            <Navbar />
            <Hero/>
            <section className="cards-list">
                {names}
            </section>
        </div>
    
  );
}

export default App;
