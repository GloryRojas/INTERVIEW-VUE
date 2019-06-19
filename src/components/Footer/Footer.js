import styled from "vue-styled-components";

export const TextFooter = styled.p`
  font-size: 15px;
  display: block;
  text-align: left;
  padding: 0 0 20px 70px;
  background-color: rgba(34, 34, 34, 1);

  @media (max-width: 1024px) {
    padding: 5px;
    text-align: center;
    font-size: 10px;
  }
`;
