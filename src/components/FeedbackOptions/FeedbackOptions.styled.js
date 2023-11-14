import styled from 'styled-components';

export const BtnFeedback = styled.button`

    cursor: pointer;
    margin-top: 10px;
    margin-bottom: 10px;
    border-radius: 10px;
    border: none;
    font-size: 20px;
    padding: 20px 40px;
    background-color: orange;

     &:hover {
        background-color: blueviolet;
        color: #fff;
        transform: scale(1.1);
    }
    
`;

export const BtnList = styled.div`
display: flex;
    justify-content: center;
    gap: 10px;
`;