import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts';

const YearlyTrend = ({ trend }) => {
  const data = Object.entries(trend).map(([year, count]) => ({ year, count }));

  return (
    <div>
      <h2 className="text-2xl font-bold gilda-display mb-4 text-center border-b-2 pb-2">Yearly Trend of Movie Releases</h2>
      <LineChart width={1400} height={400} data={data}>
        <XAxis dataKey="year" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="count" stroke="#8884d8" />
      </LineChart>
    </div>
  );
};

export default YearlyTrend;
