import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ReferenceArea,
  ResponsiveContainer,
} from "recharts";

const data = [
  { day: "MON", newJobs: 5, date: "09 May" },
  { day: "TUE", newJobs: 20, date: "10 May" },
  { day: "WED", newJobs: 10, date: "11 May" },
  { day: "THU", newJobs: 30, date: "12 May" },
  { day: "FRI", newJobs: 12, date: "12 May" },
  { day: "SAT", newJobs: 15, date: "14 May" },
  { day: "SUN", newJobs: 25, date: "15 May" },
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    const { value } = payload[0];
    return (
      <div
        style={{
          backgroundColor: "#4370fd",
          color: "white",
          padding: "5px",
          borderRadius: "12px",
        }}
      >
        <h1 className="text-center font-bold text-2xl">{value}</h1>
        <h1 className="text-sm font-semibold">New Jobs</h1>
        <div
          className="recharts-tooltip-cursor"
          style={{
            position: "absolute",
            bottom: "-10px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "0",
            height: "0",
            borderTop: "8px solid #4370fd",
            borderLeft: "8px solid transparent",
            borderRight: "8px solid transparent",
          }}
        />
      </div>
    );
  }
  return null;
};

const LChart = () => {
  return (
    <ResponsiveContainer width="100%" height="85%">
      <LineChart
        data={data}
        margin={{ top: 30, right: 50, left: 20, bottom: 40 }}
      >
        <CartesianGrid stroke="#ccc" />
        <XAxis
          dataKey="day"
          tick={(props) => (
            <g transform={`translate(${props.x},${props.y + 15})`}>
              <text
                x={0}
                y={0}
                dy={12}
                textAnchor="middle"
                fill="#000"
                fontWeight="bold"
              >
                {props.payload.value}
              </text>
              <text
                x={0}
                y={20}
                dy={12}
                textAnchor="middle"
                fill="#808080"
                fontSize="12px"
                fontWeight="normal"
              >
                {data[props.index].date}
              </text>
            </g>
          )}
          axisLine={{ stroke: "#ccc", opacity: 0.2, strokeDasharray: "none" }}
        />
        <YAxis
          domain={[10, 60]}
          ticks={[10, 20, 30, 40, 50, 60]}
          tick={{ fill: "#000", fontWeight: "bold", padding: 10 }}
          axisLine={{ stroke: "#ccc", opacity: 0.2, strokeDasharray: "none" }}
          tickMargin={15}
        />
        <Tooltip content={<CustomTooltip />} />
        <Line
          type="basis"
          dataKey="newJobs"
          stroke="#4370fd"
          strokeWidth={4}
          dot={false}
        />
        <ReferenceArea y1={0} y2={10} fill="#add8e6" fillOpacity={0.3} />
        <Line
          type="linear"
          dataKey="newJobs"
          fill="#4370fd"
          stroke="none"
          fillOpacity={0.1}
        />
        <ReferenceArea y1={0} y2={10} fill="#add8e6" fillOpacity={0.1} />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default LChart;
