import {
    createLocalizedPathnamesNavigation,
} from 'next-intl/navigation';

export const defaultLocale = 'ar' as const;
export const locales = ['en', 'ar'] as const;
export const localePrefix = undefined;

export const pathnames: any = {};

export const {Link, getPathname, redirect, usePathname, useRouter} =
    createLocalizedPathnamesNavigation({
        locales,
        pathnames,
        localePrefix
    });