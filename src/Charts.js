import React from 'react';
import { Bar, Doughnut, Line, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale,ArcElement, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Flex, Grid, Card } from '@chakra-ui/react';
import { LineElement, PointElement } from 'chart.js';

// Register the required chart components
ChartJS.register(CategoryScale,LinearScale,ArcElement, BarElement, Title, Tooltip, Legend, LineElement, PointElement);

const Charts = () => {
  // Define your chart data
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Sales',
        data: [65, 59, 80, 81, 56, 55, 40],
        backgroundColor: [
            'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(153, 102, 255, 0.6)',
          'rgba(255, 159, 64, 0.6)',
          'rgba(0, 255, 255, 0.6)',
          'rgba(255, 0, 255, 0.6)',
          'rgba(0, 255, 0, 0.6)',
          'rgba(255, 192, 203, 0.6)',
          'rgba(165, 42, 42, 0.6)',
          'rgba(128, 128, 128, 0.6)',
          ],
          borderColor: [
           'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(0, 255, 255, 1)',
          'rgba(255, 0, 255, 1)',
          'rgba(0, 255, 0, 1)',
          'rgba(255, 192, 203, 1)',
          'rgba(165, 42, 42, 1)',
          'rgba(128, 128, 128, 1)',
          ],
        borderWidth: 2,
        borderRadius: 0,
      },
    ],
  };

  // Define chart options
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
      },
      title: {
        display: true,
        text: 'Sales Data',
      },
    },
  };

  return (
    <Grid
      templateColumns={{
        base: "1fr",
        md: "repeat(2, 1fr)"
      }}
      gap={5}
      columnGap={10}
    >
      <Card p={4} boxShadow="md" borderRadius={10} borderWidth={1} borderColor="gray.200" w="100%" h="400">
        <Bar data={data} options={options} />
      </Card>
      <Card p={4} boxShadow="md" borderRadius={10} borderWidth={1} borderColor="gray.200">
        <Line data={data} options={options} />
      </Card>
      <Card p={4} boxShadow="md" borderRadius={10} borderWidth={1} borderColor="gray.200">
        <Doughnut data={data} options={options} />
      </Card>
      <Card p={4} boxShadow="md" borderRadius={10} borderWidth={1} borderColor="gray.200">
        <Pie data={data} options={options} />
      </Card>
    </Grid>
  )
};

export default Charts;
