import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html className="scroll-smooth" lang="en">
      <Head>
        {/* Favicon for the website */}
        <link rel="icon" href="/Logo.png" sizes="any" />

        {/* Preconnect to Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />

        {/* Import Google Fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Roboto+Mono&display=swap"
          rel="stylesheet"
        />

        {/* Include a script to prevent a flash of unstyled content */}
        <script src="/scripts/no-flash.js"></script>
      </Head>
      <body className="text-text bg-bg">
        {/* Main application content */}
        <Main />
        {/* Next.js scripts */}
        <NextScript />
      </body>
    </Html>
  );
}
