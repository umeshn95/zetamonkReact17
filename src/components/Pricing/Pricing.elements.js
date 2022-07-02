import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const PricingSection = styled.div`
  font-family: 'Arvo', serif;

  background:white;
  padding: 80px 0 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  top:20px;
  position:relative;
`;

export const PricingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;

  @media screen and (max-width: 960px) {  
    margin: 0 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const PricingHeading = styled.h1`
  color: black;
  font-size: 48px;
  margin-bottom: 24px;
  opacity:0.5;
`;

export const PricingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`;

export const PricingCard = styled(Link)`

  background-color:white;   
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.5);
  width: 340px;
  border:1px solid gray;
  height: 380px;
  text-decoration: none;
  border-radius: 10px;

  &:nth-child(2) {
    margin: 24px;
  }

  &:hover {
    transform: scale(1.06);
    transition: all 0.3s ease-out;
    color: #1c2237;
  }

  @media screen and (max-width: 960px) {
    width: 90%;
    margin:10px;
    &:hover {
      transform: none;
    }
  }
`;

export const PricingCardInfo = styled.div`
  display: flex;
  flex-direction: column;
  height: 500px;
  padding: 24px;
  align-items: center;
  color: black;
`;

export const PricingCardIcon = styled.div`
  margin: 24px 0;
  opacity:0.5;
`;

export const PricingCardPlan = styled.h3`
  margin-bottom: 5px;
  font-size: 34px;
  // max-width:200px;
  text-align:center;
  opacity:0.5;

`;

export const PricingCardCost = styled.h4`
  font-size: 40px;
`;

export const PricingCardLength = styled.p`
  font-size: 17px;
  margin:8px 24px 0 0;
  text-align:center;
  

  
`;

export const PricingCardFeatures = styled.ul`
  margin: 16px 0 32px;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #a9b3c1;
`;

export const PricingCardFeature = styled.li`
  margin-bottom: 10px;
`;


export const Img = styled.img`
  padding-right: 0;
  border: 0;
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
  max-height: 500px;
  
`;

export const PricingCar = styled(Link)`
`