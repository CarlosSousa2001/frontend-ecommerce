import { getProductDetails } from '@/api/get-product-details';
import React from 'react'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from '@/components/ui/button';
import { BadgePlus, CornerDownLeft, Gift, ShieldCheck, Undo2 } from 'lucide-react';

async function getitemDetails(id: string) {
  const result = await getProductDetails(id);

  return result;
}

export default async function page({ params: { id } }: { params: { id: string } }) {

  const data = await getitemDetails(id);

  return (
    <div className='max-w-screen-2lg m-auto min-h-screen'>

      <div className='w-full  h-[60px] py-3'>
        <p className='text-sm text-zinc-800'>Buscas relacionadas: <span className='text-xd text-zinc-700'> playstation 6 playstation 4 playstation 3 playstation 7 playstation 1 cd playstation 2 jogos playstation 2</span></p>
      </div>

      <div className='bg-white rounded shadow-sm p-4'>

        <div className='grid grid-cols-3'>

          <div className='col-span-2'>
            <div className='grid grid-cols-2 gap-6'>

              <div className='flex gap-6'>

                <div className='w-[44px] h-[44px] border-2 border-blue-500 rounded p-1'>
                  <img src="https://picsum.photos/200" alt="" />
                </div>

                <div className='w-[380px] h-[450px]'>
                  <img src="https://picsum.photos/200" alt="" className='w-[380px] h-[450px]' />
                </div>

              </div>

              <div className='flex-1'>
                <span className='text-sm text-blue-500'>Acesse a loja oficial</span>
                <p className='text-xs text-muted-foreground mt-4'>Novo | +10mil vendido</p>

                <div className='flex items-center gap-2 mt-4'>
                  <div className='flex items-center justify-center px-1 rounded bg-orange-500'>
                    <span className='text-white text-xs font-medium uppercase'>mais vendido</span>
                  </div>
                  <span className='text-xs text-muted-foreground'>10 em Celulares e smartphone</span>
                </div>

                <div className='mt-4'>
                  <h2 className='text-xl font-bold text-neutral-800'>{data.title}</h2>
                </div>

                <div className='mt-6 flex flex-col'>
                  <span className='text-2xl font-normal'>{data.price.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</span>
                  <span>ou R$ {(data.price * 1.2).toFixed(2)} em <span className='text-sm text-green-600'>{`10x de ${((data.price * 1.2) / 10).toFixed(2)}`}</span> </span>
                  <span className='text-sm text-blue-500 mt-1'>Ver meios de pagamento e promoções</span>
                </div>



                <div className='mt-6'>

                  <p>O que você precisa saber sobre este produto</p>


                  <div className='mt-2'>
                    {data.attributes.map(item => (
                      <div key={item.id} className='flex items-center gap-4 text-sm'>
                        <span>{item.name}:</span>
                        <span>{item.value}</span>
                      </div>
                    ))}
                  </div>

                </div>

              </div>
            </div>

          </div>

          <div className='col-span-1'>
            <Card>
              <CardHeader>
                <CardTitle className='text-base text-green-500'>Frete grátis</CardTitle>
                <CardDescription>Saiba os prazos de entrega e as formas de envio.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className='flex flex-col gap-4'>
                  <div>
                    <p>Quantidade disponível: {data.quantity}</p>
                  </div>
                  <div className='flex flex-col gap-2'>
                    <Button className='bg-blue-500 font-medium hover:bg-blue-600'>Comprar</Button>
                    <Button className='bg-blue-200 text-blue-500 font-medium hover:bg-blue-300 hover:text-blue-600'>Adicionar ao carrinho</Button>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <div className='grid grid-cols-1 gap-4'>

                  <div className='flex gap-2'>
                    <Gift className='w-[28px]' />
                    <p className='text-sm text-muted-foreground'><span className=' text-blue-500'>Concorra a prêmios </span>Ao realizar uma compra, você recebe números da sorte.</p>
                  </div>
                  <div className='flex gap-2'>
                    <CornerDownLeft className='w-[28px]' />
                    <p className='text-sm text-muted-foreground'><span className=' text-blue-500'>Devolução grátis </span>Após a compra, a devolução pode ser feita em 30 dias</p>
                  </div>

                  <div className='flex gap-2'>
                    <ShieldCheck className='w-[32px]' />
                    <p className='text-sm text-muted-foreground'><span className=' text-blue-500'>Compra Garantida </span>receba o produto que está esperando ou devolvemos o dinheiro.</p>
                  </div>

                  <div className='flex items-center gap-2'>
                    <BadgePlus className='w-[18px]' />
                    <p className='text-sm text-muted-foreground'>12 meses de garantia</p>
                  </div>
                </div>
              </CardFooter>
            </Card>

          </div>

        </div>
      </div>
    </div>
  )
}
