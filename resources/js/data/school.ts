export interface Program {
    code: string;
    name: string;
    description: string;
    focus: string;
}

export interface Achievement {
    title: string;
    event: string;
    student: string;
    category: string;
    year: string;
    image?: string;
}

export interface Partner {
    name: string;
    field: string;
    logo?: string;
}

export interface Alumni {
    name: string;
    achievement: string;
    program: string;
    graduationYear: string;
    currentRole: string;
    photo?: string;
}

export interface NewsArticle {
    id: string;
    title: string;
    date: string;
    category: string;
    excerpt: string;
    image: string;
    isPrimary?: boolean;
}

export const schoolIdentity = {
    name: 'SMK Negeri 1 Bantul',
    shortName: 'SKANSABA',
    motto: 'Membangun Kompetensi, Karakter, dan Kesiapan Berkarya',
    npsn: '20400345',
    accreditation: 'Akreditasi A',
    address: 'Jl. Parangtritis Km. 11, Sabdodadi, Bantul, D.I. Yogyakarta 55715',
    phone: '(0274) 367156',
    email: 'skansaba@smkn1bantul.sch.id',
    website: 'https://smkn1bantul.sch.id',
    headmaster: {
        name: 'Drs. Mujari, M.Pd.',
        role: 'Kepala SMK Negeri 1 Bantul',
        photo: '/images/school/kepsek.jpeg',
        welcomeMessage: 'Selamat datang di portal SMK Negeri 1 Bantul. Kami berkomitmen menyelenggarakan pendidikan vokasi berkualitas unggul, berkarakter, berdaya saing global, serta selaras dengan kebutuhan dunia usaha dan dunia industri (DUDI).'
    }
};

export const programs: Program[] = [
    {
        code: 'AKL',
        name: 'Akuntansi dan Keuangan Lembaga',
        description: 'Membekali siswa dengan kompetensi pencatatan transaksi, pembukuan keuangan, perpajakan, audit dasar, dan aplikasi akuntansi berbasis komputer.',
        focus: 'Akuntansi Keuangan, Perpajakan, & Software Akuntansi'
    },
    {
        code: 'LPS',
        name: 'Layanan Perbankan Syariah',
        description: 'Mendidik calon tenaga profesional operasional perbankan syariah, teller, customer service, administrasi pembiayaan, dan produk keuangan syariah.',
        focus: 'Operasional Perbankan & Lembaga Keuangan Syariah'
    },
    {
        code: 'MPLB',
        name: 'Manajemen Perkantoran & Layanan Bisnis',
        description: 'Mempersiapkan tenaga terampil dalam manajemen dokumen, korespondensi, otomasi tata kelola perkantoran, hubungan masyarakat, dan layanan bisnis modern.',
        focus: 'Tata Kelola Perkantoran, Arsip Digital, & Administrasi'
    },
    {
        code: 'PM',
        name: 'Pemasaran',
        description: 'Mengembangkan kompetensi bisnis ritel, strategi pemasaran digital (digital marketing), social media handling, salesmanship, dan e-commerce.',
        focus: 'Digital Marketing, Ritel Modern, & Kewirausahaan'
    },
    {
        code: 'DKV',
        name: 'Desain Komunikasi Visual',
        description: 'Fokus pada kreativitas visual, desain grafis, ilustrasi digital, fotografi, videografi, periklanan, dan media interaktif kontemporer.',
        focus: 'Desain Grafis, Multimedia, Fotografi, & Branding'
    },
    {
        code: 'RPL',
        name: 'Rekayasa Perangkat Lunak',
        description: 'Membentuk software developer andal yang menguasai pemrograman web, aplikasi mobile, basis data, logic programming, dan rekayasa sistem.',
        focus: 'Web Development, Mobile Apps, Database, & UI/UX'
    },
    {
        code: 'TKJ',
        name: 'Teknik Komputer & Jaringan',
        description: 'Keahlian dalam instalasi dan konfigurasi perangkat keras komputer, jaringan kabel dan nirkabel, server administration, mikrotik, dan cloud basics.',
        focus: 'Jaringan Komputer, Cisco/Mikrotik, Server, & IT Support'
    },
];

