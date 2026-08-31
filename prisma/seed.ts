import { PrismaClient, Role, ProductType, PublicationStatus } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Starting database seed...')

  // ============================================
  // CREATE ADMIN USERS
  // ============================================
  
  const hashedPassword = await bcrypt.hash('admin123', 10)

  const superAdmin = await prisma.user.upsert({
    where: { email: 'superadmin@smkn1bantul.sch.id' },
    update: {},
    create: {
      email: 'superadmin@smkn1bantul.sch.id',
      name: 'Super Administrator',
      password: hashedPassword,
      role: Role.SUPER_ADMIN,
    },
  })

  const bludAdmin = await prisma.user.upsert({
    where: { email: 'bludadmin@smkn1bantul.sch.id' },
    update: {},
    create: {
      email: 'bludadmin@smkn1bantul.sch.id',
      name: 'BLUD Administrator',
      password: hashedPassword,
      role: Role.BLUD_ADMIN,
    },
  })

  console.log('✅ Admin users created')

  // ============================================
  // CREATE UNITS (Unit Produksi / Unit Usaha)
  // ============================================

  const units = [
    {
      name: 'K-Tuba Digital Printing',
      slug: 'k-tuba-digital-printing',
      description: 'Layanan digital printing profesional untuk kebutuhan sekolah dan umum. Banner, poster, brosur, dan berbagai media cetak lainnya.',
      category: 'Digital Printing / Produksi',
      isPublic: true,
      isActive: true,
      isDemo: true,
    },
    {
      name: 'Solusi Sistem Digital (SSD)',
      slug: 'solusi-sistem-digital',
      description: 'Pengembangan perangkat lunak dan sistem informasi. Website, aplikasi, dan solusi digital untuk berbagai kebutuhan.',
      category: 'Pengembangan Perangkat Lunak',
      isPublic: true,
      isActive: true,
      isDemo: true,
    },
    {
      name: 'Jari Manis',
      slug: 'jari-manis',
      description: 'Unit produksi kreatif dengan fokus pada karya seni dan desain.',
      category: 'Kreatif & Desain',
      isPublic: true,
      isActive: true,
      isDemo: true,
    },
    {
      name: 'Skansaba IT Solution',
      slug: 'skansaba-it-solution',
      description: 'Layanan IT dan digital service. Pembuatan website, sistem informasi, konsultasi IT, dan solusi digital.',
      category: 'IT & Digital Service',
      isPublic: true,
      isActive: true,
      isDemo: true,
    },
    {
      name: 'LKM Mitra Siswa Abadi',
      slug: 'lkm-mitra-siswa-abadi',
      description: 'Lembaga Keuangan Mikro untuk siswa. Layanan keuangan dan pembiayaan untuk kebutuhan produktif.',
      category: 'Keuangan & Perbankan',
      isPublic: true,
      isActive: true,
      isDemo: true,
    },
    {
      name: 'SKANSABA STORE',
      slug: 'skansaba-store',
      description: 'Toko merchandise dan produk kreatif sekolah. Produk non-makanan, atribut sekolah, dan produk kreatif siswa.',
      category: 'Retail & Merchandise',
      isPublic: true,
      isActive: true,
      isDemo: true,
    },
    {
      name: 'Cafetaria',
      slug: 'cafetaria',
      description: 'Unit produksi makanan dan minuman (tidak ditampilkan di portal publik).',
      category: 'F&B',
      isPublic: false,
      isActive: true,
      isDemo: true,
    },
  ]

  const createdUnits: Record<string, any> = {}

  for (const unitData of units) {
    const unit = await prisma.unit.upsert({
      where: { slug: unitData.slug },
      update: {},
      create: unitData,
    })
    createdUnits[unit.slug] = unit
    console.log(`✅ Unit created: ${unit.name}`)
  }

  // Assign admin to K-Tuba as example
  const ktubaAdmin = await prisma.user.upsert({
    where: { email: 'ktuba@smkn1bantul.sch.id' },
    update: {},
    create: {
      email: 'ktuba@smkn1bantul.sch.id',
      name: 'Admin K-Tuba',
      password: hashedPassword,
      role: Role.UNIT_ADMIN,
      unitId: createdUnits['k-tuba-digital-printing'].id,
    },
  })

  await prisma.unit.update({
    where: { id: createdUnits['k-tuba-digital-printing'].id },
    data: { adminId: ktubaAdmin.id },
  })

  // ============================================
  // CREATE PRODUCTS FOR K-TUBA DIGITAL PRINTING
  // ============================================

  const ktubaProducts = [
    {
      name: 'Cetak Banner',
      slug: 'cetak-banner',
      description: 'Banner vinyl berkualitas tinggi untuk berbagai keperluan promosi dan acara.',
      type: ProductType.SERVICE,
      price: 25000,
      estimatedDuration: '1-2 hari',
      isDemo: true,
    },
    {
      name: 'Cetak Brosur',
      slug: 'cetak-brosur',
      description: 'Brosur lipat dengan berbagai ukuran dan jenis kertas.',
      type: ProductType.SERVICE,
      price: 15000,
      estimatedDuration: '2-3 hari',
      isDemo: true,
    },
    {
      name: 'Cetak Poster',
      slug: 'cetak-poster',
      description: 'Poster A3+ dengan kualitas cetak tinggi.',
      type: ProductType.SERVICE,
      price: 10000,
      estimatedDuration: '1 hari',
      isDemo: true,
    },
    {
      name: 'Desain Grafis',
      slug: 'desain-grafis',
      description: 'Jasa desain grafis untuk banner, brosur, logo, dan kebutuhan visual lainnya.',
      type: ProductType.DIGITAL_SERVICE,
      price: 50000,
      estimatedDuration: '2-3 hari',
      isDemo: true,
    },
    {
      name: 'Cetak Kartu Nama',
      slug: 'cetak-kartu-nama',
      description: 'Kartu nama premium dengan berbagai pilihan bahan.',
      type: ProductType.SERVICE,
      price: 30000,
      estimatedDuration: '2-3 hari',
      isDemo: true,
    },
  ]

  for (const productData of ktubaProducts) {
    await prisma.product.upsert({
      where: { 
        slug: productData.slug + '-k-tuba' // Unique slug per unit
      },
      update: {},
      create: {
        ...productData,
        slug: productData.slug,
        unitId: createdUnits['k-tuba-digital-printing'].id,
        status: PublicationStatus.PUBLISHED,
      },
    })
  }

  console.log('✅ K-Tuba products created')

  // ============================================
  // CREATE SERVICES FOR SSD
  // ============================================

  const ssdServices = [
    {
      name: 'Pembuatan Website',
      slug: 'pembuatan-website',
      description: 'Jasa pembuatan website responsive untuk profil perusahaan, toko online, atau kebutuhan lainnya.',
      priceFrom: 500000,
      duration: '7-14 hari',
      requirements: 'Konten, logo, referensi desain',
      isDemo: true,
    },
    {
      name: 'Sistem Informasi',
      slug: 'sistem-informasi',
      description: 'Pengembangan sistem informasi berbasis web untuk manajemen data dan proses bisnis.',
      priceFrom: 1000000,
      duration: '14-30 hari',
      requirements: 'Dokumentasi kebutuhan, flow bisnis',
      isDemo: true,
    },
    {
      name: 'Aplikasi Mobile',
      slug: 'aplikasi-mobile',
      description: 'Pengembangan aplikasi mobile Android/iOS untuk berbagai kebutuhan.',
      priceFrom: 2000000,
      duration: '30-60 hari',
      requirements: 'Spesifikasi fitur, desain UI/UX',
      isDemo: true,
    },
    {
      name: 'Konsultasi IT',
      slug: 'konsultasi-it',
      description: 'Konsultasi terkait teknologi informasi dan transformasi digital.',
      priceFrom: 150000,
      duration: 'Per sesi',
      requirements: 'Topik konsultasi',
      isDemo: true,
    },
  ]

  for (const serviceData of ssdServices) {
    await prisma.service.upsert({
      where: { 
        slug: serviceData.slug + '-ssd'
      },
      update: {},
      create: {
        ...serviceData,
        slug: serviceData.slug,
        unitId: createdUnits['solusi-sistem-digital'].id,
        status: PublicationStatus.PUBLISHED,
      },
    })
  }

  console.log('✅ SSD services created')

  // ============================================
  // CREATE PRODUCTS FOR SKANSABA STORE
  // ============================================

  const storeProducts = [
    {
      name: 'Kaos Sekolah',
      slug: 'kaos-sekolah',
      description: 'Kaos identitas sekolah dengan berbagai ukuran.',
      type: ProductType.PRODUCT,
      price: 75000,
      isDemo: true,
    },
    {
      name: 'Tas Sekolah',
      slug: 'tas-sekolah',
      description: 'Tas sekolah berkualitas dengan desain eksklusif.',
      type: ProductType.PRODUCT,
      price: 150000,
      isDemo: true,
    },
    {
      name: 'ID Card Holder',
      slug: 'id-card-holder',
      description: 'Tempat ID card dengan lanyard sekolah.',
      type: ProductType.PRODUCT,
      price: 25000,
      isDemo: true,
    },
    {
      name: 'Notebook Custom',
      slug: 'notebook-custom',
      description: 'Notebook dengan cover custom desain sekolah.',
      type: ProductType.PRODUCT,
      price: 35000,
      isDemo: true,
    },
  ]

  for (const productData of storeProducts) {
    await prisma.product.upsert({
      where: { 
        slug: productData.slug + '-store'
      },
      update: {},
      create: {
        ...productData,
        slug: productData.slug,
        unitId: createdUnits['skansaba-store'].id,
        status: PublicationStatus.PUBLISHED,
      },
    })
  }

  console.log('✅ SKANSABA STORE products created')

  // ============================================
  // CREATE STUDENT WORKS
  // ============================================

  const studentWorks = [
    {
      title: 'Website E-Commerce UMKM',
      slug: 'website-e-commerce-umkm',
      description: 'Platform e-commerce untuk membantu UMKM lokal go digital.',
      major: 'RPL',
      unitId: createdUnits['solusi-sistem-digital'].id,
      studentTeam: 'Tim SSD 2024',
      year: 2024,
      isDemo: true,
    },
    {
      title: 'Sistem Informasi Perpustakaan',
      slug: 'sistem-informasi-perpustakaan',
      description: 'Digitalisasi manajemen perpustakaan sekolah.',
      major: 'RPL',
      unitId: createdUnits['skansaba-it-solution'].id,
      studentTeam: 'Tim IT Solution',
      year: 2024,
      isDemo: true,
    },
    {
      title: 'Branding K-Tuba',
      slug: 'branding-k-tuba',
      description: 'Redesign identitas visual K-Tuba Digital Printing.',
      major: 'DKV',
      unitId: createdUnits['k-tuba-digital-printing'].id,
      studentTeam: 'Tim Desain',
      year: 2024,
      isDemo: true,
    },
  ]

  for (const workData of studentWorks) {
    await prisma.studentWork.upsert({
      where: { slug: workData.slug },
      update: {},
      create: {
        ...workData,
        status: PublicationStatus.PUBLISHED,
      },
    })
  }

  console.log('✅ Student works created')

  // ============================================
  // CREATE PORTFOLIOS
  // ============================================

  for (const [slug, unit] of Object.entries(createdUnits)) {
    if (unit.isPublic && !unit.isDemo) continue

    await prisma.portfolio.create({
      data: {
        title: `Portfolio ${unit.name}`,
        description: 'Kumpulan karya dan proyek yang telah diselesaikan.',
        unitId: unit.id,
        category: 'Proyek',
        year: 2024,
        status: PublicationStatus.PUBLISHED,
      },
    })
  }

  console.log('✅ Portfolios created')

  // ============================================
  // CREATE SCHOOL PAGES
  // ============================================

  const schoolPages = [
    {
      title: 'Profil',
      slug: 'profil',
      content: 'Informasi profil SMKN 1 Bantul.',
      status: PublicationStatus.PUBLISHED,
    },
    {
      title: 'Program Keahlian',
      slug: 'program-keahlian',
      content: 'Daftar program keahlian yang tersedia.',
      status: PublicationStatus.PUBLISHED,
    },
    {
      title: 'Kesiswaan',
      slug: 'kesiswaan',
      content: 'Informasi kesiswaan dan kegiatan siswa.',
      status: PublicationStatus.PUBLISHED,
    },
  ]

  for (const pageData of schoolPages) {
    await prisma.schoolPage.upsert({
      where: { slug: pageData.slug },
      update: {},
      create: pageData,
    })
  }

  console.log('✅ School pages created')

  console.log('\n🎉 Database seeding completed successfully!')
  console.log('\n📧 Login credentials:')
  console.log('   Super Admin: superadmin@smkn1bantul.sch.id / admin123')
  console.log('   BLUD Admin: bludadmin@smkn1bantul.sch.id / admin123')
  console.log('   Unit Admin (K-Tuba): ktuba@smkn1bantul.sch.id / admin123')
}

main()
  .catch((e) => {
    console.error('❌ Seed failed:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
