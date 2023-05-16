import Navbar from "../../components/navbar.jsx";

function Dashboard(){
    return <>
        <Navbar/>

        <div className="container-fluid mt-page">
            <div className="ms-4 d-flex justify-content-between">
                <h2>Dashboard</h2>
                <button className="btn btn-primary me-4"><i className="fas fa-plus"></i>Atualizar</button>
            </div> 

            
        </div>
        
    </> 
    
}

export default Dashboard;