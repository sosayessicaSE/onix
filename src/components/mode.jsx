export const setTheme = (theme) => {
  localStorage.setItem('theme', theme);
  document.documentElement.className = theme;
};

export const keepTheme = () => {
  const theme = localStorage.getItem('theme');
  if (theme) {
    document.documentElement.className = theme;
  }
};
