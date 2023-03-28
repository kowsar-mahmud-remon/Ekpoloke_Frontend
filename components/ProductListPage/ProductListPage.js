import React from 'react';
import Layout from '../../components/Layout/Layout';
import ProductStore from './ProductStore/ProductStore';
import './ProductListPage.css';
import { useSearchParams } from 'react-router-dom';
import ProductPage from './ProductPage/ProductPage';
import ClothingAndAccessories from './ClothingAndAccesories/ClothingAndAccessories';


const ProductListPage = (props) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const renderProduct = () => {
        let content = null;
        switch (searchParams.get('type')) {
            case 'store':
                content = <ProductStore {...props} />
                break;
            case 'page':
                content = <ProductPage {...props} />
                break;
            default:
                content = <ClothingAndAccessories {...props} />;
        }
        return content;
    }

    return (
        <Layout>
            {renderProduct()}
        </Layout>
    );
};

export default ProductListPage;