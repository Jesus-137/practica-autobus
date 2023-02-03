import { useRef } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../componens/atoms/Header";
import Title from "../componens/atoms/Title";
import Input from "../componens/organims/Input";
//http://34.225.239.102/api/usuario para metodos get
//http://34.225.239.102/api/registras/usuario para metodos post
//http://34.225.239.102/api/eliminar/usuario para metodos delete
//http://34.225.239.102/api/iniciar para el login

function Sign_up() {
    const navigate = useNavigate()

    const form = useRef()
    const endpoint = 'http://34.225.239.102/api/registrar/usuario'
    const [state, setState]=useState("")

    const handlerClick = (e)=>{
        e.preventDefault();
        const newForm = new FormData(form.current)
        const options = {
            method: 'POST',
            headers : {
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                nombre: newForm.get('nombre'),
                usuario: newForm.get('usuario'),
                correo: newForm.get('correo'),
                contrasenia: newForm.get('contrasenia')
            })
        }
        const valors=JSON.parse(options.body)

        if (valors.nombre==''){
            setState('El campo nombre no puede estar vacio')
        }else if (valors.usuario==''){
            setState('El campo usuario no puede estar vacio')
        }else if (valors.correo==''){
            setState('El campo correo no puede estar vacio')
        }else if (valors.contrasenia==''){
            setState('El campo contrasenia no puede estar vacio')
        }else{
            fetch(endpoint, options) 
            .then(response => response.json())
            .then(data => {
                if (data.status!=false){
                    navigate('/')
                }else{
                    alert(data.message)
                }
            })
        }
    }

    return (<>
        <Header/>
        <center>
            <Title titulo="Crear cuenta"/>
            <form ref={form}>
                <Input styleI="input" styleL="label" name="nombre" id="name" data="Nombre" type="text"/>
                <Input styleI="input" styleL="label" name="usuario" id="usuario" data="Usuario" type="text"/>
                <Input styleI="input" styleL="label" name="correo" id="correo" data="Correo electronico" type="text"/>
                <Input styleI="input" styleL="label" name="contrasenia" id="contrasenia" data="Contraseña" type="password"/>
                <center><button type="button" className="btn" onClick={handlerClick}>Registrarse</button>
                <label>{state}</label></center>
            </form>
        </center>
    </>);
}

export default Sign_up;