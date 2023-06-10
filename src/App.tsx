import { Global, MantineProvider } from "@mantine/core";
import Home from "@pages/Home";
import fraunces from "./fonts/Fraunces_144pt-SemiBold.ttf";
import manrope from "./fonts/Manrope-Regular.ttf";

const GlobalStyles = () => {
  return (
    <Global
      styles={[
        {
          "@font-face": {
            fontFamily: "Fraunces",
            src: `url("${fraunces}") format("truetype")`,
            fontWeight: 600,
            fontStyle: "normal",
          },
        },
        {
          "@font-face": {
            fontFamily: "Manrope",
            src: `url("${manrope}") format('truetype')`,
            fontWeight: 400,
            fontStyle: "normal",
          },
        },
      ]}
    />
  );
};

const App = () => {
  return (
    <MantineProvider
      theme={{
        colors: {
          _yourDarkness: [
            "#E9E6EC",
            "#D3CDD8",
            "#BDB4C5",
            "#A79BB2",
            "#7C698B",
            "#503765",
            "#24053E",
            "#1D0432",
            "#160325",
            "#0E0219",
          ],
          _seaGreen: [
            "#ECFFF6",
            "#DAFFEC",
            "#C7FFE3",
            "#B4FFD9",
            "#8FFFC7",
            "#69FFB4",
            "#44FFA1",
            "#36CC81",
            "#299961",
            "#1B6640",
          ],
          _illusionist: [
            "#EEEDEF",
            "#DEDBE0",
            "#CDCAD0",
            "#BCB8C0",
            "#9B94A1",
            "#797181",
            "#584D62",
            "#463E4E",
            "#352E3B",
            "#231F27",
          ],
          _coldSnow: [
            "#FFFEFF",
            "#FEFEFF",
            "#FEFDFF",
            "#FEFCFF",
            "#FDFBFF",
            "#FDF9FF",
            "#FCF8FF",
            "#979599",
            "#656366",
            "#4C4A4D",
          ],
        },
        headings: {
          fontFamily: "Fraunces, sans-serif",
          sizes: {
            h1: {
              fontSize: "50px",
            },
          },
        },
        fontFamily: "Manrope, sans-serif",
      }}
      withGlobalStyles
      withNormalizeCSS
    >
      <GlobalStyles />
      <Home />
    </MantineProvider>
  );
};

export default App;
