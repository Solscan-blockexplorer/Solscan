import styled from "styled-components";
import Link from "next/link";

export const NavigationWrapper = styled.header`
  background-color: rgba(000, 000, 000, 0.8);
  /* height: 2rem; */
  padding: 1rem 2.5rem 1rem 1rem;
  display: grid;
  height: 100%;
  grid-template-columns: 1fr 1fr;
  align-items: center;

  .logo {
    width: 65px;
    height: 65px;
    cursor: pointer;
    a img {
      width: 100%;
      height: 100%;
    }
  }

  .header-right {
    display: flex;
    align-items: center;
    gap: 2rem;
    width: 100%;
  }

  .links {
    display: flex;
    gap: 2rem;

    .active {
      color: #fff;
      text-decoration: none;
    }
    
    .non-active {
      text-decoration: none;
      color: #E0E0E0;
      padding: 0 5px;
      width: fit-content;
      display: block;
    }
  }
`;

// export const NavLink = styled(Link)`
// text-decoration: none;
// color: black;
// `
