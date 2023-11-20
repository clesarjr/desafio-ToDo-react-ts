import styles from './App.module.css'
import { Header } from './Components/Header/Header'
import { List } from './Components/List/List'

function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <List />
      </div>
    </>
  )
}

export default App
