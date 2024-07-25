import React from 'react'

export  function ProductNotFound() {
  return (
    <div className='bg-white p-6 w-full h-[200px] flex items-center justify-center'>
      <div className='flex  flex-col'>
        <p className='text-xl font-semibold'>Não há anúncios que correspondam à sua busca</p>
        <ol>
          <li>Você pode procurar itens por categoria</li>
        </ol>
      </div>
    </div>
  )
}
