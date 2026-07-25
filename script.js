function getWeekNumber(d) {
    d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
    d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay() || 7));
    var yearStart = new Date(Date.UTC(d.getUTCFullYear(),0,1));
    var weekNo = Math.ceil(( ( (d - yearStart) / 86400000) + 1)/7);
    return weekNo;
}

function updateCalendar() {
    const today = new Date();
    
    // 1. Hiển thị dương lịch
    const options = { weekday: 'long', year: 'numeric', month: 'numeric', day: 'numeric' };
    document.getElementById('solar-date').innerText = today.toLocaleDateString('vi-VN', options);
    
    // 2. Hiển thị số tuần
    document.getElementById('week-number').innerText = getWeekNumber(today);
    
    // 3. Hiển thị âm lịch (Dùng hàm của thư viện amlich-hnd.js)
    // Hàm này yêu cầu truyền vào ngày, tháng, năm dương lịch và múi giờ (7 cho Việt Nam)
    const lunar = getLunarDate(today.getDate(), today.getMonth() + 1, today.getFullYear(), 7);
    document.getElementById('lunar-date').innerText = `${lunar.day}/${lunar.month} (${lunar.yearName})`;
}

// Chạy hàm khi trang web tải xong
window.onload = updateCalendar;
