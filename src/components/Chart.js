import React from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    PointElement,
    LineElement,
    LineController,
} from 'chart.js'
import { Bar, Line } from 'react-chartjs-2'
import faker from '@faker-js/faker'

ChartJS.register(
    PointElement,
    CategoryScale,
    LinearScale,
    LineController,
    LineElement,
    BarElement,
    Title,
    Tooltip,
    Legend
)
const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Chart.js Bar Chart',
        },
    },
}
const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July']
const data = {
    labels,
    datasets: [
        {
            label: 'Dataset 1',
            data: labels.map(() =>
                faker.datatype.number({ min: 0, max: 1000 })
            ),
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
        {
            label: 'Dataset 2',
            data: labels.map(() =>
                faker.datatype.number({ min: 0, max: 1000 })
            ),
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
    ],
}

const BarChart = () => {
    return <Bar options={options} data={data} />
}
const LineChart = () => {
    return <Line options={options} data={data} />
}

export { BarChart, LineChart }
