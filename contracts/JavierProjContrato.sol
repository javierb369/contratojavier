// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28; // Versión del compilador, debe coincidir con hardhat.config.ts

/**
 * @title JavierProjContrato
 * @dev Contrato de ejemplo simple para almacenar un mensaje.
 */
contract JavierProjContrato {
    // Variable de estado que almacena el mensaje
    string private mensaje;

    // Constructor: se ejecuta solo una vez al desplegar el contrato
    constructor(string memory _mensajeInicial) {
        mensaje = _mensajeInicial;
    }

    // Función para actualizar el mensaje (escribir en la blockchain)
    function actualizarMensaje(string memory _nuevoMensaje) public {
        mensaje = _nuevoMensaje;
    }

    // Función para leer el mensaje (leer de la blockchain)
    function obtenerMensaje() public view returns (string memory) {
        return mensaje;
    }
}