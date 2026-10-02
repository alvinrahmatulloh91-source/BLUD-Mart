<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" class="scroll-smooth">
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <title inertia>{{ $title ?? config('app.name', 'SMK Negeri 1 Bantul') }}</title>

        <meta name="description" inertia="{{ $description ?? 'SMK Negeri 1 Bantul — Membangun kompetensi, karakter, dan kesiapan berkarya melalui pendidikan vokasi berkualitas.' }}" />
        <meta name="author" content="SMK Negeri 1 Bantul" />

        {{-- Favicon --}}
        <link rel="icon" type="image/png" href="{{ asset('images/school/logo.png') }}" />
        <link rel="apple-touch-icon" href="{{ asset('images/school/logo.png') }}" />

        {{-- Open Graph --}}
        <meta property="og:type" content="website" inertia />
        <meta property="og:site_name" content="SMK Negeri 1 Bantul" />
        <meta property="og:title" inertia="{{ $title ?? config('app.name', 'SMK Negeri 1 Bantul') }}" />
        <meta property="og:description" inertia="{{ $description ?? 'SMK Negeri 1 Bantul — Membangun kompetensi, karakter, dan kesiapan berkarya melalui pendidikan vokasi berkualitas.' }}" />
        <meta property="og:url" inertia="{{ url()->current() }}" />
        <meta property="og:image" content="{{ asset('images/school/logo.png') }}" />
        <meta name="twitter:card" content="summary" />
        <link rel="canonical" href="{{ url()->current() }}" />

        {{-- Fonts --}}
        <link rel="preconnect" href="https://fonts.bunny.net" />
        <link href="https://fonts.bunny.net/css?family=figtree:400,500,600,700,800&display=swap" rel="stylesheet" />

        @viteReactRefresh
        @vite(['resources/css/app.css', 'resources/js/app.tsx'])
        @inertiaHead
    </head>
    <body class="font-sans antialiased bg-white text-[#172033] selection:bg-[#0033A0] selection:text-white">
        @inertia
    </body>
</html>
