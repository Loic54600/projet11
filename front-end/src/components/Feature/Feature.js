import React from 'react';
import FeatureDatas from "../../datas/FeatureData";


const Feature = () => {
  return (
    <section className="features">
      <h2 className="sr-only">Features</h2>
      {FeatureDatas.map((FeatureData) => {
        return (
        <div className="feature-item" key={FeatureData.id}>
          <div>
            <img src={FeatureData.src} alt={FeatureData.descriptionImage}  className="feature-icon" />
            <h3 className="feature-item-title">{FeatureData.title}</h3>
            <p>{FeatureData.description}</p>
          </div>
        </div>
        );
      })}
    </section>
  )
}

export default Feature;