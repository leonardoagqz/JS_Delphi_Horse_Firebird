import { Chart } from "react-google-charts"

function Grafico(props){

    const options = {
        legend: props.legenda ? { } : {position: "none"},
        is3D: true
    }

    return <>
        <h3 className="text-secondary">{props.titulo}</h3>
        <Chart chartType={props.chartType}
            data={props.dados}
            width="100%"
            height="280px"
            options={options}
            legendToggle
        />
    </> 
}

export default Grafico;