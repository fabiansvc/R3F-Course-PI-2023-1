import { OrbitControls, Sparkles, Stars } from '@react-three/drei'
import { BallCollider, CuboidCollider, Physics, RigidBody } from '@react-three/rapier'
import { Perf } from 'r3f-perf'
import { useRef, useState } from 'react'

export default function Experience() {
    const boxRef = useRef(null)
    
    const [hitSound] = useState(()=>new Audio("/hit.mp3"))

    const onHandleBox = () => {
        boxRef.current.applyImpulse({
            x: 0,
            y: 5,
            z: 0
        })
        boxRef.current.applyTorqueImpulse({
            x: Math.random() - 0.5,
            y: Math.random() - 0.5,
            z: Math.random() - 0.5
        })
    }

    const onCollisionEnterBox = ()=>{
        hitSound.currenTime = 0
        hitSound.volume = Math.random()
        hitSound.play()
    }
    return <>
        <Perf position="top-left" />
        <OrbitControls makeDefault />
        <directionalLight castShadow position={[1, 2, 3]} intensity={1.5} />
        <ambientLight intensity={0.5} />
        <Stars radius={60} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        <Sparkles size={5} scale={10} />

        <Physics debug={true} gravity={[0, -9.8, 0]}>
            <RigidBody
                colliders="ball"
                position={[0, 2, 0]}
                //gravityScale={-0.2}
                restitution={0}
            >
                <mesh castShadow >
                    <sphereGeometry />
                    <meshStandardMaterial color="yellow" />
                </mesh>
                {/* <BallCollider args={[1.5]}/> */}
            </RigidBody>

            {/* <RigidBody>
                <mesh castShadow position={[2, 2, 0]}>
                    <boxGeometry args={[3, 2, 1]} />
                    <meshStandardMaterial color="mediumpurple" />
                </mesh>
                <mesh castShadow position={ [ 2, 2, 3 ]} >
                    <boxGeometry args={[1, 1, 1]}/>
                    <meshStandardMaterial color="mediumpurple" />
                </mesh>
            </RigidBody> */}

            {/* <RigidBody
                colliders="hull"
                position={[2, 0, 0]}
                rotation={[Math.PI / 2, 0, 0]}
            >
                <mesh castShadow >
                    <torusGeometry args={[1, 0.5, 16, 32]} />
                    <meshStandardMaterial color="mediumpurple" />
                </mesh>
                <CuboidCollider args={[1.5, 1.5, 0.5]}/>
            </RigidBody> */}



            <RigidBody
                ref={boxRef}
                onCollisionEnter={onCollisionEnterBox}
                mass={50}
            >
                <mesh
                    onClick={onHandleBox}
                    castShadow
                    position={[1, 0, 0]}
                    restitution={0}
                    friction={0}
                >
                    <boxGeometry args={[1, 1, 1]} />
                    <meshStandardMaterial color="mediumpurple" />
                </mesh>
            </RigidBody>

            <RigidBody
                type='fixed'
      
                friction={0}
            >
                <mesh receiveShadow position-y={- 1.25}>
                    <boxGeometry args={[10, 0.5, 10]} />
                    <meshStandardMaterial color="orange" />
                </mesh>
            </RigidBody>
        </Physics>
    </>
}