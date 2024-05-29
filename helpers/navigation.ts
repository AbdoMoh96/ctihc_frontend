import {
    createLocalizedPathnamesNavigation,
    Pathnames
} from 'next-intl/navigation';

export const defaultLocale = 'ar' as const;
export const locales = ['en', 'de'] as const;
export const localePrefix = undefined;

export const pathnames = {
    '/': '/',
} satisfies Pathnames<typeof locales>;

export const {Link, getPathname, redirect, usePathname, useRouter} =
    createLocalizedPathnamesNavigation({
        locales,
        pathnames,
        localePrefix
    });