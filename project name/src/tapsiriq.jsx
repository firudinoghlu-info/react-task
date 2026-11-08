import {useState, useEffect} from 'react'

function Tapsiriq() {
  const [data,setData] = useState(0);
  const [loading, setLoading] = useState(true);
  const [count,setcount] = useState(0);
 useEffect(() => {
  fetch(("https://official-joke-api.appspot.com/random_joke"))
  .then((response => response.json())
  .then(data => {
data.setup()
  });
  loading = true ? "API-den zarafat gelmelidir" : "Zarafat yoldadir gozleyin";


  
 }, []);
  
 
  return (
    <div className='container' max-width ="420px">
      <h2>Random Joke</h2>
      <div className='joke-card'>
        <p className='setup'>
          Zarafatin suali
        </p>
        <p className='punchline'>
          Zarafatin cavabi
        </p>
      </div>
      <button style={{backgroundColor:"#2563eb", color:"#fff",padding:"12px 20px",borderRadius:"8px",cursor:"pointer"}} onClick={handleclick}>Basqa zarafat getir</button>
    </div>
  )
}

export default tapsiriq