export const achievements: Achievement[] = [
    {
        title: 'Medallion for Excellence',
        event: 'Lomba Kompetensi Siswa (LKS) Tingkat Nasional',
        student: 'Muhammad Eksa Arifa',
        category: 'Web Technologies · Tingkat Nasional',
        year: '2024',
        image: '/images/school/1.jpeg'
    },
    {
        title: 'Juara 1 Tingkat Provinsi DIY',
        event: 'Festival Inovasi & Kewirausahaan Siswa Indonesia (FIKSI)',
        student: 'Haryo Djati R. & Anggara Deni A.',
        category: 'Kewirausahaan & Inovasi · Tingkat Provinsi',
        year: '2024',
        image: '/images/school/2.jpeg'
    },
    {
        title: 'Juara 1 LKS DIY',
        event: 'Lomba Kompetensi Siswa D.I. Yogyakarta',
        student: 'Muhammad Eksa Arifa',
        category: 'Web Technologies · Tingkat DIY',
        year: '2024',
        image: '/images/school/3.jpeg'
    },
    {
        title: 'Juara Umum Kejuruan Vokasi',
        event: 'Ajang Talenta Vokasi DIY',
        student: 'Kontingen Siswa SMKN 1 Bantul',
        category: 'Prestasi Sekolah Vokasi Berdaya Saing',
        year: '2024'
    }
];

export const partners: Partner[] = [
    { name: 'PT Time Excelindo', field: 'Industri IT & Internet Service Provider', logo: '/images/school/pt_time_excelindo_logo.jpeg' },
    { name: 'Gmedia (PT Media Sarana Data)', field: 'Internet & Infrastruktur Jaringan', logo: '/images/school/gmedia.jpg' },
    { name: 'Maspion IT', field: 'Manufaktur Elektronika & Ekosistem IT', logo: '/images/school/maspion.jpeg' },
    { name: 'Seven Inc', field: 'Digital Agency & Creative Media', logo: '/images/school/seven.png' },
    { name: 'Universitas AMIKOM Yogyakarta', field: 'Pendidikan Tinggi Komputer & Kreatif', logo: '/images/school/amikom.png' },
    { name: 'Mirota', field: 'Ritel Modern & Manajemen Bisnis', logo: '/images/school/mirota.png' },
    { name: 'Universitas Ahmad Dahlan', field: 'Perguruan Tinggi', logo: '/images/school/uad.png' },
    { name: 'Universitas Mercu Buana', field: 'Perguruan Tinggi', logo: '/images/school/mercubuana.png' },
    { name: 'Universitas Janabadra', field: 'Perguruan Tinggi', logo: '/images/school/janabadra.png' },
    { name: 'Universitas Teknologi Yogyakarta', field: 'Perguruan Tinggi', logo: '/images/school/uty.png' },
    { name: 'UTDI (Digital University)', field: 'Perguruan Tinggi Teknologi Informasi', logo: '/images/school/utdi.png' },
];

export const alumniProfiles: Alumni[] = [
    {
        name: 'Muhammad Eksa Arifa',
        program: 'Rekayasa Perangkat Lunak',
        graduationYear: '2024',
        achievement: 'Medallion for Excellence LKS Nasional Web Technologies',
        currentRole: 'Software Engineer & Praktisi Web Technologies'
    },
    {
        name: 'Haryo Djati Ramadhan',
        program: 'Desain Komunikasi Visual',
        graduationYear: '2024',
        achievement: 'Juara 1 FIKSI DIY Kategori Inovasi Kewirausahaan',
        currentRole: 'Creative Director & Founder Usaha Kreatif'
    },
    {
        name: 'Anggara Deni Arfianto',
        program: 'Pemasaran',
        graduationYear: '2024',
        achievement: 'Inisiator Proyek Kewirausahaan Muda Terapan',
        currentRole: 'Digital Marketing Specialist'
    }
];

