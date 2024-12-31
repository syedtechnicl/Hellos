import { Provider } from "@/components/ui/provider";
import Fireworks from "./pages/Fireworks";

export default function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props;
  return (
    <html suppressHydrationWarning>
      <title>Aleeza Saleem</title>
      <body>
        <Provider>
          <Fireworks />
          <Fireworks />

          {children}
          <Fireworks />

          <Fireworks />
        </Provider>
      </body>
      <script
        src="//code.tidio.co/3rvoolcs8wnsbcgde8zf30fdl3aywof7.js"
        async
      ></script>
    </html>
  );
}
