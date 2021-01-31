import React from 'react';
import { Pie } from 'react-chartjs-2'

const PieChart = ({ createdGoals, currentGoals, completedGoals, insights }) => {

  const data = [createdGoals.length, currentGoals.length, completedGoals.length, insights];
  const backgroundColors = [
    'rgba(255, 99, 132, 0.2)',
    'rgba(54, 162, 235, 0.2)',
    'rgba(75, 192, 192, 0.2)',
    'rgba(255, 206, 86, 0.2)',
  ];
  const borderColors = [
    'rgba(255, 99, 132, 1)',
    'rgba(255, 206, 86, 1)',
    'rgba(54, 162, 235, 1)',
    'rgba(75, 192, 192, 1)',
  ];
  const options = 
    {
      maintainAspectRatio: true,
      legend: {
        labels: {
          fontSize: 25,
        },
      },
    }
  

  return (
      <>
        <Pie 
          data={{
            labels: ['Created Goals', 'Current Goals', 'Completed Goals', 'Insights'],
            datasets: [
              {
                data: data,
                backgroundColor: backgroundColors,
                borderColor: borderColors,
                borderWidth: 1,
              },
            ],
          }}
          options={options}
        />
      </>
  )
}

export default PieChart;