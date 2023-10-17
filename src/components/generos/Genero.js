import React, { useEffect, useState } from 'react'
import { obtenerGeneros } from '../../services/GeneroService'
import Title from '../ui/Title'
import Modal from './Modal'
import Table from './Table'
import ButtonModal from '../ui/ButtonModal'

export default function Genero() {

    const [generos, setGeneros] = useState([])

  useEffect(() => {
    listarGeneros()
  }, [])

  const listarGeneros = async () => {
    try {
        const { data } = await obtenerGeneros()
        //console.log(response.data)
        setGeneros(data)
    } catch (e) {
        console.log(e)
    }

  }

  return (
    <>
      <Title title={'Generos'}/>
      <Table generos={generos}/>
      <ButtonModal title='Nuevo Genero'/>
      <Modal />
    </>
  )
}
