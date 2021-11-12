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

        console.log(candy)
        if (InCart(candy.id)) {
            const update = cart.map((prod) => {
                if (prod.id === candy.id) {
                    const newCantidad = prod.cantidad + cantidadAgg
                    return {
                        ...prod,
                        cantidad: newCantidad
                    }
                }
                return prod
            })

            setCart([update])
        }
        else {
            const newProd = { 'cantidad': cantidadAgg, ...candy }
            setCart([...cart, newProd])

        }

    }

    const removeProd = (id) => {
        const newCart = cart.filter((prod) => prod.id !== id)
        setCart(newCart)
    }

    const clear = () => {
        setCart([])
    }
    return (
        <CartContext.Provider value={{ addProd, removeProd, clear }}>
            {children}
        </CartContext.Provider>
    )


}

