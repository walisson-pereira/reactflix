import React from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';

function CadastroVideo() {
    return (
      <PageDefault>
        <h1>
            Página de Cadastro de Categoria
        </h1>
        
        

        <Link to="/">
            Ir para home
        </Link>
      </PageDefault>
    )
  }

  export default CadastroVideo;