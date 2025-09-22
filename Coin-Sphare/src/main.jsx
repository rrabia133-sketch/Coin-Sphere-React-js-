import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createSystem, defaultConfig, ChakraProvider } from "@chakra-ui/react";
import App from "./App.jsx";
import "@fontsource/ubuntu";

const system = createSystem(defaultConfig, {
  theme: {
    tokens: {
      fonts: {
        heading: { value: "Ubuntu" },
        body: { value: "Ubuntu" },
      },
    },
  },
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ChakraProvider value={system}>
      <App />
    </ChakraProvider>
  </StrictMode>
);
