import { useState } from "react";
import styles from './styles.module.scss';

export default function ProductCard({ product }) {
    // console.log(`product ${product._id}`, product.subProduct[0]);
    const [ active, setActive ] = useState(0);
    const [ images, setImages ] = useState(product.subProducts[active]);
    return <div>index</div>;
}