import { useState } from 'react'
import './index.scss'

function App() {
  return (
<html>

<header>
<div className='logo'>
 <img src='https://raw.githubusercontent.com/MickaelZ7/blog/main/assent/logo.png' alt='logo' />
</div>
<div><nav>
  <li><a href='#'>Home</a></li>
  <li><a href='#'>Sobre</a></li>
  <li><a href='#'>Curriculo</a></li>
  </nav></div>
</header>

   <main>
      <div className="container">
        <div className='slides-carrocel'>
          <input type="radio" name="radio" id="orkut" />

          <div className="orkut">
            <img src="https://raw.githubusercontent.com/MickaelZ7/blog/main/assent/carrocel/Logo_ORKUT.svg.png" alt="logo-orkut" />
          </div>
        </div>

      </div>
   </main>

   <footer>
      <div className="icon">
      <a href="https://www.instagram.com/mic_ofcial"><img src="https://raw.githubusercontent.com/MickaelZ7/blog/main/assent/icones/instagram.png" alt="instagram" /></a>
      <a href="https://github.com/MickaelZ7"><img src="https://raw.githubusercontent.com/MickaelZ7/blog/main/assent/icones/github.png" alt="github" /></a>
      <a href="https://www.linkedin.com/in/mickael-cypriano-da-rocha-a9b1801a1"><img src="https://raw.githubusercontent.com/MickaelZ7/blog/main/assent/icones/linkedin.png" alt="linkedin" /></a>
      </div>
      <div className="text">
        <p className='cont'>Contatos</p>
      </div>
   </footer>

   </html>

  )
}

export default App
