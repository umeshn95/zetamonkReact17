import styled from 'styled-components';


export const Course_card_main = styled.div`
  top: 0px;
  position: relative; 
  background-color: rgba(255,255,255,0.06);
  border: 1px solid rgba(255,255,255,0.1);
  backdrop-filter: blur(10px);
`;
export const Course_card_sub = styled.div`
  display: grid;
  grid-template-rows: 0.2fr 0.8fr;
  padding: 70px;
  @media screen and (max-width: 768px) {
    width: 100%;
    grid-template-columns: 1fr;
  grid-template-rows: 0.1fr 0.8fr;

    padding: 10px;
  }
`;
export const Course_card_class_sub1 = styled.div`
  justify-self: center;
  align-self: center;
  padding: 17px;
  border-radius: 12px;
  cursor: pointer;
  background: ${({ ChangeColor1 }) => (ChangeColor1 ? "white" : "#3DB2FF")};
  color: ${({ ChangeColor1 }) => (ChangeColor1 ? "black" : "white")};
  font-weight: 600;

  text-shadow: ${({ ChangeColor1 }) =>
    ChangeColor1 ? "black" : "0 8px 16px rgb(47, 4, 4)"};
`;
export const Course_card_class_sub2 = styled.div`
  justify-self: center;
  align-self: center;
  padding: 17px;
  border-radius: 12px;
  cursor: pointer;
  background: ${({ ChangeColor2 }) => (ChangeColor2 ? "white" : "#3DB2FF")};
  color: ${({ ChangeColor2 }) => (ChangeColor2 ? "black" : "white")};
  font-weight: 600;

  text-shadow: ${({ ChangeColor2 }) =>
    ChangeColor2 ? "black" : "0 8px 16px rgb(47, 4, 4)"};
`;
export const Course_card_class_sub3 = styled.div`
  justify-self: center;
  align-self: center;
  padding: 17px;
  border-radius: 12px;
  cursor: pointer;

  background: ${({ ChangeColor3 }) => (ChangeColor3 ? "white" : "#3DB2FF")};
  color: ${({ ChangeColor3 }) => (ChangeColor3 ? "black" : "white")};
  font-weight: 600;

  text-shadow: ${({ ChangeColor3 }) =>
    ChangeColor3 ? "black" : "0 8px 16px rgb(47, 4, 4)"};
`;
export const Course_card_class = styled.div`
  padding: 30px 360px 20px 360px;
  @media screen and (max-width: 768px) {
    padding: 0px;
    width: 100%;
  }
`;
export const Course_card_class_sub = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 0.6fr);
  background:#3DB2FF;
  height: 70px;
  border-radius: 12px;
  opacity: 0.8;
  @media screen and (max-width: 768px) {
      height:90px;
  }
`;
export const Course_card_cards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 20px;
  padding: 0px 100px 0px 100px;
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    min-width: 100%!important;
    row-gap: 10px;
    padding: 0;
  }
`;