import React from 'react';
import type { HeadersFunction, LoaderFunctionArgs } from "@remix-run/node";
import { Link, Outlet, useLoaderData, useRouteError } from "@remix-run/react";
import { boundary } from "@shopify/shopify-app-remix/server";
import { AppProvider } from "@shopify/shopify-app-remix/react";
import { NavMenu } from "@shopify/app-bridge-react";
import polarisStyles from "@shopify/polaris/build/esm/styles.css?url";

import { authenticate } from "../shopify.server";
import LanguageToggle from "../components/LanguageToggle";
import { useLanguage } from "../contexts/LanguageContext";

export const links = () => [{ rel: "stylesheet", href: polarisStyles }];

export const loader = async ({ request }: LoaderFunctionArgs) => {
  await authenticate.admin(request);

  return { apiKey: process.env.SHOPIFY_API_KEY || "" };
};

import AppShell from "../components/Layout/AppShell";

export default function App() {
  const { apiKey } = useLoaderData<typeof loader>();
  const { language } = useLanguage();

  return (
    <AppProvider isEmbeddedApp apiKey={apiKey}>
      <NavMenu>
        <Link to="/app" rel="home">
          {language === 'en' ? 'Dashboard' : (language === 'ar' ? 'لوحة القيادة' : 'לוח בקרה')}
        </Link>
        <Link to="/app/import">
          {language === 'en' ? 'Import List' : (language === 'ar' ? 'قائمة الاستيراد' : 'רשימת ייבוא')}
        </Link>
        <Link to="/app/suppliers">
          {language === 'en' ? 'Suppliers' : (language === 'ar' ? 'الموردين' : 'ספקים')}
        </Link>
        <Link to="/app/support">
          {language === 'en' ? 'Support' : (language === 'ar' ? 'الدعم' : 'תמיכה')}
        </Link>
      </NavMenu>


      <AppShell>
        <Outlet />
      </AppShell>
    </AppProvider>
  );
}

// Shopify needs Remix to catch some thrown responses, so that their headers are included in the response.
export function ErrorBoundary() {
  return boundary.error(useRouteError());
}

export const headers: HeadersFunction = (headersArgs) => {
  return boundary.headers(headersArgs);
};
