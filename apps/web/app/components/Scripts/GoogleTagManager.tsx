import Script from "next/script";

const googleTagManagerId = process.env.NEXT_PUBLIC_GTM_ID;

const gtmHeadScript = googleTagManagerId
  ? `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${googleTagManagerId}');`
  : null;

export const GoogleTagManager = () =>
  googleTagManagerId ? (
    <Script
      id="google-tag-manager"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: gtmHeadScript,
      }}
    />
  ) : null;
