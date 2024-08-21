import {Line} from 'react-chartjs-2';
import {Chart as chartjs, CategoryScale, LinearScale,PointElement, LineElement,Title,Tooltip,Legend} from 'chart.js'

chartjs.register({
    CategoryScale, LinearScale,PointElement, LineElement,Title,Tooltip,Legend
})

export const LineGraph=({saledata})=>{
  // console.log("beta data dekho"+saledata);


    const options = {
        responsive: true,
        interaction: {
          mode: "index",
          intersect: false,
        },
        stacked: false,
        plugins: {
          title: {
            display: true,
            text: "Sales & Order Data",
          },
        },
        scales: {
          y: {
            type: "linear",
            display: true,
            position: "left",
          },
          y1: {
            type: "linear",
            display: true,
            position: "right",
            grid: {
              drawOnChartArea: false,
            },
          },
        },
      };
    
      const labels = [ "Electronics","Cameras","Laptops","Accessories","Headphones","Food","Books","Sports","Outdoor","Home"];
      // const labels=saledata?.map((data)=>data?.productName)
    
      const data = {
        labels,
        datasets: [
          {
            label: "product",
            data: saledata?.map((data)=>data?.salesAmount),
            borderColor: "#198753",
            backgroundColor: "rgba(42, 117, 83, 0.5)",
            yAxisID: "y",
          },
          {
            label: "category",
            data: saledata?.map((data)=>data?.category),
            borderColor: "rgb(220, 52, 69)",
            backgroundColor: "rgba(201, 68, 82, 0.5)",
            yAxisID: "y1",
          },
        ],
      };

    

    return (
        <div style={{ width: '600px', height: '400px' }}>
            <Line options={options} data={data}/>
        </div>
    )
}