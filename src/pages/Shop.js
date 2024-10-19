import { useState, useEffect, useRef} from 'react'
import { Header } from './Shop/Header'
import { FiltersSection } from './Shop/FiltersSection';
import { MainSection } from './Shop/MainSection';
import { Footer } from '../components/Footer';
import { productsData } from "../ProductsData"

export function Shop(props) {
  // const [products, setProducts] = useState(null);
  const [sortedProducts, setSortedProducts] = useState(productsData);
  const categories = ["all", "men's clothing", "jewelery", "electronics", "women's clothing"];
  const [category, setCategory] = useState(categories[props.category]);
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(props.category);
  const [view, setView] = useState("grid");
  const [forceUpdate, setForceUpdate] = useState(false);
  const [filterBy, setFilterBy] = useState("price");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(null);
  const [minRate, setMinRate] = useState(0);
  const [activeStars, setActiveStars] = useState(null);
  const [defaultMaxPrice, setDefaultMaxPrice] = useState(null);
  const [itemsFound, setItemsFound] = useState(0);

  useEffect(() => {
    let defaultMaxPrice = 0;
    productsData.map(product => {
      if(product.price > defaultMaxPrice){
        defaultMaxPrice = product.price;
      }
    })
    setMaxPrice(defaultMaxPrice);
    setDefaultMaxPrice(defaultMaxPrice);
    if(category === "all"){
      setItemsFound(productsData.length)
    }
  }, [])

  /* useEffect(() => {
    function fetchProducts(){
        let defaultMaxPrice = 0;
        fetch('/products')
            .then(res => res.json())
            .then(json => {
                setProducts(json);
                setSortedProducts(json);
                json.map(product => {
                    if(product.price > defaultMaxPrice){
                        defaultMaxPrice = product.price;
                    }
                })
                setMaxPrice(defaultMaxPrice);
                setDefaultMaxPrice(defaultMaxPrice);
            })     
    }

    fetchProducts();

  }, []) */
  
  function toGrid(){
    setView("grid");
  }

  function toCrammed(){
    setView("crammed");
  }

  function tolist(){
    setView("list");
  }

  function toggleCategory(i){
    setActiveCategoryIndex(i);
    setCategory(categories[i]);
  }

  function toAscending(){
    if(filterBy==="rate"){
      setSortedProducts(sortedProducts.sort(function(a, b){return a.rating.rate - b.rating.rate}));
    }
    else if(filterBy==="price"){
      setSortedProducts(sortedProducts.sort(function(a, b){return a.price - b.price}));
    }
    setForceUpdate(!forceUpdate);
  }

  function toDescending(){
    if(filterBy==="rate"){
      setSortedProducts(sortedProducts.sort(function(a, b){return b.rating.rate - a.rating.rate}));
    }
    else if(filterBy==="price"){
      setSortedProducts(sortedProducts.sort(function(a, b){return b.price - a.price}));
    }
    setForceUpdate(!forceUpdate);
  }

  function handleChangeMaxPrice(e){
    setMaxPrice(e.target.value)
    console.log(maxPrice);
  }

  function handleChangeMinPrice(e){
    setMinPrice(e.target.value);
    console.log(minPrice);
  }

  function handleStars(i){
    setMinRate(i);
    setActiveStars(i);
  }

  function handleRate(i){
    setMinRate(i);
  }

  function cancel(){
    setMinRate(0);
    setActiveStars(0);
    setMinPrice(0);
    setMaxPrice(defaultMaxPrice);
  }

  return (
    <div className="w-100">
      <Header
        toggleCategory={toggleCategory}
        activeCategoryIndex={activeCategoryIndex}
      />
      <div className="container-fluid mt-2 mb-5">
        <div className="row pb-5">
          <div className="col-md-3">
            <FiltersSection
              toggleRate={setMinRate}
              handleChangeMaxPrice={setMaxPrice}
              handleChangeMinPrice={setMinPrice}
            />
          </div>
          <div className="col-md-9">
            <MainSection
              itemsFound={itemsFound}
              setItemsFound={setItemsFound}
              toCrammed={toCrammed}
              toGrid={toGrid}
              tolist={tolist}

              products={sortedProducts}
              category={category}
              minPrice={minPrice}
              maxPrice={maxPrice}
              minRate={minRate}
              view={view}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}