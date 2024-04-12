import React from 'react';
import FeatureDatas from "../../datas/FeatureData.json";


const Feature = () => {
  return (
    <section class="features">
      <h2 class="sr-only">Features</h2>
      {FeatureDatas.map((FeatureData) => {
        return (
        <div className="feature-item">
          <div>
            <img src={FeatureData.image} alt={FeatureData.descriptionImage} key={FeatureData.id} className="feature-item-icon" />
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