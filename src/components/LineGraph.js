import { Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    } from 'chart.js';

    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Legend
    );

    const LineGraph = () =>{
        const options={
            scales:{
                y:{
                    beginAtZero : false,
                },
            },
        };

        const data ={
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June'],
            datasets: [
                {
                    label: 'steps',
                    data: [3300, 2300, 14500, 4050,7050,19050],
                    borderColor: 'rgb(54, 162, 235)',
                },
                {
                    label: 'calories',
                    data: [3300, 5000, 9500, 3050,12050,15050],
                    borderColor: 'rgb(255, 99, 132)',
                },
            ],
        };
        return<Line options={options} data={data}/>;
    }

    export default LineGraph;