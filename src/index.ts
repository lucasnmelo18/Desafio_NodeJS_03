/**
 * Required External Modules
 */

import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import { rawListeners } from "process";

dotenv.config();

/**
 * App Variables
 */

if (!process.env.PORT) {
	process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);

const app = express();

/**
 *  App Configuration
 */

app.use(helmet());
app.use(cors());
app.use(express.json());

/**
 * Server Activation
 */

app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`);


	// CÓDIGO PARA ATENDER OS REQUERIMENTOS

	const readline = require ('readline');
	const rl = readline.createInterface ({
		input: process.stdin,
		output: process. stdout
	});

	
	


		//R01
	rl.question('Quantos alunos tem? \n', (name: any) => {
		//R02
		console.log('A quantidade de alunos é: ' + name);
    //R03
		rl.question(`Qual o nome do aluno(a)? \n`, (name : any) =>{
			console.log(`Ola ${name}`);
		rl.question(`Qual a nota do ${name}? \n`, (nota : number) => {
			console.log(`A nota do(a) ${name} é: ${nota}`)
	
	rl.question(`Qual o nome do aluno(a)? \n`, (name2 : any) =>{
			console.log(`Ola ${name2}`);
		rl.question(`Qual a nota do ${name2}? \n`, (nota2 : number) => {
			console.log(`A nota do(a) ${name2} é: ${nota2}`)
	
	
	rl.question(`Qual o nome do aluno(a)? \n`, (name3 : any) =>{
		console.log(`Ola ${name3}`);
	rl.question(`Qual a nota do ${name3}? \n`, (nota3 : number) => {
		console.log(`A nota do(a) ${name3} é: ${nota3}`)
	
	
		//#R04
		console.log('A maior nota é:' + Math.max(nota, nota2, nota3));
	
	});
	});
	});
	});
	});
	});
	});
	});
