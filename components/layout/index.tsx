import styled from "styled-components";
import Meta from "../Meta";
import Navigation from "../navigation";

interface IProps {
    children: React.ReactNode
} 

const LayoutWrapper = styled.div`
    max-width: 100vw;
    min-height: 100vh;
    width: 100%;;
    display: flex;
    flex-direction: column;
`

const Layout :React.FC<IProps>  = ({children}) => {
    return (
        <LayoutWrapper> 
             <Meta/>
            <Navigation/>
            <main>{children}</main>
        </LayoutWrapper>
    )
}

export default Layout;