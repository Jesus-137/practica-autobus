import Option from "./Option";

function ComboBox({name, values, style, data}) {
    return (
        <div>
            <label>{data}</label>
            <center>
                <select className={style} name={name}>
                    {values.map(value=><Option value={value}/>)}
                </select>
            </center>
        </div>
    );
}

export default ComboBox;