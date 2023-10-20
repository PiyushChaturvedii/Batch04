import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

    import './shop.styles.scss';
import CategoriesPreview from '../categories-preview/categories-preview.component';
import Category from '../category/category.component';
import { getCategoriesAndDocuments } from '../../utils/fireebase/firebase.utils';
import {setCategoriesMap} from '../../store/categories/category.action'

    
const Shop = () => {
  const dispatch = useDispatch();

useEffect(() => {
  const getCategoriesMap = async () => {
    const categoryArray = await getCategoriesAndDocuments('categories');
    // console.log(categoryMap);
    dispatch(setCategoriesMap(categoryArray));
  };
  getCategoriesMap();
}, []);
   


    return (


        <Routes>
            <Route index element={<CategoriesPreview />} />
            <Route path=":category" element={<Category/>}/>
            </Routes>
            

        )
    }
export default Shop;