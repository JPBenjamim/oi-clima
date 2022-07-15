import { useState } from 'react'

function App() {
  const [city, setCity] = useState('')
  const [weatherForecast, setweatherForecast] = useState(null);

  const handleChange = e => {
    setCity(e.target.value)
  }

  const handleSearch = () => {
    fetch(
      `https://api.weatherapi.com/v1/current.json?key=5ee6f96a413445b889911145220402&q=${city}&lang=pt`
    )
      .then(response => {
        if (response.status === 200) {
          return response.json()
        }
      })
      .then(data => {
        
        setweatherForecast(data);
      })

      
      
  }

  return (
    <div>
      
      <nav className="navbar navbar-expand-md navbar-dark  bg-dark mb-4" >
      <div className='container d-flex justify-content-center'>
        
        <a className="navbar-brand text-whithe" href="#top">
          {' '}
          Qual clima? 
           
        </a>
        
        </div>
      </nav>
     

      <main className="container">
        <div className="bg-light p-4">
          <h1>Verifique a previsão do tempo da sua cidade!</h1>
          <p className="lead">Digite sua cidade e pesquise!</p>

          <div className="row mb-4">
            <div className="col-md-6">
              <input
                onChange={handleChange}
                className="form-control"
                value={city}
              />
            </div>
          </div>

          <button
            onClick={handleSearch}
            className="btn btn-primary btn-lg mb-4"
          >
            Pesquisar
          </button>
          {weatherForecast ? (
            <div>
              <div className="mt-4" d-flex align-itens-center>
                <div>
                  <img src={weatherForecast.current.condition.icon} />
                </div>

                <div>
                  <h3>
                    Hoje o dia está {weatherForecast.current.condition.text}
                  </h3>
                  <p className="lead">
                    Temp: {weatherForecast.current.temp_c}º <br /> Humidade {weatherForecast.current.humidity}%
                  </p>
                 
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </main>
    </div>
  )
}

export default App
