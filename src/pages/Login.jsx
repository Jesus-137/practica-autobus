import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useRef } from "react";
import Header from "../componens/atoms/Header";
import Title from "../componens/atoms/Title";
import Input from "../componens/organims/Input";
import "../assets/styles/Login.css";

function Login() {
    const form= useRef();
    const navigate=useNavigate();
    const [state, setState]=useState([])
    const chandlerClick=(e)=>{
        e.preventDefault();
        const newForm= new FormData (form.current)
        if (newForm.get('usuario')==''){
            setState('El campo nobre de usuario no puede estar vacio')
        }else if(newForm.get('contrasenia')==''){
            setState('El campo contraseña no puede estar vacio')
        }else{
            fetch('http://34.225.239.102/api/usuario')
            .then(response=>response.json())
            .then(data=>{
                const usuarios=data.usuario
                let i=0;
                let encontrado=false
                while(!encontrado&&i<usuarios.length){
                    if (usuarios[i].usuario==newForm.get('usuario')){
                        if(usuarios[i].contrasenia==newForm.get('contrasenia')){
                            encontrado=true
                            navigate('/bus')
                        }
                    }
                    i++;
                }
                if (!encontrado){
                    setState('Usuario no encontrado verifique los campos')
                }
            })
        }
    }
    return (
    <div className="contenedor_princibal">
        <Header/>
        <center>
            <Title titulo="Iniciar Sesion"/>
            <form ref={form}>
                <Input styleI="input" styleL="label" type="text" name="usuario" id="txtName" data="Nombre de usuario"/>
                <Input styleI="input" styleL="label" type="password" name="contrasenia" id="txtPassword" data="Contraseña"/>
                <center><input type="button" value="Iniciar sesion" className="btn" onClick={chandlerClick}/></center>
                <p>No tienes cuenta, <a href="/crear">regístrate</a></p>
                <label>{state}</label>
            </form>
        </center>
    </div> 
    );
}

export default Login;