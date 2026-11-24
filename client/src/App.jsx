import { useState } from 'react'
import './styles/home.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { imoveis } from './data/imoveis'
import ImovelCard from './components/ImovelCard'
import { Search } from 'lucide-react'
import BackgroundSlider from './BackgroundSlider'

function App() {
  const [busca, setBusca] = useState('')
  const filtradas = imoveis.filter((g) =>
    g.nome.toLowerCase().includes(busca.toLowerCase()) || g.cidade.toLowerCase().includes(busca.toLowerCase())

  )
  return (
    <div>
      <Header />
      <main className="container" >

        <BackgroundSlider>
          <main style={{textAlign: 'center', paddingTop: '40vh'}} >
            <h1>Meu site</h1>
            <p>O fundo desliza</p>
          </main>
        </BackgroundSlider>
        <div className='search'>

        <input type="text" placeholder='Buscar por bairro ou cidade' value={busca} onChange={(e) => setBusca(e.target.value)} aria-label="Buscar imóveis" />
               <Search className='search-icon' size={20} aria-hidden="true" />
        </div>
        
          {filtradas.length === 0 ? (
            <p className='erro'>Nenhum imóvel encontrado</p>
          ) : (
            <div className='grid'>
              {filtradas.map((g) => (
                <ImovelCard key={g.id} nome={g.nome} tipo={g.tipo} cidade={g.cidade} preco={g.preco} />

              ))}

            </div>

          )}

      </main>
      <Footer />

    </div>
  )
}

export default App