import React, { useRef, useState } from 'react';
import './App.css';
import ProductPanel from '../components/ProductPanel/ProductPanel';

function App() {
  const [productList, setProductList] = useState([])

  const titleRef = useRef(null)
  const priceRef = useRef(null)
  const stockRef = useRef(null)

  const addProduct = () => {
    if (isNaN(titleRef.current.value)) {
      const copyState = [...productList]
      let indexOldProduct
      let replaceItem = true
      const foundName = copyState.filter((item, index) => {
        if (item.name === titleRef.current.value) {
          indexOldProduct = index
          return item
        }
      })

      let newProduct = {
        name: '',
        price: 0,
        stock: 0
      }

      newProduct.name = titleRef.current.value

      if (foundName.length > 0) {
        replaceItem = window.confirm('Создать новый товар с таким именем?')
        newProduct.name = titleRef.current.value + ' new'
        if (!replaceItem) {
          newProduct = foundName[0]
        }
      }

      if (priceRef.current.value > 0) {
        newProduct.price = Number(priceRef.current.value)
      } else if (priceRef.current.value.length > 0) {
        return alert('Некорректный ввод! Введите цену положительными цифрами')
      }

      if (stockRef.current.value >= 0) {
        if (Number(stockRef.current.value) === 0) {
          newProduct.stock = 'Нет в наличии'
        } else {
          newProduct.stock = Number(stockRef.current.value)
        }
      } else if (stockRef.current.value.length > 0) {
        return alert('Некорректный ввод! Введите количество положительными цифрами')
      }

      if (replaceItem) {
        copyState.push(newProduct)
      } else {
        copyState.splice(indexOldProduct, 1, newProduct)
      }

      setProductList(copyState)
      return
    }
    alert('Некорректный ввод')
  }

  console.log(productList)

  return (
    <div className='container'>
      <div className="App">
        <ProductPanel />
        <p>Создать новый товар</p>
        <div className='menu'>
          <input className='menu_input' ref={titleRef} type="text" placeholder='Название' />
          <input className='menu_input' ref={priceRef} type="text" placeholder='Стоимость' />
          <input className='menu_input' ref={stockRef} type="text" placeholder='Количество' />
          <button onClick={addProduct}>Добавить товар</button>
        </div>
      </div>
    </div>
  );
}

export default App;
