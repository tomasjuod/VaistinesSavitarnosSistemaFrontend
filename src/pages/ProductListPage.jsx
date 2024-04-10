import { useEffect, useState } from "react";
import usePrivateApi from "../hooks/usePrivateApi.js";
import useAuth from "../hooks/useAuth.js";
import Header from "../components/header.jsx";

export default function ProductListPage(req){
    const { auth} = useAuth();
    const [errorMessage, setErrorMessage] = useState('');
    const PrivateApi = usePrivateApi();

    return (
        <>
            <Header/>
            <h3>Welcome to the product list page !</h3>
        </>
    );
}