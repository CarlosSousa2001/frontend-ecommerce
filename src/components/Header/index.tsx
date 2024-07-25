"use client"

import { Input } from "../ui/input";
import { useCallback, useState, type ChangeEvent } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import {
  Cloud,
  CreditCard,
  Github,
  Keyboard,
  LifeBuoy,
  LogOut,
  Mail,
  MessageSquare,
  Plus,
  PlusCircle,
  Settings,
  User,
  UserPlus,
  Users,
  MapPin,
  Search,
  ShoppingCart
} from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from "next/link";

export function Header() {

  const [name, setName] = useState("")

  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const createQueryString = useCallback((name: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString())
    params.set(name, value)

    return params.toString()
  },
    [searchParams]
  )

  function handleSubmitName() {

    if (name) {
      router.push("/products" + '?' + createQueryString('name', name))
    }


  }

  return (
    <div className="max-w-screen-2lg m-auto h-24 p-2 ">
      <div className="flex flex-col gap-4">

        <div className="flex justify-between">
          <Link href={"/"}>
            <h1 className="text-2xl font-extrabold text-zinc-800">Store Livre</h1>
          </Link>

          <div className="flex items-center">
            <Input className="w-[588px]"
              placeholder="Buscar por produtos..."
              value={name}
              onChange={e => setName(e.target.value)}
            />
            <button className="-ml-[32px] cursor-pointer" onClick={handleSubmitName}>

              <Search className="hover:text-zinc-800 text-zinc-600" />

            </button>
          </div>

          <div className="flex items-center gap-4">
            <p>INCLUÍDO</p>
            <div>
              Assine o Plus+ por 18,99
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <MapPin />
            <p>CEP</p>
          </div>

          <div className="flex items-center space-x-4 text-sm">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <p className="cursor-pointer">Categorias</p>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 bg-zinc-800 text-white border-0 space-y-3" align="start">
                <DropdownMenuItem>
                  <span>Celulares</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span>Moda</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span>Casa e Jardim</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span>Eletrônicos, Áudio e Vídeo</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span>Brinquedos e Hobbies</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span>Esportes e Fitness</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span>Carros, Motos e Outros</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span>Supermercado</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span>Livros, Filmes e Música</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span>Bebês</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span>Pet Shop</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span>Mais vendidos</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <p>Ofertas</p>
            <p>Histórico</p>
            <p>Supermecado</p>
            <p>Moda</p>
            <p>Store Play</p>
            <p>Vender</p>
            <p>Contato</p>
          </div>

          <div className="flex items-center space-x-4 text-sm">
            <p>Cria a sua conta</p>
            <p>Entre</p>
            <p>Compras</p>
            <ShoppingCart strokeWidth={1} />
          </div>
        </div>
      </div>
    </div>
  )
}
