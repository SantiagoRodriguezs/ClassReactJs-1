import './App.css';

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1>Red Social</h1>
      </header>
      <div className="publicacion">
        <h2>Camilo Sanchez</h2>
        <p>Disfrutando de un hermoso día en la playa!</p>
        <div className="interacciones-publicacion">
          <p>👍 23 likes</p>
          <p>💬 3 comentarios</p>
        </div>
        <div className="comentarios">
          <p className="comentario">Increíble!</p>
          <p className="comentario">Que envidia!</p>
          <p className="comentario">Disfruta mucho!</p>
        </div>
      </div>

      <div className="publicacion">
        <h2>Mariana Pajon</h2>
        <p>Mi primera carrera de 10k! 💪</p>
        <div className="interacciones-publicacion">
          <p>👍 45 likes</p>
          <p>💬 3 comentarios</p>
        </div>
        <div className="comentarios">
          <p className="comentario">Felicidades!</p>
          <p className="comentario">Eres una campeona!</p>
          <p className="comentario">Increíble esfuerzo!</p>
        </div>
      </div>

      <div className="AgPublicacion">
        <span>Agregar publicacion</span>
      </div>
    </div>
  );
}

export default App;
