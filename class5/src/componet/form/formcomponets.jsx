import React, {useState} from 'react'
import "./formcomponets.css"

const formcomponets = (props) => {

    console.log(props,"from");

    const [name, setName] = useState('');
    const [password, setPassword]=useState('');
    const [error, setError]=useState(false);


    const handleSubmit= (e)=>{
        e.preventDefault();
        
        if (name === '' && password === ''){
            setError(true);
        }else{
            setError(false);
            props.setUser([name])
        }

    }

    return (
    <div>
        <h1>LOGIN FORMULARIO</h1>
        <form onSubmit={handleSubmit} className= "form" >
            {/* <input onChange={handleChange} value={name} type='text'/> */}
            <input onChange={e=> setName(e.target.value)} value={name} type='text'/>
            {error && <p className='textError'>El campo nombre es requerido</p>}
            <input onChange={e=> setPassword (e.target.value)} value={password} type='password'/>
            {error && <p className='textError'>El campo nombre es requerido</p>}

            <button type='submit'>ingresa</button>
    </form>
  </div>
  )
}

export default formcomponets