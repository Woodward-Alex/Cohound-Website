import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="application-name" content="Cohound" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Cohound" />
        <meta name="description" content="Where your dog's happiness meets convenience" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-TileColor" content="#FFFFFF" />
        <meta name="msapplication-tap-highlight" content="no" />
        <meta name="theme-color" content="#FFFFFF" />
        
        <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="shortcut icon" href="/favicon.ico" />
        
        {/* Add these splash screens for iOS */}
        <link 
          rel="apple-touch-startup-image" 
          href="/splashscreens/iphone5_splash.png" 
          media="(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)" 
        />
        <link 
          rel="apple-touch-startup-image" 
          href="/splashscreens/iphone6_splash.png" 
          media="(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)" 
        />
        <link 
          rel="apple-touch-startup-image" 
          href="/splashscreens/iphoneplus_splash.png" 
          media="(device-width: 621px) and (device-height: 1104px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)" 
        />
        <link 
          rel="apple-touch-startup-image" 
          href="/splashscreens/iphonex_splash.png" 
          media="(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)" 
        />
        <link 
          rel="apple-touch-startup-image" 
          href="/splashscreens/iphonexr_splash.png" 
          media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)" 
        />
        <link 
          rel="apple-touch-startup-image" 
          href="/splashscreens/iphonexsmax_splash.png" 
          media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)" 
        />
        <link 
          rel="apple-touch-startup-image" 
          href="/splashscreens/ipad_splash.png" 
          media="(min-device-width: 768px) and (max-device-width: 1024px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: portrait)" 
        />
        <link 
          rel="apple-touch-startup-image" 
          href="/splashscreens/ipadpro1_splash.png" 
          media="(min-device-width: 834px) and (max-device-width: 834px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: portrait)" 
        />
        <link 
          rel="apple-touch-startup-image" 
          href="/splashscreens/ipadpro2_splash.png" 
          media="(min-device-width: 1024px) and (max-device-width: 1024px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: portrait)" 
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}