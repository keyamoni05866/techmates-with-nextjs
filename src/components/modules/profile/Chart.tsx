import { FC } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

interface AnalyticsData {
  totalVotes: number;
  totalComments: number;
  totalViews: number;
}

interface AnalyticsChartProps {
  data: AnalyticsData;
}

const Chart: FC<AnalyticsChartProps> = ({ data }) => {
  const chartData = [
    { name: "Votes", votes: data.totalVotes },
    { name: "Comments", comments: data.totalComments },
    { name: "Views", views: data.totalViews },
  ];
  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart width={600} height={300} data={chartData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="votes" fill="#9753d3" />
        <Bar dataKey="comments" fill="#82ca9d" />
        <Bar dataKey="views" fill="#6A1E55" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default Chart;
