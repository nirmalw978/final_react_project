import React, { createContext, ReactNode } from "react";
import all_product from '../components/assets/all_product';

// Define the type for your product
type Product = {
    id: number;
    name: string;
    category: string;
    image: string;
    new_price: number;
    old_price: number;
};

// Create the context
export const ShopContext = createContext<{ all_product?: Product[] }>({}); // make all_product optional

// Create the context provider component
const ShopContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    // Define the context value
    const contextValue = {all_product: all_product};


    // Return the context provider component
    return (
        <ShopContext.Provider value={contextValue}>
            {children}
        </ShopContext.Provider>
    );
}

export default ShopContextProvider;