export const newsArticles: NewsArticle[] = [
    {
        id: '1',
        title: 'SMKN 1 Bantul Perkuat Kemitraan Industri melalui Penandatanganan MoU dengan Mitra Strategis',
        date: '1 September 2026',
        category: 'Kerja Sama Industri',
        excerpt: 'SMKN 1 Bantul memperluas jejaring penyelarasan kurikulum vokasi, program magang PKL bersertifikasi, dan rekrutmen kerja lulusan bersama mitra DUDI terkemuka.',
        image: '/images/school/2.jpeg',
        isPrimary: true
    },
    {
        id: '2',
        title: 'Pengumuman dan Pelaksanaan Daftar Ulang Penerimaan Siswa Baru (SPMB)',
        date: '15 Juli 2026',
        category: 'Pengumuman PPDB',
        excerpt: 'Informasi resmi alur verifikasi berkas, orientasi siswa baru, dan persiapan tahun ajaran baru bagi seluruh calon peserta didik yang telah dinyatakan lolos seleksi.',
        image: '/images/school/3.jpeg'
    },
    {
        id: '3',
        title: 'Siswa SMKN 1 Bantul Torehkan Prestasi Gemilang di Ajang LKS Tingkat Nasional',
        date: '10 Agustus 2026',
        category: 'Prestasi Siswa',
        excerpt: 'Delegasi SMKN 1 Bantul membuktikan kualitas kompetensi kejuruan dengan menyabet penghargaan bergengsi bidang Web Technologies di kancah nasional.',
        image: '/images/school/1.jpeg'
    }
];

export const studentWorksData = [
    {
        title: 'Identitas Visual & Kemasan Produk UMKM Bantul',
        program: 'Desain Komunikasi Visual (DKV)',
        description: 'Proyek desain kemasan, logo, dan materi promosi untuk memperkuat daya saing pelaku usaha lokal Bantul.',
        tags: ['Packaging', 'Branding', 'Vector Graphic']
    },
    {
        title: 'Sistem Informasi Presensi & Inventaris Sekolah',
        program: 'Rekayasa Perangkat Lunak (RPL)',
        description: 'Aplikasi berbasis web responsif yang dikembangkan siswa untuk manajemen peminjaman alat praktik dan presensi laboratorium.',
        tags: ['Web Application', 'Database', 'Full Stack']
    },
    {
        title: 'Perancangan Infrastruktur Hotspot & Keamanan Jaringan',
        program: 'Teknik Komputer dan Jaringan (TKJ)',
        description: 'Implementasi manajemen bandwidth, router Mikrotik, dan sistem autentikasi captive portal di lingkungan praktik.',
        tags: ['MikroTik', 'Networking', 'Firewall']
    },
    {
        title: 'Laporan Audit Mini & Tata Kelola Keuangan Digital',
        program: 'Akuntansi dan Keuangan Lembaga (AKL)',
        description: 'Praktik penyusunan laporan keuangan neraca, laba rugi, dan perpajakan menggunakan software akuntansi modern.',
        tags: ['Accounting', 'Financial Report', 'Tax']
    },
    {
        title: 'Kampanye Pemasaran Digital & Manajemen Live Commerce',
        program: 'Pemasaran (PM)',
        description: 'Simulasi promosi produk sekolah melalui konten media sosial, copywriting interaktif, dan optimalisasi katalog daring.',
        tags: ['Digital Marketing', 'Content Creator', 'Sales']
    },
    {
        title: 'Simulasi Pelayanan Front Office & Customer Service Syariah',
        program: 'Layanan Perbankan Syariah (LPS)',
        description: 'Uji kompetensi pelayanan perbankan syariah, pengelolaan kas kecil, dan simulasi akad murabahah bagi nasabah.',
        tags: ['Banking', 'Customer Service', 'Syariah']
    }
];
