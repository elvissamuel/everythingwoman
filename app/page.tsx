import Image from 'next/image'
import Link from 'next/link'
import { Star } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { HeroCarousel } from '@/components/hero-carousel'
import { MobileNav } from '@/components/mobile-nav'

export default function Home() {
  const brand = [
    {name: "zara", quantity: "20"},
    {name: "burberry", quantity: "30"},
    {name: "prada", quantity: "20"},
    {name: "tiffany&co", quantity: "10"},
    {name: "dior", quantity: "50"},
  ]
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <MobileNav />
              <Link href="/" className="text-2xl font-bold">
                EverythingWoman.
              </Link>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <Link href="#" className="text-sm">HOME</Link>
              <Link href="#" className="text-sm">PRODUCT</Link>
              <Link href="#" className="text-sm">SHOP</Link>
              <Link href="#" className="text-sm">BLOG</Link>
              <Link href="#" className="text-sm">PAGES</Link>
              {/* <Link href="#" className="text-sm">BUY KUSHI</Link> */}
            </nav>
            <div className="flex items-center space-x-4">
              <button className="p-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
              <button className="p-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <HeroCarousel />

      {/* New Arrivals */}
      <section className="container mx-auto px-4 py-12 mb-10">
        <div className="md:h-screen grid md:grid-cols-4 md:grid-rows-2 gap-8">
          <Card className="relative p-3 space-y-4 col-span-2 md:row-span-2 bg-cover bg-center"  style={{backgroundImage: `url('/sample1.jpg')`,}}>
          <div className="absolute inset-0 bg-white bg-opacity-30 " style={{background: 'linear-gradient(to right, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0))',}}></div>
            <div className='relative z-10'>
              <h3 className="text-3xl font-semibold">New Arrivals</h3>
              <p className='py-4 text-xl'>Scelerisque parturient sed sem donec sagittis non dis facilisis tristique penatibus mauris montes torquent. </p>
              <ul className="space-y-2 text-xl font-semibold flex flex-col gap-6 mt-6">
                <li>Double Wear</li>
                <li>Women&apos;s Coach</li>
                <li>Boots</li>
                <li>Bottom Colors</li>
                <li>T-Shirts</li>
              </ul>
            </div>
          </Card>
          <Card className="p-3 bg-black text-white col-span-2 md:col-span-1">
            <Button className='border border-slate-300 rounded-2xl px-6 py-4 my-4'>Exclusive Deals</Button>
            <h3 className="text-3xl font-semibold mb-4">Find your 15% holiday discount code</h3>
            <p className="mb-4 italic">TRENDY</p>
            <Button variant="outline" className="text-white border-white">
              Discover Women&apos;s Apparel
            </Button>
          </Card>
          <Card className=" p-3 col-span-2 md:col-span-1 bg-cover bg-center min-h-60" style={{backgroundImage: `url('/sample6.jpg')`,}}>
            <h3 className=" text-xl font-semibold mb-4">New Arrivals</h3>
            {/* <Image
              src="/sample1.jpg"
              alt="Hand bags"
              width={100}
              height={100}
              className="rounded-lg"
            /> */}
          </Card>
          <Card className="p-3 col-span-2 bg-cover bg-center min-h-60" style={{backgroundImage: `url('/fashion2.jpg')`,}}>
            <h3 className="text-3xl font-semibold mb-4 bg-white opacity-30 inline-block">Top Quality</h3>
            {/* <Image
              src="/sample11.jpg"
              alt="Hand bags"
              width={100}
              height={100}
              className="rounded-lg object-contain"
            /> */}
          </Card>
        </div>
      </section>

      {/* Everyday Outfits */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-8">Everyday Outfits</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {Array.from({ length: 8 }).map((_, i) => (
            <Card key={i} className="group">
              <div className="relative aspect-[3/4] mb-4">
                <Image
                  src="/fashion8.jpg"
                  alt="Product image"
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
              <div className="p-4">
                <div className="flex items-center mb-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary" />
                  ))}
                </div>
                <h3 className="font-semibold mb-2">Product Name</h3>
                <p className="text-sm text-muted-foreground">$99.00</p>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Brand Logos */}
      <section className="container mx-auto px-4 py-12 border-t">
        <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
          {brand.map((brand) => (
            <div key={brand.name} className="text-sm font-semibold flex flex-col gap-2 text-center w-full border py-10 opacity-60 uppercase">
              <p className='text-3xl font-semibold'>{brand.name}</p>
              <p>({brand.quantity})</p>
            </div>
          ))}
        </div>
      </section>

      {/* Shop Newest Trends */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-8">Shop Newest Trends</h2>
        <div className="grid gap-4">
          {['Denim Young Skirt', 'Color New Denim Jacket', 'Leather Chelsea Boots'].map((item) => (
            <div key={item} className="flex items-center justify-between p-4 border rounded-lg">
              <div>
                <h3 className="font-semibold">{item}</h3>
                <div className="flex items-center">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary" />
                  ))}
                </div>
              </div>
              <span className="font-semibold">$99</span>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="container mx-auto px-4 py-12 bg-gray-50">
        <h2 className="text-2xl font-bold mb-8 text-center">What Clients Are Saying</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {Array.from({ length: 3 }).map((_, i) => (
            <Card key={i} className="p-6">
              <div className="flex items-center mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground mb-4">
              &quot;Perfect fit, Beautiful Design!&quot;
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gray-200 mr-4" />
                <div>
                  <p className="font-semibold">Customer Name</p>
                  <p className="text-sm text-muted-foreground">Verified Buyer</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 text-center">
          {[
            'Fast Delivery',
            'Quality Products',
            '24/7 Support',
            'Handmade Shopping'
          ].map((feature) => (
            <div key={feature} className="space-y-4">
              <div className="w-12 h-12 mx-auto bg-primary/10 rounded-full" />
              <h3 className="font-semibold">{feature}</h3>
              <p className="text-sm text-muted-foreground">
                Lorem ipsum dolor sit amet
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-2">EverythingWoman.</h2>
            <p className="text-sm opacity-60">
              Your one-stop destination for trendy fashion
            </p>
          </div>
          <div className="flex justify-center space-x-6">
            {['Facebook', 'Twitter', 'Instagram'].map((social) => (
              <Link key={social} href="#" className="opacity-60 hover:opacity-100">
                {social}
              </Link>
            ))}
          </div>
        </div>
      </footer>
    </div>
  )
}

