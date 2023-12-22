import "./style.css";

export default function Button({behavior=null, children}){
    return <button className="default-button" onClick={()=>{behavior()}} >{children}</button>
}