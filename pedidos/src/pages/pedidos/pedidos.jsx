import Navbar from "../../components/navbar.jsx";
import { Link } from "react-router-dom";
import "./pedidos.css"
import Pedido from "../../components/pedido.jsx";

function Pedidos(){

    const pedidos = [
        {
            "id_pedido": 1,
            "cliente": "Autoposto Brasil",
            "dt_pedido": "2023-05-19T20:20:54.209Z",
            "status": "F",
            "status_descricao": "Finalizado",
            "vl_total": 180
        },
        {
            "id_pedido": 2,
            "cliente": "Linux Brasil",
            "dt_pedido": "2023-05-19T20:20:54.209Z",
            "status": "F",
            "status_descricao": "Finalizado",
            "vl_total": 1400
        }
    ]

    return  <>
         <Navbar/>

        <div className="container-fluid mt-page form-pedido">
            <div className="ms-4 d-flex justify-content-between">
                <div>
                    <h2 className="d-inline">Pedidos</h2>
                    <Link className="btn btn-success ms-5 mb-2" to="/pedidos/novo">Adicionar Pedido</Link>
                </div> 
               
                <div>
                    <div className="form-control d-inline me-3">
                        <select name="status" id="status">
                            <option value="">Status</option>
                            <option value="A">Aberto</option>
                            <option value="F">Finalizado</option>

                        </select>
                    </div>    
                  <button className="btn btn-primary"><i className="fas fa-plus"></i>Filtrar</button>
                </div>   
            </div> 
        </div> 

        <div className="ms-4 d-flex justify-content-between">
        </div>

        <div className="mt-5 ms-4 me-4">
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Pedido</th>
                        <th scope="col">Cliente</th>
                        <th scope="col">Dt. Venda</th>
                        <th scope="col">Status</th>
                        <th scope="col">Valor Total</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        pedidos.map((pedido) => {
                            return <Pedido Key={pedido.id_pedido} 
                                id_pedido={pedido.id_pedido}
                                cliente={pedido.cliente}
                                dt_pedido={pedido.dt_pedido}
                                status={pedido.status}
                                status_descricao={pedido.status_descricao}
                                vl_total={pedido.vl_total}
                            />
                        })
                    }
                </tbody>
            </table>
        </div>

    </> 
}

export default Pedidos;