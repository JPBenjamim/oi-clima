import { useState } from 'react'


function App() {
  const [city, setCity] = useState('')

  const handleChange = () => {

  }
  

  return (
    <div>
      <nav className='navbar navbar-expand-md navbar-dark  bg-dark mb-4'>
        <a className='navbar-brand text-whithe' href='#top'> Oi clima</a>
      </nav>

      <main className='container'>
        <div className='bg-light -5'>
          <h1>
            Verifique a previsão do tempo da sua cidade!
          </h1>
          <p className='lead'>Digite sua cidade e pesquise!</p>

          <div className='row mb-4'>
            <div className='col-md-6'>
              <input 
              onChange={handleChange}
              className='form-control' value={city}/>
            </div>
          </div>

          <button className='btn btn-primary btn-lg mb-4'>
            Pesquisar
          </button>
        </div>
      </main>
    </div>
  )
}

export default App
