import Banner from './Banner';
import logo from '../assets/logo.png'
// import Cart from './Cart';
import ShoppingList from "./ShoppingList";

function App() {
  const title = "La maison jungle";

  return (<div>
    <Banner>
      <img src={logo} alt={title} className='lmj-logo' />
      <h1 className='lmj-title'>{title}</h1>
    </Banner>
    {/* <Cart /> */}
    <ShoppingList />
  </div>);
}

export default App;
