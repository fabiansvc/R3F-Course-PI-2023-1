import { OrbitControls } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import Hamburguer from './Hamburguer'

export default function Experience()
{
    return <>
        <Perf position="top-left" />
        <OrbitControls makeDefault />
        <directionalLight position={ [ 1, 2, 3 ] } intensity={ 1.5 } />
        <ambientLight intensity={ 0.5 } />
        <Hamburguer/>
    </>
}