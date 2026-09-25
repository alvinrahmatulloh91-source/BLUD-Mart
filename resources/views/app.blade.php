<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <title inertia>{{ $title ?? config('app.name', 'Skansaba BLUD-Mart') }}</title>

        <meta name="description" inertia="{{ $description ?? 'Portal terintegrasi Unit Produksi SMKN 1 Bantul.' }}" />
        <meta name="author" content="SMKN 1 Bantul" />

        {{-- Open Graph --}}
        <meta property="og:type" content="website" inertia />
        <meta property="og:site_name" content="Skansaba BLUD-Mart" />
        <meta property="og:title" inertia="{{ $title ?? config('app.name', 'Skansaba BLUD-Mart') }}" />
        <meta property="og:description" inertia="{{ $description ?? 'Portal terintegrasi Unit Produksi SMKN 1 Bantul.' }}" />
        <meta property="og:url" inertia="{{ url()->current() }}" />
        <meta property="og:image" content="{{ asset('images/og-image.png') }}" />

        {{-- Favicon --}}
        <link rel="icon" type="image/svg+xml" href="{{ asset('favicon.svg') }}" />

        {{-- Fonts --}}
        <link rel="preconnect" href="https://fonts.bunny.net" />
        <link href="https://fonts.bunny.net/css?family=figtree:400,500,600,700,800&display=swap" rel="stylesheet" />

        @viteReactRefresh
        @vite(['resources/css/app.css', 'resources/js/app.tsx'])
        @inertiaHead
    </head>
    <body class="font-sans antialiased">
        @inertia
    </body>
</html>
