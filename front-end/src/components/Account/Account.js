import React from 'react';
import AccountDatas from "../../datas/AccountData.json";


const Account = () => {
  return (

    <main class="main bg-dark">
    <div class="header">
      <h1>Welcome back<br />Tony Jarvis!</h1>
      <button class="edit-button">Edit Name</button>
    </div>
    <h2 class="sr-only">Accounts</h2>
    
    {AccountDatas.map((AccountData) => {
        return (
        <section class="account">
      <div class="account-content-wrapper">
        <h3 class="account-title">{AccountData.title}</h3>
        <p class="account-amount">{AccountData.amount}</p>
        <p class="account-amount-description">{AccountData.description}</p>
      </div>
      <div class="account-content-wrapper cta">
        <button class="transaction-button">View transactions</button>
      </div>
      </section>
          );
        })}
  </main> 
  );
};

export default Account;