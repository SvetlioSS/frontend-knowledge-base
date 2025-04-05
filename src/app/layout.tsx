import type { Metadata } from "next";
import Image from "next/image";
import { Footer, Layout, Navbar, ThemeSwitch } from "nextra-theme-docs";
import { getPageMap } from "nextra/page-map";
import "nextra-theme-docs/style.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en" // Suggested by `next-themes` package https://github.com/pacocoursey/next-themes#with-app
      suppressHydrationWarning
    >
      <body className="antialiased">
        <Layout pageMap={await getPageMap()}>
          <Navbar
            logo={
              <Image
                src="/logo.png"
                alt="logo"
                width={45}
                height={45}
                priority
              />
            }
          >
            <ThemeSwitch />
          </Navbar>

          {children}

          <Footer>{new Date().getFullYear()} © Svetoslav Spasov.</Footer>
        </Layout>
      </body>
    </html>
  );
}
