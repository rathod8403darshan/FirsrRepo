import logo from './logo.svg';
import './App.css';
import Funcompo from "./Component/Prectice/Funcompo";
import Classcompo from './Component/Prectice/Classcompo'
import UserefHook from './Component/Prectice/UserefHook'
import Functioncompocrud from './Component/Prectice/Functioncompocrud';
import Functioncompo2 from './Component/FunCompoDeefcrud/Functioncompo2';
import Anim from './Component/Funcompo crud/Anim';
import ClassCompoCrud from './Component/Classcompo crud/ClassCompoCrud';
import ClassCompoWithLyfecycle from './Component/Classcompo crud/ClassCompoWithLyfecycle';
import Perent from './Component/Cardcompo crud/Perent';
import ReactTemp from './Component/ReactTemplate/ReactTemp';
import UseEffectLocalStorege from './Component/Funcompo crud/UseEffectLocalStorege';
import ExamFuncrud from './Component/Funcompo crud/ExamFuncrud';
import Reactmodul from './Component/Funcompo crud/Reactmodul';
import Reactmodul1 from './Component/Funcompo crud/Reactmodul1';
import ValidationCrud from './Component/Funcompo crud/ValidationCrud';
import ApiClass from './Component/Api Crud/ApiClass';
import ApiProductfun from './Component/Api Crud/ApiProductfun';
import ApiProductClass from './Component/Api Crud/ApiProductClass';
import ApiFun from './Component/Api Crud/ApiFun';
import RestApiFun from './Component/ApiWithTokan/RestApiFun';
import FetchApi from './Component/ApiWithTokan/FetchApi';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Home from './Component/ReactRouter/Home';
import About from './Component/ReactRouter/About';
import Contact from './Component/ReactTemplate/Sec11';
import Contact1 from './Component/ReactRouter/Contact';
import Gallery from './Component/ReactRouter/Gallery';
import Information from './Component/ReactRouter/Information';
import Header1 from './Component/ReactRouter/Header1';
import ReactJs from './Component/ReactRouter/ReactJs';
import NodeJs from './Component/ReactRouter/NodeJs';
import ErrorCompo from './Component/ReactRouter/ErrorCompo';
import ReactLogin from './Component/ReactRouter/ReactLogin';
import RouterForm from './Component/ReactRouter/RouterForm';
import RouterTable from './Component/ReactRouter/RouterTable';
import { createContext, useContext, useState } from 'react';
import LoginForm from './Component/ReactRouter/LoginForm';
import SignUpPage from './Component/ReactRouter/SignUpPage';
import ClassCompoTable from './Component/ReactRouter/ClassCompoTable';
import ClassCompoForm from './Component/ReactRouter/ClassCompoForm';
import Loader from './Component/ApiWithTokan/Loader';
import HomeForm from './Component/ApiWhithRouter/HomeForm';
import FormRoute from './Component/ApiWhithRouter/FormRoute';

// import Sircrud from './Component/Sircrud';
export const useCOntext = createContext();

function App() {
  const [LoginVal, setLoginVal] = useState(localStorage.getItem("LoginKey"));



  return (
    <>
      <Loader />
      {/* <Funcompo/> */}
      {/* <Classcompo/> */}
      {/* <UserefHook/> */}
      {/* <Functioncompocrud/> */}
      {/* <Sircrud/> */}
      {/* <Chatcptcrud/> */}
      {/* <Functioncompo2/> */}
      {/* <Anim/> */}
      {/* <ClassCompoCrud/> */}
      {/* <ClassCompoWithLyfecycle/> */}

      {/* <Perent/> */}
      {/* <ReactTemp/> */}
      {/* <UseEffectLocalStorege/> */}


      {/* <ExamFuncrud/> */}

      {/* <Reactmodul/> */}
      {/* <Reactmodul1/> */}
      {/* <ValidationCrud/> */}


      {/* <ApiFun/> */}
      {/* <ApiClass/> */}
      {/* <ApiProductfun/> */}
      {/* <ApiProductClass/> */}

      {/* <RestApiFun/> */}
      {/* <ResApiPost/> */}
      {/* <FetchApi/> */}

      {/* <PerentFirst/> */}





      {/* Router */}
      {/* <useCOntext.Provider value={{ LoginVal, setLoginVal }}>
        <BrowserRouter> */}

      {/* <Header1 /> */}

      {/* <Routes>
            {LoginVal != "true" ?
              <>
                <Route path="/" element={<Navigate to={"/login"} />}></Route>
                <Route path="/login" element={<LoginForm />}></Route>
                <Route path="sign" element={<SignUpPage />}></Route>
              </> :
              <>
                <Route path="/" element={<Navigate to={"/home"} />}></Route>
                <Route path="/home" element={<Home />}></Route>
                <Route path="/about" element={<About />}></Route>
                <Route path="/contact" element={<Contact1 />}></Route>
                <Route path="/gallery" element={<Gallery LoginVal={"LoginVal"} />}>
                  <Route path="react" element={<ReactJs />}></Route>
                  <Route path="node" element={<NodeJs />}></Route>
                </Route>
                <Route path="/information" element={<Information />}>
                  <Route path=":name"></Route>
                </Route>
                <Route path="form" element={<RouterForm />}>
                  <Route path=":id"></Route>
                </Route>
                <Route path="table" element={<RouterTable />}></Route>
                <Route path="classform" element={<ClassCompoForm />}>
                  <Route path=":id"></Route>
                </Route>
                <Route path="classtable" element={<ClassCompoTable />}></Route>

              </>

            }

            <Route path="*" element={<ErrorCompo />}></Route>
          </Routes>
        </BrowserRouter>
      </useCOntext.Provider> */}


      {/* <BrowserRouter>
        <Routes> */}
          {/* <Route path="homeform" element={<HomeForm />}></Route>
          <Route path="formroute" element={<FormRoute />}></Route> */}
        {/* </Routes>
      </BrowserRouter> */}


    </>
  );
}

export default App;
