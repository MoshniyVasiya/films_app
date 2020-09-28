import React, {useEffect, useState} from 'react';
import TransitionedBlock from "../HelperComponents/TransitionedBlock/TransitionedBlock";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import './Layout.sass';

function Layout(props) {

    return (
        <TransitionedBlock classes="layout">
            <Header />
            {props.children}
            <Footer />
        </TransitionedBlock>
    );
}

export default Layout;
