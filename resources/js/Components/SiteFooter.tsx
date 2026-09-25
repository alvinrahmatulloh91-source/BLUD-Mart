import { Link } from '@inertiajs/react';
import { ExternalLink, MapPin } from 'lucide-react';

export function SiteFooter() {
    return (
        <footer className="border-t border-gray-200 bg-white">
            <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
                <div className="grid gap-8 md:grid-cols-3">
                    <div>
                        <div className="flex items-center gap-3">
                            <img
                                src="/images/logo-skansaba.svg"
                                alt="Logo SMKN 1 Bantul"
                                className="h-10 w-10 rounded-lg"
                            />
                            <div className="leading-tight">
                                <p className="font-bold text-primary-900">SKANSABA BLUD-MART</p>
                                <p className="text-xs text-gray-500">
                                    Portal Digital BLUD SMKN 1 Bantul
                                </p>
                            </div>
                        </div>
                        <p className="mt-4 flex items-start gap-2 text-sm text-gray-500">
                            <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                            SMK Negeri 1 Bantul, Kabupaten Bantul, Daerah Istimewa Yogyakarta
                        </p>
                    </div>

                    <div>
                        <p className="text-sm font-semibold text-gray-900">Navigasi</p>
                        <ul className="mt-3 space-y-2 text-sm text-gray-600">
                            <li>
                                <Link href="/" className="hover:text-primary-700">
                                    Beranda BLUD
                                </Link>
                            </li>
                            <li>
                                <Link href="/semua-unit" className="hover:text-primary-700">
                                    Semua Unit
                                </Link>
                            </li>
                            <li>
                                <Link href="/karya-siswa" className="hover:text-primary-700">
                                    Karya Siswa
                                </Link>
                            </li>
                            <li>
                                <Link href="/tentang-blud" className="hover:text-primary-700">
                                    Tentang BLUD
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <p className="text-sm font-semibold text-gray-900">Tautan</p>
                        <ul className="mt-3 space-y-2 text-sm text-gray-600">
                            <li>
                                <a
                                    href="https://smkn1bantul.sch.id/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1.5 hover:text-primary-700"
                                >
                                    Web SMKN 1 Bantul
                                    <ExternalLink className="h-3.5 w-3.5" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-10 border-t border-gray-200 pt-6 text-center text-xs text-gray-400">
                    © {new Date().getFullYear()} Skansaba BLUD-Mart — SMK Negeri 1 Bantul.
                </div>
            </div>
        </footer>
    );
}
