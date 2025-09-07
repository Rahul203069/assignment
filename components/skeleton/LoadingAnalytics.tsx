import React from 'react'
import  SalesDashboard  from '@/components/salesDashboard'
import  VisitorInsight  from '@/components/skeleton/VistorInsight'
import TotalRevenueChartSkeleton from './TotalRevenue'
import TargetVsRealitySkeleton from './targetReality'
import CustomerSatisfactionSkeleton from './CustomerSatifctions'
import VolumeServiceSkeleton from './VolumeService'

import TopProductsSkeleton from './TopProduct'
import SalesMapSkeleton from './MapLoader'
import TargetVsRealityChart from '../TargetReality'
import VolumeServiceChartSkeleton from '@/components/skeleton/VolumeService'
import SalesDashboardSkeleton from './Sales'


const Lanalytics = () => {
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



<SalesDashboardSkeleton></SalesDashboardSkeleton>





</div>

<VisitorInsight></VisitorInsight>


    </div>

   <div className="  flex gap-6 mt-6 ">
           <TotalRevenueChartSkeleton/>
           <CustomerSatisfactionSkeleton/>
           <TargetVsRealitySkeleton></TargetVsRealitySkeleton>

         </div>
   <div className="  flex gap-6 mt-6 ">
        <TopProductsSkeleton></TopProductsSkeleton>
        <SalesMapSkeleton></SalesMapSkeleton>
        <VolumeServiceChartSkeleton></VolumeServiceChartSkeleton>
         </div>

    </div>
  )
}

export default Lanalytics