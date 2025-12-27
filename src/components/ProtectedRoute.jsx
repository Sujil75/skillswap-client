import {Navigate, Outlet} from 'react-router-dom'

const ProtectedRoute = () => {
    const token = localStorage.getItem('token')
    
    return token !== null ? <Outlet /> : <Navigate to='/login' replace={true}/>
}

export default ProtectedRoute