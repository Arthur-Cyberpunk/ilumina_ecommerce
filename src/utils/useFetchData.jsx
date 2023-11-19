import { useEffect } from "react";
import { useDispatch } from 'react-redux';
import { fetchProducts } from '../redux/product/action';

const useFetchData = () => {
  const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProducts());
      }, [dispatch]);

}

export default useFetchData;
