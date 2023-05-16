import Navbar from "../../components/navbar.jsx";
import Grafico from "../../components/grafico.jsx";

function Dashboard(){

    const dados_clientes = [
        ["Cliente","Vendas"],
        ["Microsoft", 5200],
        ["IBM", 4900],
        ["Apple", 4200],
        ["Facebook", 3210],
        ["Google",2140]
    ];

    return <>
        <Navbar/>

        <div className="container-fluid mt-page">
            <div className="ms-4 d-flex justify-content-between">
                <h2>Dashboard</h2>
                <button className="btn btn-primary me-4"><i className="fas fa-plus"></i>Atualizar</button>
            </div> 

            <div className="row">

                <div className="col-md-6 p-5">
                     <Grafico titulo="Venda por cliente"
                            chartType="Bar"
                            dados={dados_clientes}
                      />
                </div>

                <div className="col-md-6 p-5">
                     <Grafico titulo="Venda anual" 
                        chartType="BarChart"
                        dados={dados_clientes}
                     />
                </div>

                <div className="col-md-6 p-5">
                     <Grafico titulo="Venda por produto" 
                        chartType="PieChart"
                        dados={dados_clientes}
                     />
                </div>

                <div className="col-md-6 p-5">
                     <Grafico titulo="Venda por cidade" 
                        chartType="ScatterChart"
                        dados={dados_clientes}
                     />
                </div>

               

            </div>           
        </div>
        
    </> 
    
}

export default Dashboard;