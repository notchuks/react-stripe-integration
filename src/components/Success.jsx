import React from "react";
import styled from "styled-components";

const Container = styled.div`
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    font-size: 20px;
`;


const Img = styled.img`
    height: 50px;
    width: 50px;
    border-radius: 50%;
    margin-bottom: 10px;
`;

const Button = styled.button`
    padding: 10px;
    border: none;
    border-radius: 10px;
    background-color: teal;
    color: white;
    font-weight: 500;
    font-size: 30px;
    margin-bottom: 15px;
`;

const Text = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
`;


const Success = () => {
  return (
    <Container>
        <Content>
            <Img src="https://avatars.githubusercontent.com/u/1486366?v=4"/>
            <Button>Successfull</Button>
            <Text>Your order is processing. Thanks for shopping with us!</Text>
        </Content>
        
    </Container>
  );
};

export default Success;
