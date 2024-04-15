import React from 'react';

import AccountDatas from "../../datas/AccountData.json";


const Account = () => {
  return (

    <main>
      <div className="header">
        <h1>Welcome back<br />Tony Jarvis!</h1>
        <button className="edit-button">Edit Name</button>
      </div>
      <h2 className="sr-only">Accounts</h2>
      {AccountDatas.map((AccountData) => {
        return (
          <section className="account" key={AccountData.id}>
            <div className="account-content-wrapper">
              <h3 className="account-title">{AccountData.title}</h3>
              <p className="account-amount">{AccountData.amount}</p>
              <p className="account-amount-description">{AccountData.description}</p>
            </div>
            <div className="account-content-wrapper cta">
              <button className="transaction-button">View transactions</button>
            </div>
          </section>
        );
      })}
    </main>
  );
};

export default Account;