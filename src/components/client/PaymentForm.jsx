"use client";

import { useState } from "react";

export const PaymentForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [amount, setAmount] = useState(0);

  const onSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("/api/payment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, amount }),
      });

      if (response.ok) {
        console.log("Transaction successfully saved.");
        setName("");
        setEmail("");
        setAmount("");
      } else {
        console.log("Transaction failed to save.");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form className="" onSubmit={onSubmit}>
      <div className="mb-6">
        <label
          className="block text-gray-700 font-bold mb-2"
          htmlFor="payee-name"
        >
          Payee Name
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="payee-name"
          type="text"
          required
          placeholder="Enter payee's name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </div>
      <div className="mb-6">
        <label
          className="block text-gray-700 font-bold mb-2"
          htmlFor="payee-email"
        >
          Payee Email
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="payee-email"
          type="email"
          required
          placeholder="Enter payee's email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>
      <div className="mb-6">
        <label
          className="block text-gray-700 font-bold mb-2"
          htmlFor="payment-amount"
        >
          Payment Amount
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="payment-amount"
          type="number"
          required
          placeholder="Enter payment amount"
          value={amount}
          onChange={(event) => setAmount(event.target.value)}
        />
      </div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
};
