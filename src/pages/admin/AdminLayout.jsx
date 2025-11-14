// Pages/Admin/AdminLayout.jsx (Sửa đổi)
import { Outlet, Link } from "react-router-dom";
import { useState, useCallback } from "react"; 
import Sidebar from "../../components/admin/Sidebar";
import Header from "../../components/admin/Header";
import DashboardContent from "./Dashboard";
import AppointmentManagement from "./AppointmentManagement";
import PatientManagement from "./PatientManagement";
import ProfileSettings from "./ProfileSettings";


const AdminLayout = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [currentView, setCurrentView] = useState('dashboard'); // State quản lý View

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };
    
    // Hàm chọn nội dung hiển thị
    const renderContent = () => {
        switch (currentView) {
            case 'dashboard':
                return <DashboardContent />;
            case 'appointments':
                return <AppointmentManagement />;
            case 'patients':
                return <PatientManagement />;
            case 'doctors':
                return <PatientManagement 
                    title="Quản lý Bác Sĩ (Placeholder)" 
                    content="Giao diện thêm, sửa, xóa thông tin và lịch làm việc của các bác sĩ."
                />;
            case 'reports':
                return <PatientManagement 
                    title="Báo Cáo & Phân Tích (Placeholder)" 
                    content="Giao diện cung cấp các báo cáo chuyên sâu về doanh thu, lượt khám, và hiệu suất."
                />;
            case 'settings':
                return <PatientManagement 
                    title="Cài Đặt Hệ Thống" 
                    content="Đây là giao diện cài đặt. Bạn có thể thay đổi các tùy chọn chung của ứng dụng tại đây."
                />;
            case 'profile':
                return <ProfileSettings />; // Sử dụng component ProfileSettings mới
            default:
                return <DashboardContent />;
        }
    };

    return (
        // Khung ngoài cùng: Chiều cao toàn màn hình, không cuộn
        <div className="flex h-screen bg-gray-50 font-sans overflow-hidden">
            {/* 1. Sidebar */}
            <Sidebar 
                isOpen={isSidebarOpen} 
                toggleSidebar={toggleSidebar} 
                currentView={currentView} 
                setView={setCurrentView}
            />

            {/* Backdrop cho Mobile Sidebar */}
            {isSidebarOpen && (
                <div 
                    className="fixed inset-0 bg-black opacity-50 z-20 lg:hidden"
                    onClick={toggleSidebar}
                ></div>
            )}

            {/* 2. Main Content Area (Header + Content) */}
            {/* Khu vực chính: Chiếm hết phần còn lại, kích hoạt cuộn dọc */}
            <div className="flex-1 flex flex-col overflow-y-auto">
                {/* Header: Đã là sticky top-0, sẽ cố định khi cuộn */}
                <Header 
                    toggleSidebar={toggleSidebar} 
                    setView={setCurrentView} 
                />

                {/* Nội dung chính dựa trên state (sẽ cuộn cùng với Main Content Area) */}
                {renderContent()}
            </div>
        </div>
    );
};

export default AdminLayout;