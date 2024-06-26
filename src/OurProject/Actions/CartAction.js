export const addToCart = (product) => {
    return {
        type: "ADD_TO_CART",
        product
    }
}

export const removeFromCart = (product) => {
    return {
            type: "REMOVE_FROM_CART",
            product
        }
    }

export const decreaseFromCart = (productId) => {
    return {
            type: "DECREASE_FROM_CART",
            productId
        }
    }