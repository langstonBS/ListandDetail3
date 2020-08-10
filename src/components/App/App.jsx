import React from 'react';
import Character from '../Character/Character';
import Header from '../Header/Header';
import { Pagination } from '../Character/Pagination';

export default function App() {
  return(
    <>
      <Header/>
      <Character />
      <Pagination />
    </>
  )
}
  