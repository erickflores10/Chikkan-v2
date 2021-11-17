import React, { Component } from "react";
import Separator from '../Separator';
import Principal from "../Principal";
import PostText from "../PostText";
import MinCard from '../MinCard';
import PostAside from "../PostAside";
import '../../scss/Layout.css';

class LayoutPost extends Component {
    render() {
        return(
            <section className="layout-post">
                <div className="layout-post__container">
                    <div className="layout-post__item p-1">
                        <Separator sectionName="Titulo general de noticia" />
                    </div>
                    <div className="layout-post__item p-2">
                        <Principal />
                    </div>
                    <div className="layout-post__item p-3">
                        <PostText aTitle="Subtitulo"/>
                    </div>
                    <div className="layout-post__item p-4">
                        <PostText aTitle="Otro subtitulo" />
                    </div>
                    <section className="main-container__featured p-5">
                        <div className="f-title">
                            <Separator sectionName="Destacados"/>
                        </div>
                        <div className="featured__item">
                            <MinCard />
                        </div>
                        <div className="featured__item">
                            <MinCard />
                        </div>
                        <div className="featured__item">
                            <MinCard />
                        </div>
                        <div className="featured__item">
                            <MinCard />
                        </div>
                </section>
                    <div className="layout-post__item">
                        <PostAside />
                    </div>
                </div>
            </section>
        )
    }
}


export default LayoutPost;