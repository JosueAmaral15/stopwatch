import "./style.css";

export default function ChronoList({seconds}){
    //const data = seconds.map((second, index) => <tr><td key={index}>{index}</td><td key={index}>{second}</td></tr>)
    return (
        <table className="chronoList">
            <thead>
                <tr>
                    <td>Count</td>
                    <td>Seconds</td>
                </tr>
            </thead>
            <tbody>
                {seconds.map((second, index) => <tr key={index}><td>{index+1}</td><td>{second}</td></tr>)}
            </tbody>
        </table>
    )
}