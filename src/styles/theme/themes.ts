// 用于动态改变主题颜色
enum themeEnum {
  default = 'default',
  green = 'green'
} 
const changeTheme: Object = (themeName: themeEnum) => {
  const theme = require(`/@/styles/theme/theme-${themeEnum[themeName]}.less`)
  return theme
} 
export default changeTheme
