import { useState, createContext } from 'react'


export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {

    const [cart, setCart] = useState([])

    const InCart = (candyId) => {
        let isIn = false
        isIn = cart.some((product) => product.id === candyId)

        return isIn
    }

    const addProd = (candy, cantidadAgg) => {

        console.log(cantidadAgg)
       
        if (InCart(candy.id)) {
            const update = cart.map(prod => {
                if (prod.id === candy.id) {
                    let newCantidad = prod.cantidad + cantidadAgg
                    const newProd = {...prod, cantidad: parseInt(newCantidad)}
                    console.log(newProd)
                    return newProd
                    
                }
                return prod
            })

            setCart(update)
        }
        else {
            const newProd = { cantidad: cantidadAgg, ...candy }
            setCart([...cart, newProd])
            console.log(cart)
        }

    }

    const removeProd = (id) => {
        const newCart = cart.filter((prod) => prod.id !== id)
        setCart(newCart)
    }

    const clear = () => {
        setCart([])
    }

    const getTotal = () => {
      let total = 0
      cart.forEach(prod => {
          total = total + prod.precio * prod.cantidad
      })
      return total
    };

    return (
        <CartContext.Provider value={{ addProd, removeProd, clear, cart, getTotal }}>
            {children}
        </CartContext.Provider>
    )


}

