import React, { useEffect } from "react";
import Navbar from "../navbar/navbar";
import Footer from "../footer/footer";
import EmailCheckAlert from "../emailCheckAlert";
import { useDispatch, useSelector } from "react-redux";
import { requestCurrentUser } from "../../../../slice/authSlice";

const PageTemplate = ({ children }) => {

    const dispatch = useDispatch();

    useEffect(() => {
        console.log("getCurrentUser");
        dispatch(requestCurrentUser());
    }, []);

    const currentUser = useSelector((state) => {
        return state.authSlice.currentUser;
    });

    return (
        <div className="page-template">
            <Navbar currentUser={currentUser} />
            <EmailCheckAlert />
            <main>
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default PageTemplate;