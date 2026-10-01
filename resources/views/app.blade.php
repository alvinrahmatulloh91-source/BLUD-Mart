<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <title inertia>{{ $title ?? config('app.name', 'Skansaba BLUD-Mart') }}</title>

        <meta name="description" inertia="{{ $description ?? 'SMK Negeri 1 Bantul — pendidikan vokasi, kompetensi, karakter, dan karya.' }}" />
        <meta name="author" content="SMKN 1 Bantul" />

        {{-- Open Graph --}}
        <meta property="og:type" content="website" inertia />
        <meta property="og:site_name" content="SMK Negeri 1 Bantul" />
        <meta property="og:title" inertia="{{ $title ?? config('app.name', 'Skansaba BLUD-Mart') }}" />
        <meta property="og:description" inertia="{{ $description ?? 'SMK Negeri 1 Bantul — pendidikan vokasi, kompetensi, karakter, dan karya.' }}" />
        <meta property="og:url" inertia="{{ url()->current() }}" />
        <meta property="og:image" content="{{ asset('images/logo-skansaba.svg') }}" />
        <meta name="twitter:card" content="summary" />
        <link rel="canonical" href="{{ url()->current() }}" />

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
