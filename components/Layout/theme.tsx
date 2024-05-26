import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#5662f6', // 设置主要颜色
    },
    secondary: {
      main: '#ffffff', // 设置次要颜色
    },
    // 你可以继续添加更多的颜色定义，如 error, warning 等
  },
  // 这里还可以定义其他主题相关的样式，如 typography 等
});

export default theme;