import './App.css';
import CommonTab from './components/common/CommonTab';
import Header from './header/Header';
import HeaderData from './header/HeaderData';

const App = () => {
  console.log('app is rendering...');

  return (
    <>
      <Header />
      <main>
        <HeaderData />
        <CommonTab />
      </main>
    </>
  )
}
export default App