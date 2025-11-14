// src/mocks/mockdata.js
import { Calendar, Heart, Stethoscope, UserPlus } from 'lucide-react';

// --- MOCK DATA (Dữ liệu giả lập cho Hệ thống Đặt Lịch Khám) ---
export const mockKPIs = [
  {
    title: 'Lịch Hẹn Hôm Nay',
    value: '85/100',
    change: '+5.5%',
    period: 'Hôm qua',
    isPositive: true,
    icon: Calendar,
    color: 'indigo'
  },
  {
    title: 'Tỷ Lệ Đến Khám',
    value: '92%',
    change: '+0.8%',
    period: 'Tuần trước',
    isPositive: true,
    icon: Heart,
    color: 'green'
  },
  {
    title: 'Bác Sĩ Đang Hoạt Động',
    value: '24',
    change: '+1',
    period: 'Tháng này',
    isPositive: true,
    icon: Stethoscope,
    color: 'blue'
  },
  {
    title: 'Bệnh Nhân Mới',
    value: '45',
    change: '-1.2%',
    period: 'Tuần trước',
    isPositive: false,
    icon: UserPlus,
    color: 'yellow'
  },
];

export const mockAppointmentTrend = [
  { month: 'T1', count: 1200 },
  { month: 'T2', count: 1500 },
  { month: 'T3', count: 900 },
  { month: 'T4', count: 1800 },
  { month: 'T5', count: 2100 },
  { month: 'T6', count: 1600 },
  { month: 'T7', count: 2500 },
  { month: 'T8', count: 2000 },
];

export const mockStatusData = [
  { status: 'Hoàn thành', percentage: 70, color: 'bg-green-500' },
  { status: 'Chưa đến', percentage: 15, color: 'bg-red-500' },
  { status: 'Đã hủy', percentage: 10, color: 'bg-yellow-500' },
  { status: 'Đang chờ', percentage: 5, color: 'bg-indigo-500' },
];

export const mockDoctors = [
    { id: 'Dr001', name: 'BS. Lê Thị Mai', specialty: 'Nội Tổng Quát' },
    { id: 'Dr002', name: 'BS. Nguyễn Văn Hùng', specialty: 'Răng Hàm Mặt' },
    { id: 'Dr003', name: 'BS. Trần Ngọc Anh', specialty: 'Da Liễu' },
];

export const initialMockAppointments = [
    { id: 101, patient: 'Nguyễn Văn A', doctorId: 'Dr001', date: '2025-11-15', time: '10:00', reason: 'Kiểm tra tổng quát', status: 'Hoàn thành' },
    { id: 102, patient: 'Trần Thị B', doctorId: 'Dr002', date: '2025-11-15', time: '14:30', reason: 'Đau răng khôn', status: 'Đang chờ' },
    { id: 103, patient: 'Phạm Văn C', doctorId: 'Dr003', date: '2025-11-16', time: '09:00', reason: 'Viêm da cơ địa', status: 'Chưa đến' },
    { id: 104, patient: 'Lê Thu D', doctorId: 'Dr001', date: '2025-11-17', time: '11:00', reason: 'Cảm cúm thông thường', status: 'Đã hủy' },
    // Thêm các cuộc hẹn giả cho các ngày khác
    { id: 105, patient: 'Hoàng Văn Z', doctorId: 'Dr002', date: '2025-11-17', time: '15:00', reason: 'Lấy cao răng', status: 'Đang chờ' },
    { id: 106, patient: 'Vũ Thị K', doctorId: 'Dr003', date: '2025-11-20', time: '16:00', reason: 'Tư vấn thẩm mỹ da', status: 'Đang chờ' },
    { id: 107, patient: 'Đinh Tiến M', doctorId: 'Dr001', date: '2025-11-20', time: '08:00', reason: 'Kiểm tra huyết áp', status: 'Hoàn thành' },
];

export const mockActivity = [
  { time: '14:30', user: 'Trần Thị B', action: 'vừa đặt lịch với BS. Hùng.', type: 'sale' },
  { time: '12:00', user: 'BS. Mai', action: 'đã hoàn thành lịch hẹn #101.', type: 'inventory' },
  { time: '09:00', user: 'Admin', action: 'đã thêm BS. Trần Ngọc Anh.', type: 'user' },
  { time: '08:30', user: 'Hệ thống', action: 'Gửi email nhắc nhở lịch hẹn trong ngày.', type: 'system' },
];
