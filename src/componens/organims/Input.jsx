function Input({styleI, styleL, type, name, id, data}) {
    return ( <>
        <label htmlFor={id} className={styleL}>{data}</label>
        <center><input className={styleI} type={type} name={name} id={id} /></center>
    </>);
}

export default Input;