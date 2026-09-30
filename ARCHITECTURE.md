# SKANSABA BLUD-MART — Architecture Plan

## Scope

One Laravel application renders the public site with React, TypeScript, and Inertia. The public site contains the landing page and the central directory of Unit Produksi. Each unit appears only as a directory card; `website_url` is an optional external destination. There are no internal unit pages, catalogs, or transactions.

## Routes

| Method | Path | Page |
| --- | --- | --- |
| GET | `/` | Landing |
| GET | `/semua-unit` | Central Unit Produksi directory |
| GET | `/tentang-blud` | BLUD information |
| GET | `/karya-siswa` | Student work information |

There are no `/unit/{slug}` routes.

## Data

MySQL table `units`: `id`, `name`, `slug`, `category`, nullable `description`, nullable `logo`, nullable `website_url`, `is_active`, `sort_order`, and timestamps. The initial seed uses the twelve unit names supplied in the project brief. Unprovided details stay empty or use a clearly generic category; no invented offerings or websites are added.

## Code layout

- `app/Models/Unit.php` — Eloquent model and active/ordered scopes.
- `app/Http/Controllers/LandingController.php` — shared public pages and unit query.
- `database/migrations`, `database/seeders` — schema and supplied directory entries.
- `resources/js/Pages/{Landing,Portal,About,StudentWorks}` — four public pages.
- `resources/js/Components` — shared public layout, navbar, footer, cards, and grid.
- `routes/web.php` — public routes only, plus optional minimal CMS routes if retained.

The shared components are `PublicLayout`, `SiteNavbar`, `SiteFooter`, `UnitCard`, and `UnitGrid`. The directory uses a responsive 1/2/3-column layout.
