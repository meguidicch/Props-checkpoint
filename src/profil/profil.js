import PropTypes from 'prop-types';

const Profiljs=({fullname,Bio,Profession,children,handleAlert})=>{
    return(
        <div>
            <h2>Workshop Props</h2>
            <h2 style={{color:"blue",textfont:"arial"}}>fullname: {fullname}</h2>
            <h2 style={{color:"green",}}>Bio : {Bio}</h2>
            <h2 style={{color:"red"}}>Profession :{Profession}</h2>
            {
                children
            }
            
           <button onClick={()=>handleAlert(fullname)}>alert</button>
        </div>

        
    )
}

Profiljs.defaultProps ={
    fullname : 'Zaineb'
}

Profiljs.propTypes = {
   
    fullname: PropTypes.string,
}
    export default Profiljs