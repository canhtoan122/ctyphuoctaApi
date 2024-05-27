const axios = require('axios');

// Các thông số cần thiết
const PAGE_ID = '333535153171523';
const ACCESS_TOKEN = '1398449400835641|Hc3zznKK8hVuIEBc2WAYh1THhyQ';
const WELCOME_TEXT = 'Cảm ơn bạn đã sử dụng dịch vụ';
const THEME_COLOR = '6A5ACD';
const ENTRY_POINT_ICON = 'MESSENGER_ICON';
const ENTRY_POINT_LABEL = 'CHAT';

// Cấu hình chat plugin
const chatPluginConfig = {
  welcome_screen_greeting: WELCOME_TEXT,
  theme_color: THEME_COLOR,
  entry_point_icon: ENTRY_POINT_ICON,
  entry_point_label: ENTRY_POINT_LABEL,
  access_token: ACCESS_TOKEN
};

// Gửi yêu cầu POST để cấu hình chat plugin
async function chat() {
    axios.post(`https://graph.facebook.com/v20.0/${PAGE_ID}/chat_plugin`, null, {
    params: chatPluginConfig
    })
    .then(response => {
    console.log('Chat plugin configured successfully:', response.data);
    })
    .catch(error => {
    console.error('Error configuring chat plugin:', error.response ? error.response.data : error.message);
    });
}
module.exports = {
    chat
}
