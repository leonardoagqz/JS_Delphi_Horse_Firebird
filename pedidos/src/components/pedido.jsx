/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
function Pedido(props){
    const dt_pedido = new Date(props.dt_pedido)
    return <tr>
        <td>{props.id_pedido}</td>
        <td>{props.cliente}</td>
        
        {/** Formatrando data*/}
        {/** <td>{props.dt_pedido}</td>*/}
        <td>{new Intl.DateTimeFormat('pt-BR',{dataStyle: 'short'}).format(dt_pedido)}</td> 

        <td>{props.status_descricao}</td>

        {/** Formatrando valor*/}
        <td>{new Intl.NumberFormat('pt-BR',{style: 'currency', currency: 'BRL'}).format(props.vl_total)}</td> 

        <div class="dropdown">
            <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-bstoggle="dropdown" aria-expanded="false">
                Opções
            </button>
            <ul class="dropdown-menu">
                <il><a class="dropdown-item" href="#">Editar Pedido</a></il>
                <il><a class="dropdown-item" href="#">Excluir Pedido</a></il>
                <il><a class="dropdown-divider"/></il>
                <il><a class="dropdown-item" href="#">Finalizar Pedido</a></il>
                <il><a class="dropdown-item" href="#">Reabrir Pedido</a></il>                
            </ul>
        </div>
    </tr>
}

export default Pedido