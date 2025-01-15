'use client'

import { Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import Link from 'next/link'

const navigation = [
  { name: 'HOME', href: '#' },
  { name: 'PRODUCT', href: '#' },
  { name: 'SHOP', href: '#' },
  { name: 'BLOG', href: '#' },
  { name: 'PAGES', href: '#' },
  { name: 'BUY KUSHI', href: '#' },
]

export function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[300px] sm:w-[400px]">
        <SheetHeader>
          <SheetTitle className="text-left text-2xl font-bold">Kushi.</SheetTitle>
        </SheetHeader>
        <div className="mt-8 flex flex-col space-y-4">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-lg font-medium transition-colors hover:text-primary"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  )
}

