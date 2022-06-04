import React from 'react';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const KEY = "pk_test_51L6BMwKt5nOB3xoQuoX7DPnQfmfBRJMETTraBsdZpqK3dx0w1ImRo918FaPRZGKEjfcB7ZMY9Lq8TreliUe7NzQH009NvcQtEz";

const Pay = () => {
    const [ stripeToken, setStripeToken ] = useState(null);
    const navigate = useNavigate();

    const onToken = (token) => {
        // console.log(token);
        setStripeToken(token);
    }

    useEffect(() => {
        const makeRequest = async () => {
            let data = JSON.stringify({
                tokenId: stripeToken.id,
                amount: 2000,
            });

            try {
                const res = await axios.post(
                  "http://localhost:5000/api/checkout/payment",
                  data,
                  {headers:{"Content-Type" : "application/json"}}
                );
                console.log(res.data);
                navigate('/success');
            } catch (err) {
                console.log(err);
            }
        }

        stripeToken && makeRequest();
    }, [stripeToken, navigate]);

    return(
        <div
            style={{
                height: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
        {stripeToken ? (<span>Processing...Please Wait.</span>) : (
            <StripeCheckout
                name="PVANF"
                image="https://avatars.githubusercontent.com/u/1486366?v=4"
                billingAddress
                shippingAddress
                description="Your total is $20"
                amount={2000} // 2000 cents
                token={onToken}
                stripeKey={KEY}
            >
                <button
                    style={{
                        border: "none",
                        width: 120,
                        borderRadius: 5,
                        padding: "20px",
                        backgroundColor: "black",
                        color: "white",
                        fontWeight: "600",
                        cursor: "pointer",
                    }}
                >
                    Pay Now
                </button>
            </StripeCheckout>
        )};
        </div>
    );
};

export default Pay;