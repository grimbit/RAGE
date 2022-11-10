import styled from "styled-components";
import NoiseImage from "./img/noise.png";
import RageImage from "./img/rage.png";

// background and all
export const FrameStyle = styled.div`
  background-color: #1a1f27;
  background-image: url(${NoiseImage});
  flex-direction: column;
  height: 100%;
`;

export const ConentFrame = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  flex-direction: column;
`;

export const RageLogo = styled.div`
  min-height: 290px;
  min-width: 256px;
  margin: 20px;
  justify-self: left;
  background-repeat: no-repeat;
  background-image: url(${RageImage});
`;
