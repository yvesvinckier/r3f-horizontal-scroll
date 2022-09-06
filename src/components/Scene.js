import * as THREE from "three";
import React, { useRef, useState, Suspense } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Image, Scroll, ScrollControls, useScroll } from "@react-three/drei";
import projects from "./projects";

function Item({ index, position, scale, url, clicked, setClicked, name }) {
  const ref = useRef();

  const scroll = useScroll();
  const [hovered, setHover] = useState(false);

  useFrame((state, delta) => {
    const y = scroll.curve(
      index / projects.length - 1.5 / projects.length,
      4 / projects.length
    );
    // This function runs at the native refresh rate inside of a shared render-loop
    ref.current.material.scale[1] = ref.current.scale.y = THREE.MathUtils.damp(
      ref.current.scale.y,
      clicked === index ? 5 : 4 + y,
      8,
      delta
    );
    ref.current.material.scale[0] = ref.current.scale.x = THREE.MathUtils.damp(
      ref.current.scale.x,
      clicked === index ? 4.7 : scale[0],
      6,
      delta
    );
    if (clicked !== null && index < clicked)
      ref.current.position.x = THREE.MathUtils.damp(
        ref.current.position.x,
        position[0] - 2,
        6,
        delta
      );
    if (clicked !== null && index > clicked)
      ref.current.position.x = THREE.MathUtils.damp(
        ref.current.position.x,
        position[0] + 2,
        6,
        delta
      );
    if (clicked === null || clicked === index)
      ref.current.position.x = THREE.MathUtils.damp(
        ref.current.position.x,
        position[0],
        6,
        delta
      );
    ref.current.material.grayscale = THREE.MathUtils.damp(
      ref.current.material.grayscale,
      hovered || clicked === index ? 0 : Math.max(0, 1 - y),
      6,
      delta
    );
  });
  return (
    <>
      <Image
        ref={ref}
        position={position}
        scale={scale}
        url={url}
        onPointerOver={() => setHover(true)}
        onPointerOut={() => setHover(false)}
        onClick={() => setClicked(clicked ? null : index)}
      ></Image>
    </>
  );
}

function Items({ w = 1.2, gap = 0.2, clicked, setClicked }) {
  const { width } = useThree((state) => state.viewport);
  const xW = w + gap;
  return (
    <ScrollControls
      horizontal
      damping={10}
      pages={(width - xW + projects.length * xW) / width}
    >
      <Scroll>
        {projects.map((project, i) => (
          <Item
            key={i}
            index={i}
            position={[i * xW, 0, 0]}
            scale={[w, 4, 1]}
            url={project.url}
            clicked={clicked}
            setClicked={setClicked}
            name={project.name}
          />
        ))}
      </Scroll>
    </ScrollControls>
  );
}

const Scene = () => {
  const [clicked, setClicked] = useState(null);
  return (
    <>
      <Canvas
        gl={{ antialias: false }}
        dpr={[1, 1.5]}
        onPointerMissed={() => setClicked(null)}
      >
        <Suspense fallback={null}>
          <Items clicked={clicked} setClicked={setClicked} />
        </Suspense>
      </Canvas>
    </>
  );
};

export default Scene;
