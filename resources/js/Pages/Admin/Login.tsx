import { PublicLayout } from '@/Components/PublicLayout';
import { Alert } from '@/Components/ui/alert';
import { Button } from '@/Components/ui/button';
import { Input, Label } from '@/Components/ui/input';
import { useForm } from '@inertiajs/react';
import { Lock } from 'lucide-react';
import type { FormEvent } from 'react';

interface Errors {
    email?: string;
    password?: string;
}

export default function AdminLogin({ status }: { status?: string }) {
    const { data, setData, post, processing, errors } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    const submit = (e: FormEvent) => {
        e.preventDefault();
        post('/admin/login');
    };

    return (
        <PublicLayout title="Login Admin — Skansaba BLUD-Mart">
            <section className="flex items-center justify-center px-4 py-16 lg:py-24">
                <div className="w-full max-w-md">
                    <div className="mb-8 text-center">
                        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary-50">
                            <Lock className="h-7 w-7 text-primary-600" aria-hidden="true" />
                        </div>
                        <h1 className="mt-4 text-2xl font-bold text-gray-900">Login Admin</h1>
                        <p className="mt-1 text-sm text-gray-500">
                            Masuk untuk mengelola data portal Skansaba BLUD-Mart.
                        </p>
                    </div>

                    <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
                        {status && (
                            <Alert className="mb-4" variant="success">
                                {status}
                            </Alert>
                        )}

                        <form onSubmit={submit} className="space-y-4">
                            <div>
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    value={data.email}
                                    onChange={(e) => setData('email', e.target.value)}
                                    required
                                    autoFocus
                                    autoComplete="username"
                                    placeholder="admin@smkn1bantul.sch.id"
                                />
                                {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
                            </div>

                            <div>
                                <Label htmlFor="password">Password</Label>
                                <Input
                                    id="password"
                                    type="password"
                                    value={data.password}
                                    onChange={(e) => setData('password', e.target.value)}
                                    required
                                    autoComplete="current-password"
                                />
                                {errors.password && (
                                    <p className="mt-1 text-xs text-red-600">{errors.password}</p>
                                )}
                            </div>

                            <div className="flex items-center gap-2">
                                <input
                                    id="remember"
                                    type="checkbox"
                                    checked={data.remember}
                                    onChange={(e) => setData('remember', e.target.checked)}
                                    className="h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                                />
                                <Label htmlFor="remember" className="mb-0">
                                    Ingat saya
                                </Label>
                            </div>

                            <Button type="submit" disabled={processing} className="w-full">
                                {processing ? 'Memproses...' : 'Masuk'}
                            </Button>
                        </form>
                    </div>
                </div>
            </section>
        </PublicLayout>
    );
}
