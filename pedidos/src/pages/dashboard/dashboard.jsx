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

    const dados_vendas = [
        ["Mês","Vendas"],
        ["1", 520000],
        ["2", 4900099],
        ["3", 420000],
        ["4", 2010000],
        ["5",214000],
        ["6", 3910000],
        ["7", 321000],
        ["8", 3210000],
    ];

    const dados_produtos = [
        ["Produto", "Vendas"],
        ["Teclado", 5200],
        ["Monitor", 4900],
        ["HD", 4200],
        ["Fone", 3210],
        ["Webcam", 2140]
      ];

      const dados_cidades = [
        ["Cidade", "Vendas"],
        ["São Paulo", 5200],
        ["Rio de Janeiro", 4900],
        ["Campinas", 4200],
        ["Curitiba", 3210],
        ["Bauru", 2140]
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
                            legenda={true}
                      />
                </div>

                <div className="col-md-6 p-5">
                     <Grafico titulo="Venda anual" 
                        chartType="Line"
                        dados={dados_vendas}
                        legenda={true}
                     />
                </div>

                <div className="col-md-6 p-5">
                     <Grafico titulo="Venda por produto" 
                        chartType="PieChart"
                        dados={dados_produtos}
                        legenda={true}
                     />
                </div>

                <div className="col-md-6 p-5">
                     <Grafico titulo="Venda por cidade" 
                        chartType="ScatterChart"
                        dados={dados_cidades}
                        legenda={true}
                     />
                </div>

               

            </div>           
        </div>
        
    </> 
    
}

export default Dashboard;