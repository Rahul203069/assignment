import React from 'react'
import  SalesDashboard  from './salesDashboard'
import VisitorInsights from './VisitorInsight'

import TargetVsRealityChart from './TargetReality'
import CustomerSatisfaction from './CustomerSatisfaction'
import VolumeServiceChart from './VolumeServiceChart'
import TotalRevenueChart from './TotalRevenue'
import TopProductsComponent from './TopProductsComponents'
import SalesMappingComponent from './SalesMappingComponent'
import SalesMap from './SalesMappingComponent'
import { useDashboard } from '@/Context/DashboardContext'
import Lanalytics from './skeleton/LoadingAnalytics'
import { useEffect } from 'react'
import { DashboardData } from '@/types/AnalyticsTypes'
import axios from 'axios'
import { convertSecondToFirst } from '@/lib/utils'














const Analytics = () => {


  const { data, setData } = useDashboard();

  useEffect(() => {
    axios
      .get<DashboardData|null>("https://nestbackend-7tfp.onrender.com/api/dashboard/data")
     
      .then((res) => {
        if(res.data!==null){

          setData(convertSecondToFirst(res.data));
        }
        console.log(res.data)
       
      })
      .catch((err) => {
        setData(null)
        console.error("Error fetching analytics:", err);
        ;
      });
      console.log(data)
  }, []);





  if(data === null || data === undefined ){
return(

  
  <Lanalytics></Lanalytics>
)
  
  }else{





  return (
    <div className='w-full h-full p-6 ' style={{backgroundColor:'#FAFBFC'}}>
<div className='width-full flex gap-4'>


<div

className='bg-white'
style={{
    width: "877px",
    height: "348px",
    
    opacity: 1,
    
    borderRadius: "20px",
    
    
}}
>



<SalesDashboard  ></SalesDashboard>





</div>

<VisitorInsights></VisitorInsights>


    </div>

   <div className="  flex gap-6 mt-6 ">
           <TotalRevenueChart/>
           <CustomerSatisfaction/>
           <TargetVsRealityChart />
         </div>
   <div className="  flex gap-6 mt-6 ">
         <TopProductsComponent></TopProductsComponent>
        <SalesMap></SalesMap>
        <VolumeServiceChart></VolumeServiceChart>
         </div>

    </div>
  )}
}

export default Analytics