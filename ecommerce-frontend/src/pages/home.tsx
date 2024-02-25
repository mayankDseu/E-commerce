import React from 'react'
import { Link } from 'react-router-dom'
import ProductCard from '../components/product-card'

const Home = () => {

const addToCartHandler=()=>{

}

  return (
    <div className='home'>
      <section>

      </section>
      <h1>Latest Products
        <Link className='findmore' to='/search'>More</Link>
      </h1>
      <main>
        <ProductCard productId='gutt' name='mac' photo='https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1685966374/Croma%20Assets/Computers%20Peripherals/Laptop/Images/256711_umnwok.png?tr=w-360' price={4523} stock={1}
        handler={addToCartHandler}/>

        </main>
    </div>
  )
}

export default Home