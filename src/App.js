import './App.css';
import styles from './styles';
import { Navbar, Footer } from './components';
import Home from './pages/Home';
import Projects from './pages/Projects';

function App() {
  return (
    <div className="w-full overflow-hidden">
        <div className={`bg-defaultteal dark:bg-defaultsky ${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
                <Navbar />
            </div>
        </div>

        <div className={`bg-defaultteal dark:bg-defaultsky ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
                <Home />
            </div>
        </div>

        <div className={`bg-defaultteal dark:bg-defaultsky ${styles.flexStart}`}>
            <div className={`${styles.boxWidth}`}>
                {/* <Projects /> */}
            </div>
        </div>

        <div className={`bg-defaultsky ${styles.flexStart}`}>
            <div className={`${styles.boxWidth}`}>
                <Footer />
            </div>
        </div>
    </div>
  );
}



export default App;
