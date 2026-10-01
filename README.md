# SKANSABA BLUD-MART

Digital ecosystem website for SMK Negeri 1 Bantul. A single Laravel application serves the school landing page and the central directory for Unit Produksi, with React, TypeScript, Inertia, Tailwind CSS, and Vite.

## Architecture

- `/` is the school landing page.
- `/profil`, `/program-keahlian`, `/informasi`, and `/prestasi` are school information pages.
- `/blud` introduces Skansaba BLUD-Mart.
- `/blud/units` lists active Unit Produksi records from MySQL.
- Unit cards contain summary information and an optional external `website_url`. A missing URL is shown as “Website Segera Hadir”. There are no internal unit detail pages.
- `/ppdb`, `/bkk`, `/karya-siswa`, and `/tentang-blud` provide informational pages.
- `/admin/units` is the protected CMS for unit name, category, description, logo, external URL, active state, and ordering.

The database contains the `units` table for this portal. The application does not implement product catalogs, carts, checkout, payments, transactions, inventory, or a chatbot.

`_astro_backup/` is an archived legacy project; it is not part of Laravel routing or the active frontend build.

## Requirements

- PHP 8.3+ with `pdo_mysql`
- MySQL 8+
- Composer
- Node.js and npm

## Local setup

1. Create a MySQL database named `skansaba_blud`.
2. Copy `.env.example` to `.env` and set `DB_HOST`, `DB_PORT`, `DB_DATABASE`, `DB_USERNAME`, and `DB_PASSWORD`.
3. Install dependencies with `composer install` and `npm install`.
4. Run `php artisan key:generate`.
5. Run `php artisan migrate --seed`.
6. Run `npm run dev` and `php artisan serve`.

The seeder inserts the twelve Unit Produksi names already present in the project without overwriting existing logo or website URL edits. Existing units outside the seed list are left unchanged. There is no default admin password; create an authorized admin account before using the CMS.

## Checks

- `php artisan test`
- `npx tsc --noEmit`
- `npm run build`

Public SEO endpoints: `/sitemap.xml` and `/robots.txt`.
