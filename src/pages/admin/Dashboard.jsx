import React from "react";

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
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const doanhThuData = {
  labels,
  datasets: [
    {
      label: "Doanh thu ($)",
      data: [1200, 1900, 3000, 5000, 2400, 3200, 4100, 3900, 4200, 4800, 5100, 5300],
      borderColor: "rgb(75, 192, 192)",
      backgroundColor: "rgba(75, 192, 192, 0.2)",
      tension: 0.3,
    },
  ],
};

const luotXemData = {
  labels,
  datasets: [
    {
      label: "Lượt xem",
      data: [5000, 7000, 9000, 12000, 11000, 13000, 15000, 14000, 16000, 17000, 18000, 20000],
      borderColor: "rgb(54, 162, 235)",
      backgroundColor: "rgba(54, 162, 235, 0.2)",
      tension: 0.3,
    },
  ],
};

const danhGiaData = {
  labels,
  datasets: [
    {
      label: "Đánh giá",
      data: [120, 150, 180, 200, 170, 210, 230, 220, 250, 270, 300, 320],
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.2)",
      tension: 0.3,
    },
  ],
};

const chartOptions = (title) => ({
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { position: "top" },
    title: { display: true, text: title },
  },
});

// Dữ liệu mẫu cho bảng phòng
const roomsData = [
  { date: "2025-08-01", id: "RM001", status: "Đã đặt", price: 120 },
  { date: "2025-08-03", id: "RM002", status: "Chưa đặt", price: 150 },
  { date: "2025-08-05", id: "RM003", status: "Đã đặt", price: 180 },
  { date: "2025-08-07", id: "RM004", status: "Chưa đặt", price: 200 },
];

export default function Dashboard() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">Tổng Quan</h1>

   

      {/* Bảng danh sách phòng */}
      <div className="bg-white p-6 rounded-xl shadow mt-4 overflow-x-auto">
        <h2 className="text-lg font-semibold mb-4">Danh sách phòng</h2>
        <table className="min-w-full border border-gray-200 text-sm rounded-xl">
          <thead>
            <tr className=" text-left border">
              <th className="py-2 px-4 border-b rounded-xl">Ngày đăng</th>
              <th className="py-2 px-4 border-b">ID</th>
              <th className="py-2 px-4 border-b">Trạng thái</th>
              <th className="py-2 px-4 border-b text-right">Giá tiền ($)</th>
            </tr>
          </thead>
          <tbody>
            {roomsData.map((room, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="py-2 px-4 border-b">{room.date}</td>
                <td className="py-2 px-4 border-b">{room.id}</td>
                <td
                  className={`py-2 px-4 border-b font-medium ${
                    room.status === "Đã đặt" ? "text-red-500" : "text-green-500"
                  }`}
                >
                  {room.status}
                </td>
                <td className="py-2 px-4 border-b text-right">${room.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Biểu đồ */}
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
        <div className="bg-white p-6 rounded-xl mx-auto w-full min-h-[400px] flex items-center border border-gray-200 shadow-sm">
          <Line data={doanhThuData} options={chartOptions("Biểu đồ doanh thu")} />
        </div>
        <div className="bg-white p-6 rounded-xl mx-auto w-full min-h-[400px] flex items-center border border-gray-200 shadow-sm">
          <Line data={luotXemData} options={chartOptions("Biểu đồ lượt xem")} />
        </div>
        <div className="bg-white p-6 rounded-xl mx-auto w-full min-h-[400px] flex items-center sm:col-span-2 border border-gray-200 shadow-sm">
          <Line data={danhGiaData} options={chartOptions("Biểu đồ đánh giá")} />
        </div>
      </div>
    </div>
  );
}
