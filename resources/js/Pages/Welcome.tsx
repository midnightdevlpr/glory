import { Ripple } from '@/components/ui/ripple';
import { PageProps } from '@/types';
import { Head, Link } from '@inertiajs/react';
import { Command } from 'lucide-react';
import Tracking from './Tracking';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function Welcome({ auth }: PageProps) {
    return (
        <>
            <Head title="Welcome" />

            <div className="flex h-svh flex-col">
                <header>
                    <div className="mx-auto flex max-w-7xl items-center justify-between p-6 md:p-10">
                        <a
                            href="#"
                            className="flex items-center gap-2 font-medium"
                        >
                            <div className="bg-primary text-primary-foreground flex h-6 w-6 items-center justify-center rounded-md">
                                <Command className="size-4" />
                            </div>
                            React Inertia Laravel
                        </a>

                        <nav className="flex items-center gap-4">
                            {auth.user ? (
                                <Link
                                    href={route('dashboard')}
                                    className="rounded-md text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-hidden focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                                >
                                    Dashboard
                                </Link>
                            ) : (
                                <>
                                    <Link
                                        href={route('login')}
                                        className="rounded-md text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-hidden focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                                    >
                                        Log in
                                    </Link>
                                    <Link
                                        href={route('register')}
                                        className="rounded-md text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-hidden focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                                    >
                                        Register
                                    </Link>
                                </>
                            )}
                        </nav>
                    </div>
                </header>

                <main className="mx-auto h-1/2 w-full max-w-7xl grow">
                    <div className="relative flex h-full items-center justify-center">
                        <div className="flex flex-col items-center justify-center gap-6 w-full max-w-3xl p-4">
                            <h1 className="text-[clamp(2rem,3vw,5rem)] leading-tight text-center font-bold">
                                We Source Products and Ship On Your Behalf, From 7 Countries
                            </h1>
                            
                            <div className="flex flex-col sm:flex-row gap-2 w-full">
                                <Input 
                                    type="email" 
                                    placeholder="Enter your tracking number" 
                                    className="flex-1 h-14 text-lg px-4" 
                                />
                                <Button 
                                    aria-label="Submit" 
                                    className="w-full sm:w-auto h-14 px-8 text-lg"
                                >
                                    Track your package
                                </Button>
                            </div>
                        </div>

                        <Ripple />
                    </div>
                </main>
                
            </div>
            
        </>
    );
}
