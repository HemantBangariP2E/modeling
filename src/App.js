import { Canvas } from "@react-three/fiber";
import { ContactShadows, Environment, OrbitControls } from "@react-three/drei";
import Scene from "./Scene";
import { Suspense } from "react";
import "./App.css"
import CanvasLoader from "./Loader";



function App() {
  

  return(
    <>
      <Canvas style={{height:"100vh"}}>
        <ambientLight/>
        <OrbitControls/>
        <Suspense fallback={<CanvasLoader/>}>
          <Scene/>
        </Suspense> 
        <Environment preset="sunset"/>
        <ContactShadows position={[0,-2.5,0]} opacity={0.5} scale={50} far={10} resolution={256} color="#000000"/>
      </Canvas>
    </>
  )
  
   
  
}

export default App;
