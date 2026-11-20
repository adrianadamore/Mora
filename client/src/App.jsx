import { useState } from 'react'
import './styles/home.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { garages } from './data/garages'
import GarageCard from './components/GarageCard'

function App() {
  const [busca, setBusca] = useState('')
  const filtradas = garages.filter ((g) =>
    g.nome.toLowerCase().includes(busca.toLowerCase()) || g.cidade.toLowerCase().includes(busca.toLowerCase())

)
  return (
  <div>
    <Header />
    <main className="container" > 
    <input type="text" placeholder='Buscar garagens por nome ou cidade' value={busca} onChange={(e) => setBusca(e.target.value)} />
    
  <div>
    {filtradas.length === 0 ? (
      <p className='erro'>Garagem não encontrada</p>
      ) : ( 
      <div className='grid'>
        {filtradas.map((g) => (
      <GarageCard key={g.id} nome={g.nome} tipo={g.tipo} cidade={g.cidade} preco={g.preco} />
    
    ))}

        </div>

      )}
  </div>
  
</main>
    <Footer />

  </div>
  )
}

export default App