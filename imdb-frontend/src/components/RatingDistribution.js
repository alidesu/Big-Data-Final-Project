import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, Legend } from 'recharts';

const RatingDistribution = ({ ratings }) => {
  const data = ratings.map(rating => ({
    name: rating.Rating.toString(),
    count: rating.Count,
    average: rating.Average !== undefined ? rating.Average.toFixed(1) : 'N/A',
    total: rating.Total,
  }));

  return (
    <div className="container mx-auto my-8 p-4">
      <h2 className="text-2xl font-bold gilda-display mb-4 text-center border-b-2 pb-2">Rating Distribution</h2>
      <BarChart width={1400} height={400} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="count" fill="#8884d8" name="Count" />
        {/* <Bar dataKey="total" fill="#82ca9d" name="Total Ratings" /> */}
      </BarChart>
    </div>
  );
};

export default RatingDistribution;
