import { ComponentPropsWithoutRef, FC, ReactNode } from "react";
import styled from "styled-components";

interface LayoutProps {
    children: ReactNode;
}
const Wrapper = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 16px;
    min-height: 100vh;
    @media (max-width: 768px) {
        padding: 8px;
        max-width: 100%;
    }
`
const Layout:FC<ComponentPropsWithoutRef<'div'> & LayoutProps> = ({children}) => (
    <Wrapper>
        {children}
    </Wrapper>
);
export default Layout;