import { Provider } from "@/components/ui/provider";

export default function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props;
  return (
    <html suppressHydrationWarning>
      <head>
        <title>Aleeza Saleem</title>
        <link rel="shortcut icon" href="/favicon.jpg" />
      </head>
      <body>
        <Provider>{children}</Provider>
      </body>
      <script
        src="//code.tidio.co/3rvoolcs8wnsbcgde8zf30fdl3aywof7.js"
        async
      ></script>
    </html>
  );
}
