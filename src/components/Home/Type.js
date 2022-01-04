import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "ReactJS/NextJS Developer",
          "Python/Django Expert",
          "Native Mobile App Developer",
          "Solidity/NFT/Smart Contract Developer",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 0,
        delay: 10,
        
      }}
    />
  );
}

export default Type;
