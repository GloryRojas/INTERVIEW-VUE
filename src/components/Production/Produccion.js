import styled from "vue-styled-components";
import { ContClientes } from "./../Clients/Clientes";

export const h5Gray = styled.h6`
  margin: 10px;
  color: #212121;
  font-weight: 1000;
  font-size: 12px;
`;

export const ContProduccion = styled(ContClientes)`
  background: -webkit-linear-gradient(
    top,
    #f7f7f7 0%,
    #ffffff 19%,
    #ffffff 100%
  );
  padding: 70px 0 100px 0;
`;

export const h1Gray = styled.h1`
  color: #000a12;
  font-size: 50px;
`;

export const parrafo = styled.p`
  display: block;
  color: #000a12;
  font-size: 12px;
  width: 40%;
  margin: 10px 30%;
  font-weight: 800;
  line-height: 20px;
`;

export const BlockOpcion = styled.button`
  width: 15%;
  margin: 30px 2%;
  border: none;
  background-color: #ffffff;
  cursor: pointer;

  @media (max-width: 1024px) {
    width: 40%;
  }
`;

export const opcion = styled.img`
  width: 40%;
  margin-bottom: 15px;
`;
