import { useState,useRef,useEffect } from 'react';

// import image1 from "./assets/dice/1.png";
// import image2 from "./assets/dice/2.png";
// import image3 from "./assets/dice/3.png";
// import image4 from "./assets/dice/4.jpg";
export const App = () => {


  const [number1, setnumber1] = useState()
  const [number2, setnumber2] = useState()
  const [result, setresult] = useState()
      
  






    

    const handleRandom =() =>{

     
     
    let  number1random = Math.floor(Math.random()*(4-1+1)+1);
     let number2random = Math.floor(Math.random()*(4-1+1)+1);
     console.log({number1random});
     console.log({number2random});
            
          setnumber1(number1random)
          setnumber2(number2random)
          let resultrandom=number1random*number2random
          console.log({resultrandom});
          setresult(resultrandom);
          console.log({result});
    }
  
        

  
     



  return (
    <>
    

                  <h1 className='title'>Times game</h1>
                 
        <div className='square'>
    <div className='div-principal'>


<div className='cuadricula'>
  <div className="one" ></div>
  <div className="one"></div>
  <div className="one"></div>
  <div className="one"></div>
  <div className="one"></div>
  <div className="one"></div>
  <div className="one"></div>
  <div className="one"></div>
  <div className="one"></div>
  <div className="one"></div>
  <div className="one"></div>
  <div className="one"></div>
  <div className="one"></div>
  <div className="one"></div>
  <div className="one"></div>
  <div className="one"></div>
  <div className="one"></div>
  <div className="one"></div>
  <div className="one"></div>
  <div className="one"></div>
  <div className="one"></div>
  <div className="one"></div>
  <div className="one"></div>
  <div className="one"></div>
  <div className="one"></div>
  <div className="one"></div>
  <div className="one"></div>
  <div className="one"></div>
  <div className="one"></div>
  <div className="one"></div>
  <div className="one"></div>
  <div className="one"></div>
  <div className="one"></div>
  <div className="one"></div>
  <div className="one"></div>
  <div className="one"></div>
  <div className="one"></div>
  <div className="one"></div>
  <div className="one"></div>
  <div className="one"></div>
  <div className="one"></div>
  <div className="one"></div>
  <div className="one"></div>
  <div className="one"></div>
  <div className="one"></div>
  <div className="one"></div>
  <div className="one"></div>
  <div className="one"></div>
  <div className="one"></div>
  <div className="one"></div>
  <div className="one"></div>
  <div className="one"></div>
  <div className="one"></div>
  <div className="one"></div>
  <div className="one"></div>
  <div className="one"></div>
  <div className="one"></div>
  <div className="one"></div>
  <div className="one"></div>
  <div className="one"></div>
  <div className="one"></div>
  <div className="one"></div>
  <div className="one"></div>
  <div className="one"></div>
  <div className="one"></div>
  <div className="one"></div>
  <div className="one"></div>
  <div className="one"></div>
  <div className="one"></div>
  <div className="one"></div>
  <div className="one"></div>
  <div className="one"></div>
  <div className="one"></div>
  <div className="one"></div>
  <div className="one"></div>
  <div className="one"></div>
  <div className="one"></div>
  <div className="one"></div>
  <div className="one"></div>
  <div className="one"></div>
  <div className="one"></div>
  <div className="one"></div>
  <div className="one"></div>
  <div className="one"></div>
  <div className="one"></div>
  <div className="one"></div>
  <div className="one"></div>
  <div className="one"></div>
  <div className="one"></div>
  <div className="one"></div>
  <div className="one"></div>
  <div className="one"></div>
  <div className="one"></div>
  <div className="one"></div>
  <div className="one"></div>
  <div className="one"></div>
  <div className="one"></div>
  <div className="one"></div>
  <div className="one"></div>
  <div className="one"></div>




</div>



    </div>
    
    
    </div>
    <div className='sidedice'>
        
        <div className='dice'>
           <button onClick={handleRandom}>Try</button> 

          <div className='dices'>
            <div className='dimage'>
              <img  className='image' src={`dice/${number1 &&number1}.png`} alt="" /> 
            </div>
            <div className='dimage'>
              <img  className='image'  src={`../public/dice/${number2 &&number2}.png`} alt="" />
            </div>
            <div className='timescage'>
              <p className='resultcage'>
                 Result: {result}

              </p>
            </div>
          </div>
        </div>
        </div>
    <div className='sidescore'>
        
        <div className="inputs">
        <h1 className='score'>Score</h1>

        <p className='p'>Player 1</p>
          <input type="text" className='input' />
          <p className='p'>Player 2</p>
          <input type="text" className='input' />
        </div>
        </div>
   
    
    </>
  )
}
