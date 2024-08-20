import React from 'react';
import { useGlobalContext } from '../../Context/globalContext';
import { dateFormat } from '../../Utils/dateFormat';
import {
    Chart as ChartJs,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import styled from 'styled-components';

ChartJs.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement
);

function Chart() {
    // Provide default empty arrays for incomes and expenses
    const { incomes = [], expenses = [] } = useGlobalContext();

    // Prepare data for the chart
    const data = {
        labels: incomes.map((inc) => {
            const { date } = inc;
            return dateFormat(date);
        }),
        datasets: [
            {
                label: 'Income',
                data: incomes.map((income) => {
                    const { amount } = income;
                    return amount;
                }),
                backgroundColor: 'green',
                borderColor: 'green',
                fill: false,
                tension:.2
            },
            {
                label: 'Expenses',
                data: expenses.map((expense) => {
                    const { amount } = expense;
                    return amount;
                }),
                backgroundColor: 'red',
                borderColor: 'red',
                fill: false,
                tension:.2
            }
        ]
    };

    return (
        <ChartStyled>
            <Line data={data} />
        </ChartStyled>
    );
}

const ChartStyled = styled.div`
    background: #FCF6F9;
    border: 2px solid #FFFFFF;
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
    padding: 1rem;
    border-radius: 20px;
    height: 100%;
`;

export default Chart;