import { ethers } from "hardhat";

async function main() {
  // 1. Obtener el contrato (asegúrate de que el nombre coincida con tu contrato Solidity)
  const Contrato = await ethers.getContractFactory("JavierProjContrato");

  // 2. Desplegar el contrato, pasando el argumento al constructor
  const mensajeInicial = "Primer Mensaje de Javier"; 
  const javierProj = await Contrato.deploy(mensajeInicial);

  // 3. Esperar a que la transacción se confirme en la blockchain
  await javierProj.waitForDeployment();

  // 4. Imprimir la dirección donde se desplegó el contrato
  console.log(`Contrato JavierProjContrato desplegado en: ${await javierProj.getAddress()}`);
}

// Ejecutar la función principal
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
