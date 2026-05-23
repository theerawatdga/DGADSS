// =============================================
// DGA Digital Service Standard - CONFIG
// =============================================

// config.js
const APP_CONFIG = {
    uploadPasswordHash: "c2Rkc3MyNTY5"   // Base64
};

function checkUploadPassword(input) {
    return btoa(input) === APP_CONFIG.uploadPasswordHash;
}
