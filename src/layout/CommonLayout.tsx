import { Helmet } from "react-helmet-async";

import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Main from "./Main/Main";

export default function CommonLayout() {
    return (
        <>
            <Helmet>
                <title>Brain Training - Sharpen Your Mind</title>
                <meta name="keywords" content="brain training, mental fitness, intellect, games, abilities, play, free" />
                <meta property="og:url" content="https://www.brainTraining.com" />
                <meta name="description" content="Welcome to Brain Training, your destination for enhancing cognitive abilities. 
                Explore a collection of intellectual games designed to boost logical thinking and provide an enjoyable pastime. 
                Test your intellect and skills with our selection of free games." />
                <meta property="og:locale" content="en_US" />
                <meta property="og:title" content="Brain Training" />
            </Helmet>


            <Header />
            <Main />
            <Footer />
        </>
    );
}