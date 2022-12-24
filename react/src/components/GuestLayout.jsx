import { Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider.jsx";

export default function GuestLayout() {
    const { token } = useStateContext()
    if (token) {
        return <Navigate to="/users" />
    }


    return (
       <div>
            {/* 1.let child route */}
            <Outlet />
       </div>
    )
}