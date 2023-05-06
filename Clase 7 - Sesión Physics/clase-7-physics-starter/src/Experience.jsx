import { OrbitControls, Sparkles, Stars } from '@react-three/drei'
import { Perf } from 'r3f-perf'

export default function Experience()
{
    return <>
        <Perf position="top-left" />
        <OrbitControls makeDefault />
        <directionalLight castShadow position={ [ 1, 2, 3 ] } intensity={ 1.5 } />
        <ambientLight intensity={ 0.5 } />
        <Stars radius={60} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        <Sparkles size={5} scale={10}/>

        <mesh castShadow position={ [ - 2, 2, 0 ] }>
            <sphereGeometry />
            <meshStandardMaterial color="yellow" />
        </mesh>

        <mesh castShadow position={ [ 2, 2, 0 ] }>
            <boxGeometry />
            <meshStandardMaterial color="mediumpurple" />
        </mesh>

        <mesh receiveShadow position-y={ - 1.25 }>
            <boxGeometry args={ [ 10, 0.5, 10 ] } />
            <meshStandardMaterial color="orange" />
        </mesh>
    </>
}