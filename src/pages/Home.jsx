import React, { Fragment } from "react";
import LayoutMain from "../components/Layout/LayoutMain";
import Footer from '../components/Footer';


class Home extends React.Component {
    render() {
        return(
            <Fragment>
                <LayoutMain />
                <Footer />
            </Fragment>
        )
    }
}

export default Home;