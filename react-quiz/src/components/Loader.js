import styled, { css, keyframes } from "styled-components";

const spin = keyframes`
 to {
    transform: translateX(-50%) translateY(50%) rotate(0.5turn) ;
 }
`;

export default function LoaderComponent() {
  let style = `
    position: absolute;
    left: 50%;
    top: 50%;

    transform: translateX(-50%) translateY(50%);
    aspect-ratio: 1;
    border-radius: 50%;
  `;
  return <div>Loading...</div>;
}
