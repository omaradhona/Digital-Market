import { Product } from "./ProductsSection/Product";

export function ProductsSection(props){
    return (
        <>
            {props.products && (props.category === "all"
                ?
                props.products.filter(product => 
                    product.price >= props.minPrice && product.price <= props.maxPrice &&
                    product.rating.rate >= props.minRate).map(product =>
                        <Product
                            key={product.id}
                            id={product.id}
                            image={product.image}
                            title={product.title}
                            description={product.description}
                            price={product.price}
                            rating={product.rating.rate}
                            count={product.rating.count}
                            view={props.view}
                        />
                    )
                :
                props.products.filter(product => product.category === props.category).map(product =>
                    <Product
                        key={product.id}
                        id={product.id}
                        image={product.image}
                        title={product.title}
                        description={product.description}
                        price={product.price}
                        rating={product.rating.rate}
                        count={product.rating.count}
                        view={props.view}
                    />
                ))
            }
        </>
    )
}