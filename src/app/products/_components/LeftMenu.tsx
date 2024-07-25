import { Input } from '@/components/ui/input'
import React from 'react'

export function LeftMenu() {
  return (
    <aside>

      <div className=' mb-10'>
        <h2 className='text-zinc-800 text-2xl font-semibold'>Playstation 2</h2>
        <span className='text-xs text-muted-foreground'>773 resultados</span>
      </div>

      <nav>

        <div className='mb-8'>
          <h3 className='text-base font-medium mb-[10px] text-neutral-600'>Condição</h3>
          <ul className='text-sm font-light text-neutral-500'>
            <li>Novo</li>
            <li>Usado</li>
            <li>Recondicionado</li>
          </ul>
        </div>

        <div className='mb-8'>
          <h3 className='text-base font-medium mb-[10px] text-neutral-600'>Custo do frete</h3>
          <ul className='text-sm font-light text-neutral-500'>
            <li>Frete grátis</li>
          </ul>
        </div>
      
        <div className='mb-8'>
          <h3 className='text-base font-medium mb-[10px] text-neutral-600'>Lojas oficiais</h3>
          <ul className='text-sm font-light text-neutral-500'>
            <li>Somente lojas oficiais</li>
          </ul>
        </div>

        <div className='mb-8'>
          <h3 className='text-base font-medium mb-[10px] text-neutral-600'>Preço</h3>
          <ul className='text-sm font-light text-neutral-500'>
            <li>Até R$ 200</li>
            <li>R$ 200 a R$550</li>
            <li>Mais de R$500</li>
          </ul>
          <div className='flex items-center gap-2'>
            <Input placeholder='Mínimo' className='max-w-[110px]'/>
            <Input placeholder='Máximo' className='max-w-[110px]'/>
          </div>
        </div>

        <div className='mb-8'>
          <h3 className='text-base font-medium mb-[10px] text-neutral-600'>Pagamento</h3>
          <ul className='text-sm font-light text-neutral-500'>
            <li>Parcelamento sem juros</li>
          </ul>
        </div>

        <div className='mb-8'>
          <h3 className='text-base font-medium mb-[10px] text-neutral-600'>Desconto</h3>
          <ul className='text-sm font-light text-neutral-500'>
            <li>Mais de 5% OFF</li>
            <li>Mais de 10% OFF</li>
            <li>Mais de 15% OFF</li>
            <li>Mais de 20% OFF</li>
            <li>Mais de 25% OFF</li>
          </ul>
        </div>

        <div className='mb-8'>
          <h3 className='text-base font-medium mb-[10px] text-neutral-600'>Localização</h3>
          <ul className='text-sm font-light text-neutral-500'>
            <li>São Paulo</li>
            <li>Rio de Janeiro</li>
            <li>Minas Gerais</li>
            <li>Rio Grande do Sul</li>
            <li>Paraná</li>
            <li>Bahia</li>
            <li>Santa Catarina</li>
            <li>Distrito Federal</li>
            <li>Ceára</li>
            <li className='text-blue-400'>Mostrar mais</li>
          </ul>
        </div>

        <div className='mb-8'>
          <h3 className='text-base font-medium mb-[10px] text-neutral-600'>Origem do frete</h3>
          <ul className='text-sm font-light text-neutral-500'>
            <li>Local</li>
            <li>Internacional</li>
          </ul>
        </div>

        

      </nav>
    </aside>
  )
}
