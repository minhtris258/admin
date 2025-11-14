import React, { useState } from 'react';
// Placeholder đa năng hơn
const PatientManagement = ({ title = "Quản Lý Bệnh Nhân (Placeholder)", content = "Đây là nơi quản lý thông tin bệnh nhân. Hiện tại đang là giao diện giả lập." }) => {
    return (
        <main className="flex-1 p-4 sm:p-8 bg-gray-50 min-h-[calc(100vh-64px)]">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">{title}</h2>
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                <p className="text-gray-600">{content}</p>
                {/* Có thể thay thế bằng UserManagement component cũ nếu muốn */}
            </div>
        </main>
    );
};

export default PatientManagement;