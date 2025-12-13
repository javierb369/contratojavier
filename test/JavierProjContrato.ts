import { expect } from "chai";
import { ethers } from "hardhat";
// Importación del contrato (ajusta si la Opción B no funciona, pero es la más común)
import { JavierProjContrato } from "../typechain-types/contracts"; 

// La función 'describe' agrupa las pruebas para TU contrato, no para 'Lock'
describe("JavierProjContrato", function () {
    let contrato: JavierProjContrato;
    let propietario: any; 
    const MENSAJE_INICIAL = "Mensaje Inicial de Prueba";

    // Función que se ejecuta antes de CADA prueba para desplegar el contrato
    beforeEach(async function () {
        // 1. Obtener las cuentas de prueba
        // Esto reemplaza a cualquier función "deployOneYearLockFixture"
        [propietario] = await ethers.getSigners();

        // 2. Obtener la fábrica del contrato (usando el nombre de tu contrato)
        const ContratoFactory = await ethers.getContractFactory("JavierProjContrato");

        // 3. Desplegar el contrato con el argumento del constructor
        // Nota: Si usas 'as JavierProjContrato' necesitas que la Opción B funcione.
        // Si sigue dando problemas, quítalo y deja solo: ContratoFactory.deploy(MENSAJE_INICIAL);
        contrato = await ContratoFactory.deploy(MENSAJE_INICIAL); 
        await contrato.waitForDeployment();
    });

    // ----------------------------------------------------------------------
    // PRUEBA 1: Verificar el mensaje inicial (Constructor)
    // ----------------------------------------------------------------------
    it("Debería desplegarse y establecer el mensaje inicial correctamente", async function () {
        // Llamada a función view/pure
        const mensajeActual = await contrato.obtenerMensaje();
        expect(mensajeActual).to.equal(MENSAJE_INICIAL);
    });

    // ----------------------------------------------------------------------
    // PRUEBA 2: Verificar la función de actualización (Transacción)
    // ----------------------------------------------------------------------
    it("Debería permitir la actualización del mensaje", async function () {
        const nuevoMensaje = "Nuevo Mensaje de Javier";
        
        // Ejecutamos la transacción, firmada por el propietario
        await contrato.connect(propietario).actualizarMensaje(nuevoMensaje);

        // Verificamos el cambio
        const mensajeActualizado = await contrato.obtenerMensaje();
        
        expect(mensajeActualizado).to.equal(nuevoMensaje);
    });
});