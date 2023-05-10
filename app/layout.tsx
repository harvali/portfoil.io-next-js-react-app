import '@styles/globals.css';

export const metadata = {
    title: 'Protfoil.io',
    description: "Homepage for showcasing Harri Vaelilae's webdevelopment portfolio projects",
}

const RootLayout = ({children,}: {children: React.ReactNode}) => {
  return (
    <html lang='en'>
        <body>
            <div className='main'>
                <div className="gradient" />
            </div>
            <main className="app">
                {children}
            </main>
        </body>
    </html>
  )
}

export default RootLayout;