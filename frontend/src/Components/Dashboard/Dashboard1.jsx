import React from 'react'
import "react-datepicker/dist/react-datepicker.css";
import { useGetSalesQuery } from '../../redux/api/sales';
import { LineGraph } from '../charts/Line';
import SalesTable from '../charts/SalesTable';
import { BarGraph } from '../charts/Bar';

const Dashboard1 = () => {


    const { data } = useGetSalesQuery();
   console.log(data);


    return (
        <>
            <div className='container'>
            <LineGraph saledata={data?.sales}/> 
            <BarGraph saledata={data?.sales} />
               <SalesTable saledata={data?.sales}/>
            </div>
        </>
    )
}

export default Dashboard1
