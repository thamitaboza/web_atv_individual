const Temperatura = () => {
    const celsiusParaFahrenheit = (celsius) => (9*celsius + 160)/5
    const fahrenheitParaCelsius = (fahrenheit) => (fahrenheit -32)*(5/9)
    const kelvin = (kelvin) => {
        const celsius = kelvin - 273
        const fahrenheit = (kelvin - 273)*9/5 + 32
        return {celsius, fahrenheit}
    }
    const k = 45
    const {celsius, fahrenheit} = kelvin(k)
    return (
        <>
            <h1>A Temperatura {k} kelvin em Celsius é:{celsius}</h1>
            <h1>A Temperatura {k} kelvin em Fahrenheir é:{fahrenheit} </h1>
        </>
    )
}
export default Temperatura
        
    
