import '../styles/styles.scss'
import Header from '../src/components/header'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <Header />
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}
