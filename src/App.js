import "./App.css";
import Button from "./components/Button";
import Address from "./components/Address";
import Checkbox from "./components/Checkbox";
import Nombre from "./components/Nombre";
import Apellido from "./components/Apellido";
import Telefono from "./components/Telefono";
import Direccion from "./components/Direccion";
import Direccion2 from "./components/Direccion2";
import Ciudad from "./components/Ciudad";
import Estados from "./components/Estados";
import Codigopostal from "./components/Codigopostal";

function App() {
  return (
    <div className=" container mx-auto text-center  mt-48 h-100 w-72  ">
      <div className=" flex flex-wrap p-4  bg-green-200 items-start grid grid-cols-2 gap-2 grid grid-cols-1 sm:grid-cols-2 ">
        <Nombre className=" "></Nombre>
        <Apellido className=" "></Apellido>
        <Telefono className=" "></Telefono>
        <Direccion className=" "></Direccion>
        <Direccion2 className=" "></Direccion2>
        <Ciudad className=" "></Ciudad>
        <Estados className=" "></Estados>
        <Codigopostal className=" "></Codigopostal>
        <div className='flex flex-row h-18 w-64 bg-blue-100 intems-center'>
          <Address></Address>
          <Button></Button>
          <Checkbox></Checkbox>
        </div>
      </div>
    </div>
  );
}
export default App;

