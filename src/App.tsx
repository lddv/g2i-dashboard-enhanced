import "@mantine/core/styles.css";

import { MantineProvider } from "@mantine/core";
import { JobBoard } from "./components/JobBoard";

function App() {
  return (
    <MantineProvider>
      <JobBoard />
    </MantineProvider>
  );
}

export default App;
