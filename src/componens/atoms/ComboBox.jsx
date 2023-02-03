import Option from "./Option";

function ComboBox({name, values, style, data}) {
    return (
        <>
            <label>{data}</label>
            <center>
                <select className={style} name={name}>
                    {values.map(value=><Option value={value}/>)}
                </select>
            </center>
        </>
    );
}

export default ComboBox;