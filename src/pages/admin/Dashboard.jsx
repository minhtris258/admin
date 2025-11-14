import React from "react";
import { FiDollarSign, FiEye, FiStar, FiTrendingUp } from "react-icons/fi";
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
    legend: { 
      position: "top",
      labels: {
        font: {
          size: 12,
          family: "'Inter', sans-serif"
        },
        padding: 15,
        usePointStyle: true
      }
    },
    title: { 
      display: true, 
      text: title,
      font: {
        size: 16,
        weight: 'bold',
        family: "'Inter', sans-serif"
      },
      padding: {
        top: 10,
        bottom: 20
      }
    },
  },
  scales: {
    y: {
      beginAtZero: true,
      grid: {
        color: 'rgba(0, 0, 0, 0.05)',
        drawBorder: false
      },
      ticks: {
        font: {
          size: 11
        }
      }
    },
    x: {
      grid: {
        display: false,
        drawBorder: false
      },
      ticks: {
        font: {
          size: 11
        }
      }
    }
  }
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
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-800">Tổng Quan</h1>
        <div className="text-sm text-gray-500">
          {new Date().toLocaleDateString('vi-VN', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
          })}
        </div>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl shadow-lg p-6 text-white transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-blue-100 text-sm font-medium">Tổng Doanh Thu</p>
              <h3 className="text-3xl font-bold mt-2">$45,231</h3>
              <p className="text-blue-100 text-xs mt-2 flex items-center">
                <FiTrendingUp className="mr-1" />
                +12.5% so với tháng trước
              </p>
            </div>
            <div className="bg-white bg-opacity-20 rounded-full p-4">
              <FiDollarSign className="w-8 h-8" />
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl shadow-lg p-6 text-white transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-green-100 text-sm font-medium">Tổng Lượt Xem</p>
              <h3 className="text-3xl font-bold mt-2">128,400</h3>
              <p className="text-green-100 text-xs mt-2 flex items-center">
                <FiTrendingUp className="mr-1" />
                +8.2% so với tháng trước
              </p>
            </div>
            <div className="bg-white bg-opacity-20 rounded-full p-4">
              <FiEye className="w-8 h-8" />
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl shadow-lg p-6 text-white transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-purple-100 text-sm font-medium">Đánh Giá</p>
              <h3 className="text-3xl font-bold mt-2">2,150</h3>
              <p className="text-purple-100 text-xs mt-2 flex items-center">
                <FiTrendingUp className="mr-1" />
                +15.3% so với tháng trước
              </p>
            </div>
            <div className="bg-white bg-opacity-20 rounded-full p-4">
              <FiStar className="w-8 h-8" />
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl shadow-lg p-6 text-white transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-orange-100 text-sm font-medium">Tỷ Lệ Tăng Trưởng</p>
              <h3 className="text-3xl font-bold mt-2">18.7%</h3>
              <p className="text-orange-100 text-xs mt-2 flex items-center">
                <FiTrendingUp className="mr-1" />
                Tăng trưởng ổn định
              </p>
            </div>
            <div className="bg-white bg-opacity-20 rounded-full p-4">
              <FiTrendingUp className="w-8 h-8" />
            </div>
          </div>
        </div>
      </div>

      {/* Bảng danh sách phòng */}
      <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
        <div className="px-6 py-5 border-b border-gray-100 bg-gradient-to-r from-gray-50 to-white">
          <h2 className="text-xl font-bold text-gray-800">Danh sách phòng</h2>
          <p className="text-sm text-gray-500 mt-1">Quản lý thông tin phòng và trạng thái đặt phòng</p>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Ngày đăng
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  ID
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Trạng thái
                </th>
                <th className="px-6 py-4 text-right text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Giá tiền
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {roomsData.map((room, index) => (
                <tr 
                  key={index} 
                  className="hover:bg-gray-50 transition-colors duration-150"
                >
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                    {room.date}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm font-medium text-gray-900">{room.id}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${
                        room.status === "Đã đặt"
                          ? "bg-red-100 text-red-700"
                          : "bg-green-100 text-green-700"
                      }`}
                    >
                      {room.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-semibold text-gray-900">
                    ${room.price}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Biểu đồ */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
          <div className="h-80">
            <Line data={doanhThuData} options={chartOptions("Biểu đồ doanh thu")} />
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
          <div className="h-80">
            <Line data={luotXemData} options={chartOptions("Biểu đồ lượt xem")} />
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
        <div className="h-96">
          <Line data={danhGiaData} options={chartOptions("Biểu đồ đánh giá")} />
        </div>
      </div>
    </div>
  );
}
