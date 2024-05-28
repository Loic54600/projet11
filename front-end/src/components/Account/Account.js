import React from 'react';

function Account({ name, solde, available }) {
  return (
    <section className="account">
      <div className="account-content-wrapper">
        <h3 className="account-title">{name}</h3>
        <p className="account-amount">${solde}</p>
        <p className="account-amount-description">{available}</p>
      </div>
      <div className="account-content-wrapper cta">
        <button className="transaction-button">View transactions</button>
      </div>
    </section>
  );
}

export default Account;