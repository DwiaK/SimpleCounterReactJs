import styled from 'styled-components';

export const Text = styled.h1`
    color: #c9c9c9;
    font-weight: 5;
    font-size: 25px;
    font-family: sans-serif;
    text-align: center;
`;

export const Button = styled.button`
    margin: 0.5rem;
    padding: 0.5rem;
    background-color: #464646;
    border: none;
    color: #fff;
    width: 200px;
    height: 40px;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, .45), 0 4px 6px -2px rgba(0, 0, 0, .1);
`;

export const Card = styled.div`
    margin: 200px;
    padding: 0.3px;
    background-color: #282828;
    margin-bottom: 2rem;
    border-radius: .2rem;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, .45), 0 4px 6px -2px rgba(0, 0, 0, .1);
`;

export const CenterCard = styled.div`
    // Center
    display: flex;
    justify-content: center;
    align-items: center;

    // Style
    margin: 100px;
    padding: 0.3px;
    //background-color: #282828;
    //border-radius: .2rem;
    //box-shadow: 0 10px 15px -3px rgba(0, 0, 0, .45), 0 4px 6px -2px rgba(0, 0, 0, .1);
`;