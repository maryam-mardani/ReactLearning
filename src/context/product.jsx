import { createContext } from "react";

const ProductContext = createContext({
    products: [],
    products: () => {},
    onDelete: () => {},
    onIncreament: () => {},
    onDecreament: () => {},
    onReset: () => {},
});

export default ProductContext;