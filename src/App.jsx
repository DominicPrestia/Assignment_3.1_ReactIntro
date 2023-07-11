import profilePicture from './assets/profilePicture.png'
import './App.css'


function App() {

  return (
    <>

      <div className='centerAll'>
        
        <img src={profilePicture} alt="profileImage" />
        <h1>Dominic Prestia</h1>
        <h2>Aspiring Software Engineer</h2>


        <h3>About me</h3>
        <hr />
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam aliquid, veniam nam, maiores sequi labore, ipsa ab iure eaque pariatur porro doloremque consectetur incidunt! Corrupti quia dolorem nemo quam quo.
          Architecto similique optio, dolores quae natus atque hic! Magnam laudantium quasi dicta rem voluptate illum saepe, dolorum nemo, explicabo, at ad dolores est itaque totam? Et vero qui natus incidunt!
          Iste ducimus ab itaque, placeat incidunt dolore. Accusantium quia iusto quibusdam error odio aperiam fugit earum, sed minus cum aspernatur voluptatem ipsam, delectus odit cumque sit nemo deserunt. Voluptatum, ullam.</p>

        <h3>Contact me</h3>
        <hr />
        <p>Email: dominicprestia0@gmail.com | Linkedin: www.linkedin.com/in/dominic-prestia</p>
        
      </div>

    </>)
}

export default App;
