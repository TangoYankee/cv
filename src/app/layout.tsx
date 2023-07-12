import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'CV: Timothy Miller',
  description: 'Curriculum Vitae for Timothy Miller',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
