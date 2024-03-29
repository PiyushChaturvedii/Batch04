import { Fragment, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

// import {CategoriesContext} from '../../contexts/categories.context'

import ProductCard from '../../components/product-card/product-card-component'
import './category.styles.scss';

import {selectCategoriesMap} from '../../store/categories/category.selector'


const Category = () => {
    const { category } = useParams();

    // const { categoriesMap } = useContext(CategoriesContext);
    const  categoriesMap  = useSelector(selectCategoriesMap);
    
    const [products, setProducts] = useState(categoriesMap[category]);

    useEffect(()=>{
        setProducts(categoriesMap[category]);
    },[category,categoriesMap])

    return (
        <Fragment>

        <h2 className='title'>{category.toUpperCase()}</h2>
        <div className="category-container">
            {products &&
                products.map((product) => (<ProductCard key={product.id} product={product} />
            ))}
        </div>
        </Fragment>
    )
    
}

export default Category;