const SECONDARY = {
  main: "#15c39a",
  dark: "rgba(21,195,154, 1)",
  light: "rgba(21,195,154,.9)",
  contrast: "#FFFFFF"
};

const TERTIARY = {
  main: "#4c7af1",
  dark: "#004fbe",
  light: "#87a9ff",
  contrast: "#FFFFFF"
};

const SUCCESS = {
  main: "#0C7723",
  contrast: "#FFFFFF"
};

const ERROR = {
  main: "#E60000",
  contrast: "#FFFFFF"
};

const themes = {
  light: {
    app: {
      focus: "blue",
      background: "white"
    },
    primary: {
      main: "#FFFFFF",
      dark: "black",
      light: "#f9faff;",
      contrast: "#828c99",
      contrastSecondary: "#828c99",
      shadow: "rgba(0, 0, 0, 0.06)",
      shadowSecondary: "rgba(166, 173, 201, 0.22)"
    },
    secondary: {
      main: SECONDARY.main,
      dark: SECONDARY.dark,
      light: SECONDARY.light,
      contrast: SECONDARY.contrast
    },
    tertiary: {
      main: TERTIARY.main,
      dark: TERTIARY.dark,
      light: TERTIARY.light,
      contrast: TERTIARY.contrast
    },
    success: {
      main: SUCCESS.main,
      contrast: SUCCESS.contrast
    },
    error: {
      main: ERROR.main,
      contrast: ERROR.contrast
    }
  },
  dark: {
    background: "#33383f",
    primary: {
      dark: "black",
      main: "#0f1f2d",
      light: "#33383f",
      contrast: "#D7DADC",
      contrastSecondary: "#818384",
      shadow: "transparent",
      shadowSecondary: "transparent"
    },
    secondary: {
      main: SECONDARY.main,
      dark: SECONDARY.dark,
      light: SECONDARY.light,
      contrast: SECONDARY.contrast
    },
    tertiary: {
      main: TERTIARY.main,
      dark: TERTIARY.dark,
      light: TERTIARY.light,
      contrast: TERTIARY.contrast
    },
    success: {
      main: SUCCESS.main,
      contrast: SUCCESS.contrast
    },
    error: {
      main: ERROR.main,
      contrast: ERROR.contrast
    }
  }
};

export default themes;
