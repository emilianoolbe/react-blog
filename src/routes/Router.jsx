import React from 'react'
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import { Footer } from '../components/layout/Footer';
import { Header } from '../components/layout/Header';
import { Nav } from '../components/layout/Nav';
import { Sidebar } from '../components/layout/Sidebar';
import { Article } from '../components/pages/article/Article';
import { Articles } from '../components/pages/articles/Articles';
import { Create } from '../components/pages/create/Create';
import { Edit } from '../components/pages/edit/Edit';
import { Error404 } from '../components/pages/Error/Error404';
import { Home } from '../components/pages/home/Home';
import { Search } from '../components/pages/search/Search';

export const Router = () => {
  return (
    <BrowserRouter>
        <div className="layout">

          {/* Header */}
          <Header />

          {/* Nav */}
          <Nav />

          {/* Contenido Principal */}
          <section className="content">

            <Routes>
                  <Route path='/' exact={true} element={<Home />} />
                  <Route path='/home' exact={true} element={<Home />}/>
                  <Route path='/articles' exact={true} element={<Articles />}/>
                  <Route path='/create' exact={true} element={<Create />}/>
                  <Route path='/search/:search' exact={true} element={<Search />} />
                  <Route path='/article/:id' exact={true} element= {<Article />} />
                  <Route path='/edit/:id' exact={true} element= {<Edit />} />
                  <Route path='*' element={<Error404 />}/>

            </Routes>

          </section>

          {/* Barra lateral */}

            <Sidebar />

          {/* Pie de página */}
          <Footer />
        </div>
    </BrowserRouter>
  )
}
