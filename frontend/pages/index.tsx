// pages/index.tsx
import React, { useState } from 'react';
import AddProductModal from '@/components/modal/ProductModal';
import { useFetchClients } from '@/hooks/useFetchClients';
import ClientTable from '@/components/table/ClientTable';
import Pagination from '@/components/table/Pagination';
import { FormData } from '@/validations';

import * as S from './styles'

const ITEMS_PER_PAGE = 10;

export default function Home() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  console.log(currentPage)
  const [currentUser, setCurrentUser] = useState<FormData | null>(null);

  const { data: clients, isLoading, refetch: refreshList } = useFetchClients(currentPage, ITEMS_PER_PAGE);
  const totalPages = Math.ceil((clients && (clients?.items.length + clients?.remainingRecords) || 0) / ITEMS_PER_PAGE);

  const handleNextPage = () => currentPage < totalPages && setCurrentPage(currentPage + 1);
  const handlePreviousPage = () => currentPage > 1 && setCurrentPage(currentPage - 1);

  return (
    <div className="p-6 bg-white rounded-xl shadow-sm h-full">
      <S.Container className="mb-6">
        <h1 className="text-2xl font-semibold">Meus Clientes</h1>
        <button onClick={() => setModalOpen(true)} className="text-white px-4 py-2 rounded-md">
          Adicionar Cliente
        </button>
      </S.Container>

      <AddProductModal open={isModalOpen} handleClose={() => { setModalOpen(false); setCurrentUser(null); }} user={currentUser} refresh={refreshList} />

      {isLoading ? (
        <div className='flex items-center justify-center h-40'>
          <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-500"></div>
        </div>
      ) : (
        <ClientTable clients={clients?.items || []} onViewClient={(client) => { setCurrentUser(client); setModalOpen(true); }} refresh={refreshList} />
      )}

      {/* <Pagination currentPage={currentPage} totalPages={totalPages} onNext={handleNextPage} onPrevious={handlePreviousPage} /> */}
    </div>
  );
}
