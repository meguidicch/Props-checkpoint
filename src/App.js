import Profiljs from "./profil/profil"


function App() {
  
  var fullname = "asma meguidich"
  var Bio = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  var Profession = "infographiste"
  
  const handleAlert=(a)=>{
    alert(`Hello ${a}`)
  }

  return(
    <div>
        <Profiljs fullname={fullname} Bio={Bio} Profession={Profession} handleAlert={handleAlert}>
        <img src='/developpeur-web.jpg' alt='web' width="300px"/>
        </Profiljs>
        
    </div>
  )
}


export default App
