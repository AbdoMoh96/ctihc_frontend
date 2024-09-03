import {
    createLocalizedPathnamesNavigation,
} from 'next-intl/navigation';

export const defaultLocale = 'ar' as const;
export const locales = ['en', 'ar'] as const;
export const localePrefix = undefined;

export const pathnames = {
    '/': '/',
    '/about': '/about',
    '/reports' : '/reports',
    '/group-structure': '/group-structure',
    '/news' : '/news',
    '/contact' : '/contact',
    '/partners' : '/partners'
}

export const {Link, getPathname, redirect, usePathname, useRouter} =
    createLocalizedPathnamesNavigation({
        locales,
        pathnames,
        localePrefix
    });