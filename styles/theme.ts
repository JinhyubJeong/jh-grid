const colors = {
    yellow: "#FFF100",
    blue: "#3159BD",
    black: "#111111",
    gray3: "#333333",
    gray8: "#888888",
    grayA: "#aaaaaa",
    grayC: "#cccccc",
    grayD: "#dddddd",
    grayE: "#eeeeee", //	disabled text color
    bgcolor: "#F8FAFF",
    white: "#ffffff",
};
const fonts = {
    family: {
        base: `"SpoqaHanSans", "Helvetica", "Arial", sans-serif`,
        title: `"SpoqaHanSans",sans-serif `,
    },
    size: {
        f60: "6.0rem",
        f32: "3.2rem",
        f24: "2.4rem",
        f18: "1.8rem",
        f14: "1.4rem",
        f12: "1.2rem",
    },
    weight: {
        light: 100,
        normal: 400,
        bold: 800,
    },
};

const size = {
    mobile: "734px",
    tablet: "1068px",
    desktop: "1440px",
};

// 미디어 쿼리의 중복 코드를 줄이기위해 정의된 변수입니다
const device = {
    mobile: `@media only screen and (max-width: ${size.mobile})`,
    tablet: `@media only screen and (max-width: ${size.tablet})`,
    desktop: `@media only screen and (max-width: ${size.desktop})`,
};

const theme = {
    colors,
    fonts,
    device,
};

export default theme;
