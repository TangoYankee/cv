import { Header } from "@/app/components/header";
import { Main } from "@/app/Main";
import { Footer } from "@/app/components/footer";
import styles from "./page.module.css";

export default function App() {
  return (
    <div className={styles.appContainer}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
