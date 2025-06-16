import createMiddleware from 'next-intl/middleware';

import { NextRequest } from 'next/server';
import { routing } from '@/i18n/routing';

const nextIntlMiddleware = createMiddleware(routing);

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(nl|en)/:path*', '/((?!api|_next|_vercel|.*\\..*).*)'],
};

export default function middleware(request: NextRequest) {
  return nextIntlMiddleware(request);
}
