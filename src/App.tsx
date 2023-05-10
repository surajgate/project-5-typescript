import React, {useState} from 'react';
import items from './data';
import Categories from './component/Categories';
import Menu from './component/Menu';
const allCategories = ['all', new Set(items.map((item)=> item.category))]

interface ItemsType {
  id: number;
  title: string;
  category: string;
  price: number;
  img: string;
  desc: string;
};

function App() {

  const [menuItems, setMenuItems] = useState<ItemsType[]>(items);
  const [categories, setCategories] = useState<string[]>([]);

  const filterItems = (category : string) => {
    if(category == 'all'){
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category===category);
    setMenuItems(newItems);
  }
  return (
    <main>
      <section className="menu-section">
        <div className="title">
          <h2>Our Menu</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} filterItems={filterItems}/>
        <Menu items = {menuItems}/>
      </section>
    </main>
  );
}

export default App;
