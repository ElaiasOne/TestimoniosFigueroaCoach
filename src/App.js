import './App.css';
import Testimonio from './components/Testimonio.js';

function App() {
  return (
    <div className='App'>
      <div className='contenedor-principal'>
        <h1>Testimonios sobre los alumnos que utilizaron FigueroaCoach:</h1>
        <Testimonio 
          nombre='Juan Fernandez'
          testimonio='Necesitaba un plus, algo que me hiciera reaccionar y empezar a conseguir mis objetivos. Muy recomendable! Profesionales 100%.'
          imagen='juan'/>
        <Testimonio 
        nombre='Sacha Perez'
        testimonio='Si bien es cierto que había estado en forma, llevaba dos años que me había dejado mucho y mi forma física había empeorado bastante por eso decidí contactar con FigueroaCoach.
        FigueroaCoach me cambió totalmente mi forma de pensar consiguió reactivarme y en apenas un mes conseguir unos resultados excepcionales. La clave, la profesionalidad no sólo en el entrenamiento si no, también en el apartado nutricional.
        Me gustó mucho su método y el combinar entrenamiento en el gym y al aire libre.'
        imagen='sacha'/>
        <Testimonio 
        nombre='Gloria Mendez'
        testimonio='Decidí contactar con FigueroaCoach y su equipo y realmente fue una gran decisión. Me han ayudado a mejorar muchísimo. Como se puede comprobar he perdido mucha grasa y he mejorado mucho mi forma física. Me siento mucho mejor. Desde un primer momento me sentí muy cómoda con mi entrenador personal.'
        imagen='gloria'/>
      </div>
    </div>
  );
}

export default App;
