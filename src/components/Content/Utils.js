import styled from "vue-styled-components";

export const TextPrimary = styled.h2`
  padding-top: 20%;
`;

export const TextSecundary = styled.h4`
  padding: 10px 0 24.6% 0;
  text-transform: uppercase;
`;

const containerProps = { url: String };

export const Container = styled("div", containerProps)`
  background-image: url(${props => props.url});
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100vh;
`;

export const containerIn = styled.div`
  background-color: rgba(0, 0, 0, 0.6);
  height: 100vh;
  width: 100%;
`;
