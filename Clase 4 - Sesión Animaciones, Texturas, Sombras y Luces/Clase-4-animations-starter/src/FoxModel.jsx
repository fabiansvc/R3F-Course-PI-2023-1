import { useAnimations, useGLTF } from '@react-three/drei'
import { useRef } from 'react';

export default function FoxModel(props)
{
    const group = useRef();
    const { nodes, materials, animations } = useGLTF("/static/Fox.glb");
    const { actions } = useAnimations(animations, group);

    return (
        <group ref={group} {...props} dispose={null}>
          <group>
            <group name="root">
              <primitive object={nodes._rootJoint} />
              <skinnedMesh
                name="fox"
                geometry={nodes.fox.geometry}
                material={materials.fox_material}
                skeleton={nodes.fox.skeleton}
              />
            </group>
          </group>
        </group>
      );
}

useGLTF.preload("/static/Fox.glb");
