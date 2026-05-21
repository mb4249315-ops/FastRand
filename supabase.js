# Package.json 5  
  
export const metadata = {  
  title: 'FastRand',  
  description: 'Fast task app'  
}  
  
export default function RootLayout({ children }) {  
  return (  
    <html lang="en">  
      <body>{children}</body>  
    </html>  
  )  
}  