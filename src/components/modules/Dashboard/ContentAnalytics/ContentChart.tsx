import React, { FC } from "react";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Legend,
  Bar,
} from "recharts";

interface AnalyticsData {
  totalComments: number;
  totalVotes: number;
  totalViews: number;
}

interface AnalyticsChartProps {
  data: AnalyticsData;
}

const ContentChart: FC<AnalyticsChartProps> = ({ data }) => {
  const chartData = [
    { name: "comments", comments: data.totalComments },
    { name: "votes", votes: data.totalVotes },
    { name: "views", views: data.totalViews },
  ];

  return (
    <ResponsiveContainer width="100%">
      <BarChart data={chartData} width={500}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="votes" fill="#14746f" />
        <Bar dataKey="comments" fill="#82ca9d" />
        <Bar dataKey="views" fill="#1A1A1D" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default ContentChart;
