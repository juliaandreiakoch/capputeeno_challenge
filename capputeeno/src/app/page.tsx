"use client"

import { FilterBar } from "@/components/filterBar";
import { ProductList } from "@/components/productsList";
import styled from "styled-components";

const PageWrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 12px 24px;
  min-height: 100vh;
  background-color: var(--bg-main);

  @media(min-width: ${props => props.theme.desktopBreakpoint}) {
    padding: 34px 160px;
  }
`

export default function Home() {
  return (
      <PageWrapper>
        <FilterBar/>
        <ProductList/>
      </PageWrapper>
  );
}
