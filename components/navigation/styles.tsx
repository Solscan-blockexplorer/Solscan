import styled from "styled-components";

export const NavigationWrapper = styled.header`
  background-color: #444;
  padding: 1rem 2.5rem 1rem 1rem;
  padding: 1rem;
  display: grid;
  height: 84px;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 1rem;

  .logo {
    width: 4rem;
    height: 100%;

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
    align-items: center;
    

    .active {
      color: #fff;
      text-decoration: none;
      font-weight: 700;
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
