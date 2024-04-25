import styled, { css, keyframes } from "styled-components";

const spin = keyframes`
 to {
    transform: translateX(-50%) translateY(50%) rotate(0.5turn) ;
 }
`;

export default function LoaderComponent({ size, color, width }) {
  let Loader = styled.div`
    width: ${size};
    position: absolute;
    left: 50%;
    top: 50%;

    transform: translateX(-50%) translateY(50%);
    aspect-ratio: 1;
    border-radius: 50%;
    border: ${width} solid;
    border-color: ${color} #0000;
    animation: ${css`
      ${spin} 1s infinite
    `};
  `;
  return <Loader />;
}
