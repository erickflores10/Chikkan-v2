import React, { Component } from "react";
import { Fragment } from "react/cjs/react.production.min";
import Footer from '../components/Footer';
import LayoutPost from "../components/Layout/LayoutPost";


class Posts extends Component {
    render() {
        return(
            <Fragment>
                <LayoutPost />
                <Footer />
            </Fragment>
        )
    }
}

export default Posts;