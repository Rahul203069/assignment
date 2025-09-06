import React from 'react'
import { SalesDashboard } from './salesDashboard'
import { VisitorInsights } from './VisitorInsight'
import { Dashboard } from './Row2Anlytics'
import TargetVsRealityChart, { TargetVsReality } from './TargetReality'
import CustomerSatisfaction from './CustomerSatisfaction'
import VolumeServiceChart from './VolumeServiceChart'
import TotalRevenueChart, { TotalRevenue } from './TotalRevenue'
import TopProductsComponent from './TopProductsComponents'
import SalesMappingComponent from './SalesMappingComponent'
import SalesMap from './SalesMappingComponent'
import { Volume } from 'lucide-react'
const Analytics = () => {
  return (
    <div className='w-full h-full p-6 ' style={{backgroundColor:'#FAFBFC'}}>
<div className='width-full flex gap-6'>


<div

className='bg-white'
style={{
    width: "877px",
    height: "348px",
    
    opacity: 1,
    
    borderRadius: "20px",
    
    
}}
>



<SalesDashboard></SalesDashboard>





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
  )
}

export default Analytics