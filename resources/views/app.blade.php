<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

{{--    <title inertia>{{ config('app.name', 'Laravel') }}</title>--}}
    <title>Prestige & Luxury Cars For Sale, UK’s No1 Luxury Dealer | Luxuria Auto</title>
    <title inertia>Prestige & Luxury Cars For Sale, UK’s No1 Luxury Dealer | Luxuria Auto</title>
    <meta name="description" content="Luxuria Auto: Dealers in Prestige & Luxury Cars. Based In Lancashire, North West. We Go The Extra Mile. We Offer Comprehensive Help With Luxury Car Insurance, Tracking & The Best Car Warranties Available.">

    {{--        <link rel="preconnect" href="https://fonts.bunny.net">--}}
    {{--        <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />--}}

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap" rel="stylesheet">

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&display=swap" rel="stylesheet">

    <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-element-bundle.min.js"></script>

    <meta name="google-site-verification" content="TNQ5Dpizz9V5aHn9dbYLD5B0PMXvcIGgLITc1wWhQeM" />

    <meta name="description" content="Luxuria Auto: Dealers in Prestige & Luxury Cars. Based In Lancashire, North West. We Go The Extra Mile. We Offer Comprehensive Help With Luxury Car Insurance, Tracking & The Best Car Warranties Available.">

    <!-- Google Tag Manager -->
    <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-M669WF3M');</script>
    <!-- End Google Tag Manager -->

    <!-- Scripts -->
    @routes
    @vite(['resources/js/app.js', "resources/js/Pages/{$page['component']}.vue"])
    @inertiaHead

    <!-- Meta Pixel Code -->
    <script>
        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '1052046476242556');
        fbq('track', 'PageView');
        </script>
        <noscript><img height="1" width="1" style="display:none"
        src="https://www.facebook.com/tr?id=1052046476242556&ev=PageView&noscript=1"
        /></noscript>
        <!-- End Meta Pixel Code -->

    </head>
<body class="font-sans antialiased bg-black">
<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-M669WF3M"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->
@inertia
</body>
</html>
