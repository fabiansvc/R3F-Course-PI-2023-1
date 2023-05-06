import React from "react";
import { useGLTF } from "@react-three/drei";

export default function Hamburguer(props) {
  const { nodes, materials } = useGLTF("/static/hamburguer.glb");

  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.BottomBun.geometry}
        material={materials.bunMaterial}
      />
      <mesh
        geometry={nodes.Meet.geometry}
        material={materials.meetMaterial}
      />
      {/* <mesh
        geometry={nodes.TopBun.geometry}
        material={materials.bunMaterial}
      /> */}
      <mesh
        geometry={nodes.Cheese.geometry}
        material={materials.cheeseMaterial}
      />
    </group>
  );
}

useGLTF.preload("/static/hamburguer.glb");