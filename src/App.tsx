import Forecast from './components/Forecast'
import Search from './components/Search'
import {useState} from 'react'

import useForecast from './hooks/useForecast'
//http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}
const App = (): JSX.Element => {
  const { forecast, options, term, onOptionSelect, onSubmit, onInputChange } =
    useForecast()
  return (
    <main className="flex justify-center items-center bg-gradient-to-br from-sky-400 via-rose-400 to-lime-400 h-[100vh] w-full">
      {forecast ? (
        <Forecast data={forecast} />
      ) : (
        <Search
          term={term}
          options={options}
          onInputChange={onInputChange}
          onOptionSelect={onOptionSelect}
          onSubmit={onSubmit}
        />
      )}
    </main>
  )
}

export default App
