import { useRef } from "react";
import { useState } from "react";
import Header from "../componens/atoms/Header";
import Title from "../componens/atoms/Title";
import Input from "../componens/organims/Input";
import ComboBox from "../componens/atoms/ComboBox";

function AltaBus() {
    const tipo=['','Turismo', 'Lujo']
    const endpoint='http://34.225.239.102/api/autobus/register'
    const form=useRef();
    const [state,setState]=useState("");
    const headlerClick=(e)=>{
        e.preventDefault();
        const fechaActual=new Date().toLocaleDateString('en-US');
        let licencia=parseInt(Math.random()*1000000000)
        const newForm = new FormData(form.current)
        const options = {
            method: 'POST',
            headers : {
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                clave: newForm.get('clave'),
                placa: newForm.get('placa'),
                numasientos: newForm.get('numero_asientos'),
                fecha: fechaActual,
                tipo: newForm.get('tipo'),
                nombre: newForm.get('nombre'),
                licencia: licencia
            })
        }
        const valors=JSON.parse(options.body)
        alert(newForm.get('tipo'))
        if (valors.clave==''){
            setState('El campo clave no puede estar vacio')
        }else if (valors.placa==''){
            setState('El campo palca no puede estar vacio')
        }else if (valors.numasientos==''){
            setState('El campo numero de asientos no puede estar vacio')
        }else if (valors.tipo==''){
            setState('El campo tipo no puede estar vacio')
        }else if(valors.nombre==''){
            setState('El campo nombre del chofer no puede estar vacio')
        }else if(valors.licencia==''){
            setState('El campo numero de licencia no puede estar vacio')
        }else{
            fetch(endpoint, options) 
            .then(response => response.json())
            .then(data => {
                alert(data.message)
            })
            setState('')
        }
    }
    return ( <>
        <Header/>
        <center>
            <Title titulo="Alta de autobus"/>
            <form ref={form}>
                <Input styleI="input" styleL="label" type="text" name="clave" id="clave" data="Clave autobus"/>
                <Input styleI="input" styleL="label" type="text" name="placa" id="placa" data="Placa autobus"/>
                <Input styleI="input" styleL="label" type="number" name="numero_asientos" id="numero_asientos" data="Numero de asientos"/>
                <center className="center"><ComboBox style="input" values={tipo} name="tipo" data="Tipo"/></center>
                <Input styleI="input" styleL="label" type="text" name="nombre" id="nombre" data="Nombre del chofer"/>
                <center className="center"><button type="button" className="btn" onClick={headlerClick}>Alta de autobus</button></center>
                <label>{state}</label>
            </form>
        </center>
    </> );
}

export default AltaBus;