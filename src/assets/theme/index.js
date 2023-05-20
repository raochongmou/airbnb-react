const theme = {
  color: {
    primaryColor: "#FF385c",
    secondColor: "#00848A"
  },
  text: {
    primaryColor: "#717171",
    secondColor: "#222",
    gray: "#eaeaea"
  },
  mixin: {
    boxshadow: `transition: box-shadow 0.2s ease-in-out;
    &:hover {
      box-shadow: 0 4px 4px rgba(0, 0, 0, .18);
    }`,
    flexLayout: `display: flex;
    justify-content: center;
    align-items: center;`
  }
};
export default theme;
