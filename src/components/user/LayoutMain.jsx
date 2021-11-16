import React from "react";
import '../../scss/Layout.css';

import Separator from '../../components/Separator';
import Principal from '../../components/Principal';
import MinCard from '../../components/MinCard';
import Card from '../../components/Card';

class LayoutMain extends React.Component {
    render() {
        return(
            <main className="main">
                <section className="main-container__recent">
                    <div className="r-title">
                        <Separator sectionName="Recientes"/>
                    </div>
                    <div className="recent__item r-princ">
                        <Principal />
                    </div>
                    <div className="recent__item r-card_1">
                        <MinCard />
                    </div>
                    <div className="recent__item r-card_2">
                        <MinCard />
                    </div>
                </section>
                <section className="main-container__category">
                    <div className="c-title">
                        <Separator sectionName="Categorias"/>
                    </div>
                    <div className="category__item">
                        <Card />
                    </div>
                    <div className="category__item">
                        <Card />
                    </div>
                    <div className="category__item">
                        <Card />
                    </div>
                    <div className="category__item">
                        <Card />
                    </div>
                    <div className="category__item">
                        <Card />
                    </div>
                    <div className="category__item">
                        <Card />
                    </div>
                </section>
                <section className="main-container__featured">
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
            </main>
        )
    }
}

export default LayoutMain;