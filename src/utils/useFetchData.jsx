import { useEffect } from "react";
import { useDispatch } from 'react-redux';
import { fetchProducts } from '../redux/actions/product';

const useFetchData = () => {
  const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProducts());
      }, [dispatch]);

}

export default useFetchData;
