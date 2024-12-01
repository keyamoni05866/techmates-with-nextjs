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
  totalPosts: number;
  totalUsers: number;
}

interface AnalyticsChartProps {
  data: AnalyticsData;
}

const DashboardChart: FC<AnalyticsChartProps> = ({ data }) => {
  const chartData = [
    { name: "posts", posts: data.totalPosts },
    { name: "users", users: data.totalUsers },
  ];

  return (
    <ResponsiveContainer height={350} width="100%">
      <BarChart data={chartData} height={300} width={500}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="posts" fill="#9753d3" />
        <Bar dataKey="users" fill="#82ca9d" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default DashboardChart;
