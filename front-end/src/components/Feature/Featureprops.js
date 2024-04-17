import React from 'react';

function Featureprops(props) {
    const { src, title, desc } = props
    return (
        <section className="features">
            <h2 className="sr-only">Features</h2>
            <div className="feature-item" key={id} >
                <img src={src} alt="Chat Icon" className="feature-icon" />
                <h3 className="feature-item-title">{title}</h3>
                <p>{desc}</p>
            </div>
        </section>
    )
}

export default Featureprops;




{/* 
import FeatureDatas from "../../datas/FeatureData.json";

<section className="features">
    <h2 className="sr-only">Features</h2>
    {featureDatas.map((FeatureData, index) => {
        return (
            <Featureprops
                key={FeatureData.id}
                src={FeatureData.src}
                title={FeatureData.title}
                desc={FeatureData.desc}
            />
        )
    })}
</section>
*/}