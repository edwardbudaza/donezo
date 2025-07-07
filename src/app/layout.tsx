import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { cn } from '@/lib/utils';
import './globals.css';

const font = Inter({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Donezo – Modern Project Management for Agile Teams',
  description:
    'Donezo is a fast, intuitive project management platform built for teams who value clarity, flexibility, and focus. Plan tasks, track progress, and ship faster — all in one place.',
  keywords: [
    'project management',
    'task tracking',
    'agile workflow',
    'team collaboration',
    'issue tracker',
    'kanban board',
    'productivity tool',
    'project planning',
    'developer workflow',
    'work management app',
    'scrum board',
    'sprint planning',
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(font.className, 'min-h-screen antialiased')}>{children}</body>
    </html>
  );
}
