import type { Metadata, Viewport } from "next";
import "./globals.css";
const baseUrl = "https://rounak-gera.carrd.co";
export const metadata: Metadata = {
 title: "Rounak Gera | AI/ML Engineer & Full Stack Developer",
 description: "Rounak Gera builds practical AI systems across medical imaging, retrieval augmented generation, edge deployment, and full-stack products.",
 metadataBase: new URL(baseUrl), alternates: { canonical: "/" },
 openGraph: { title: "Rounak Gera | AI/ML Engineer", description: "Research to production. Medical imaging, retrieval systems, and full-stack products.", url: baseUrl, siteName: "Rounak Gera", type: "website", images:["/opengraph-image"] },
 twitter: { card: "summary_large_image", title: "Rounak Gera | AI/ML Engineer", description: "Research to production. Medical imaging, retrieval systems, and full-stack products.", images:["/opengraph-image"] },
 robots: { index: true, follow: true },
};
export const viewport: Viewport = { themeColor: [{ media:"(prefers-color-scheme: light)", color:"#f8f9fb" }, { media:"(prefers-color-scheme: dark)", color:"#101218" }] };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
 return <html lang="en"><body>{children}<script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({"@context":"https://schema.org","@type":"Person","name":"Rounak Gera","jobTitle":"AI/ML Engineer and Full Stack Developer","url":baseUrl,"email":"mailto:gerarounak890@gmail.com","sameAs":["https://linkedin.com/in/rounak-gera-229a46287","https://github.com/rounak890","https://rounak-gera.carrd.co"]})}} /></body></html>;
}
