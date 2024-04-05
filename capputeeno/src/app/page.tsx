"use client"

import { FilterBar } from "@/components/filterBar";
import styles from "./page.module.css";
import { ProductList } from "@/components/productsList";

export default function Home() {
  return (
      <main className={styles.main}>
        <FilterBar/>
        <ProductList/>
      </main>
  );
}
