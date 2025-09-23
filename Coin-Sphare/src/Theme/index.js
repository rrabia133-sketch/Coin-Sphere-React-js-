import { extendTheme, withDefaultColorScheme } from "@chakra-ui/react";

export const theme = extendTheme(
  {
    colors: {
      yellow: {
        500: "#FFD700",
      },
      p: {
        yellow: "#FFD700",
        black: "#000000",
        white: "#FFFFFF",
      },
      black: {
        5: "#1A1A1A",
        10: "#2D2D2D",
        20: "#404040",
        40: "#666666",
        60: "#999999",
        80: "#CCCCCC",
      },
    },
    fonts: {
      heading: `Ubuntu`,
      body: "Ubuntu",
    },
    textStyles: {
      h1: {
        fontSize: {
          base: "30px",
          md: "32px",
        },
        color: "p.white",
        lineHeight: {
          base: "34px",
          md: "36px",
        },
      },
      h2: {
        fontSize: {
          base: "24px",
          md: "28px",
        },
        color: "p.white",
        lineHeight: { base: "28px", md: "32px" },
      },

      h3: {
        fontSize: {
          base: "22px",
          md: "24px",
          xl: "32px",
        },
        color: "p.white",

        lineHeight: { base: "26px", md: "28px", xl: "36px" },
      },

      h4: {
        fontSize: {
          base: "20px",
          md: "22px",
        },
        color: "p.white",

        lineHeight: { base: "24px", md: "26px" },
      },
      h5: {
        fontSize: {
          base: "18px",
          md: "20px",
        },
        color: "p.white",

        lineHeight: { base: "22px", md: "24px" },
      },
      h6: {
        fontSize: {
          base: "16px",
          md: "18px",
        },
        color: "p.white",

        lineHeight: { base: "20px", md: "22px" },
      },
    },

    fontSizes: {
      xs: "12px",
      sm: "14px",
      base: { base: "16px", md: "18px" },
      lg: { base: "18px", md: "20px" },
      xl: { base: "20px", md: "22px" },
      "2xl": { base: "22px", md: "24px" },
      "3xl": { base: "24px", md: "28px" },
      "4xl": { base: "30px", md: "32px" },
    },
    styles: {
      global: {
        // styles for the `body`
        body: {
          bg: "#000000",
        },
      },
    },

    components: {
      Button: {
        baseStyle: {
          fontWeight: "bold",
          borderRadius: "10px",
        },
      },
      FormLabel: {
        baseStyle: {
          fontSize: "sm",
        },
      },
      Input: {
        variants: {
          outline: {
            field: {
              h: "38px",
              borderRadius: "8px",
              fontSize: "sm",
              pb: "0",
              _focus: {
                boxShadow: "0 0 0 1px #FFD700",
              },
            },
          },
        },
      },
      Textarea: {
        variants: {
          outline: {
            h: "38px",
            borderRadius: "8px",
            fontSize: "sm",

            _focus: {
              boxShadow: "0 0 0 1px #FFD700",
            },
          },
        },
      },
    },
  },
  withDefaultColorScheme({ colorScheme: "yellow" })
);
