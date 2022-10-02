import styled from "styled-components";
import Meta from "../Meta";
import Navigation from "../navigation";

interface IProps {
  children: React.ReactNode;
}

const LayoutWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  .main {
    max-width: 97vw;
    width: 100%;
    margin: 0 auto;
    padding: 1rem 2.5rem 1rem 1rem;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }
`;

const Layout: React.FC<IProps> = ({ children }) => {
  return (
    <LayoutWrapper>
      <Meta />
      <Navigation />
      <main className="main">{children}</main>
    </LayoutWrapper>
  );
};

export default Layout;
