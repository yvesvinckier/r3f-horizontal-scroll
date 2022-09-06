import React from "react";
import styled from "styled-components";

const StyledHeaderLink = styled.a`
  position: fixed;
  z-index: 19;
  top: 2.9vh;
  left: 4vw;
  width: 2.2vw;
  svg {
    fill: #fff;
  }
`;

const StyledMenuContainer = styled.div`
  display: flex;
  position: fixed;
  z-index: 10;
  top: 3.5vh;
  right: 4vw;
  cursor: pointer;
  .menu__text {
    margin-right: 2rem;
    color: #fff;
    font-weight: 400;
    font-size: 1rem;
    line-height: 2.4rem;
    font-family: "Inter", sans-serif;
  }
`;

const Header = () => {
  return (
    <>
      <StyledHeaderLink href="/#">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 440 440"
          className="SVGref"
        >
          <path
            d="M440,211.9l-0.6-10.3l-208,15.9l200.9-56.3l-2.9-9.8L230.6,215l182.5-101.2l-5.1-8.9L229.3,212.6L383.6,72l-7-7.5
	L227.4,210.7L345.2,38.2l-8.5-5.6L225.2,209.2l74.9-195l-9.6-3.5l-67.8,197.6l28-207.1L240.5,0L220,208L199.5,0l-10.2,1.2l28,207.1
	L149.5,10.6l-9.6,3.5l74.9,195L103.3,32.6l-8.5,5.6l117.8,172.5L63.4,64.6l-7,7.5l154.3,140.6L32,104.9l-5.1,8.9L209.4,215
	L10.6,151.4l-2.9,9.8l200.9,56.3l-208-15.9L0,211.9l208.5,8.4L2.4,252.8l1.8,10.1l204.7-40l-193,79.3l4,9.4L210,225.3L40.4,347.1
	l6.1,8.2l165.1-127.8L74.6,385.1l7.8,6.6l131.2-162.5l-97,185l9.2,4.6L216,230.4l-51.8,202.4l10,2.4l44.4-204.1L214.9,440h10.2
	l-3.8-208.9l44.4,204.2l10-2.4L224,230.5l90.2,188.4l9.2-4.6l-97-185l131.2,162.5l7.8-6.6L228.4,227.5l165.1,127.8l6.1-8.2
	L230,225.3l190,86.2l4.1-9.4l-193-79.3l204.7,40l1.8-10.1l-206.1-32.6L440,211.9z"
          />
        </svg>
      </StyledHeaderLink>
      <StyledMenuContainer>
        <div className="menu__text">Stories</div>
        <div className="menu__text">Contact</div>
      </StyledMenuContainer>
    </>
  );
};

export default Header;
