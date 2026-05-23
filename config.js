// =============================================
// DGA Digital Service Standard - CONFIG
// เก็บรหัสผ่านแบบเข้ารหัส (Base64)
// =============================================

const APP_CONFIG = {
    // รหัสผ่าน: sddss2569 (เข้ารหัสเพื่อป้องกันการเห็นรหัสชัด ๆ)
    uploadPasswordHash: "c2Rkc3MyNTY5"
};

// ฟังก์ชันตรวจสอบรหัสผ่าน
function checkUploadPassword(inputPassword) {
    return btoa(inputPassword) === APP_CONFIG.uploadPasswordHash;
}
