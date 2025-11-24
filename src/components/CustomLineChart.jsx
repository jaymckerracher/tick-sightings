import { LineChart } from '@mui/x-charts/LineChart';

export default function CustomLineChart({ xAxisData, values }) {
    return (
        <LineChart
            xAxis={[{ data: xAxisData, scaleType: 'band' }]}
            series={[
                {
                data: values,
                },
            ]}
            height={300}
            width={600}
        />
    )
}