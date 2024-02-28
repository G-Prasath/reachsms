import React from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Bar } from 'react-chartjs-2';
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );




const chart: any = {
    responsive: true,

    plugins: {
      legend: {
        display: true,
      },
      tooltip: {
        yAlign: "bottom",
        enabled: true,
        // backgroundColor: colors.tooltipColor,
        mode: "index",
        intersect: false,
        displayColors: true,
        displayLabel: true,
        padding: 20,
        callbacks: {
        }
      },
      interaction: {
        mode: "index",
      },
    },

    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 1,
        },
        grid: {
          display: false,
          borderWidth: 5,
        },

      },
      x: {
        grid: {
          display: false,
        }
      },
    },
  };

const Linechart = () => {
    const data: any = {
        type: 'bar',
        labels: ["01/31", "2/08", "2/15", "2/17", "2/23"],
        options: {
            maintainAspectRation: false
        },
        datasets: [
          {
            backgroundColor: '#bf1249',
            width: '20px',
            data: [1, 2, 1, 4, 4],
            barThickness: 40,
            cursor: 'pointer',
            label: 'Consumption',
            
          },
        ],
      };


  return (
    <section className='lineChart'>
        <Bar 
            data={data}
            options={chart}
        />
    </section>
  )
}

export default Linechart