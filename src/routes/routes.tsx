import Home from "../pages/Home"
import ProductDetail from "../pages/ProductDetail"
import Layout from "../shared/Layout/Layout"


export const routes = [
    {
        path: "/",
        Component: Layout,
        children: [

            { index: true, Component: Home },
            { path: 'products/:id', Component: ProductDetail },
        ],
    }
]