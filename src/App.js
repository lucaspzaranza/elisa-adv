import elisa from './imgs/elisa.jpg'
import direitoCanonico from './imgs/direito-canonico.jpg'
import './App.css';

import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={elisa} className="App-logo" alt="elisa" />
        <p>
          Sou Elisa, advogada e teóloga de formação. 
          Atualmente sou mestranda em Direito Canônico pelo Instituto Superior de Direito 
          Canônico (ISDC) em Londrina/PR e atuo no Tribunal Eclesiástico de Jundiaí/SP.
        </p>
        <p>
          Nos meus conteúdos, compartilho meu conhecimento direcionado a matrimônio, família, vocação e tudo o que envolve a 
          doutrina católica sobre o tema, tornando assuntos densos e complexos mais compreensíveis, além de colaborar para 
          ajudar casais ou jovens leigos que estão precisando de alguma orientação. 
        </p>
      </header>

      <section>
        <img src={direitoCanonico} alt=''/>
        <p>Você sabe o que é Direito Canônico na Igreja Católica? 🤔✨</p>
        <p>O Direito Canônico é como o "manual de instruções" da Igreja Católica Apostólica Romana 📜🙏 – ele organiza a vida e as atividades da Igreja! Desde a estrutura, ensino, e celebrações até as normas de disciplina e procedimentos, o Direito Canônico está em tudo.</p>
        <p>É um conjunto de normas que une tradição e atualidade, aplicando justiça com misericórdia e guiando a vida eclesiástica sem perder os princípios fundamentais da fé. </p>
      </section>

      <section className='links-section'>
        <h2>Links para Contato</h2>
        <div className='links-div'>
          <a href="https://api.whatsapp.com/send?phone=5511993501713" target="_blank" rel="noopener noreferrer">
            <WhatsAppIcon fontSize='large'/>
            <label>Whatsapp</label>
          </a>

          <a href="https://www.instagram.com/elisaferraz.canon/" target="_blank" rel="noopener noreferrer">
            <InstagramIcon fontSize='large'/>
            <label>Instagram</label>
          </a>

          <a href="https://www.facebook.com/profile.php?id=61568838502385" target="_blank" rel="noopener noreferrer">
            <FacebookIcon fontSize='large'/>
            <label>Facebook</label>
          </a>
        </div>
      </section>

      <footer>
        <p>© Copyright Elisa.</p>
      </footer>
    </div>
  );
}

export default App;
