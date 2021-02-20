const usuario = {
	idCurso:{
		demand: true,
		alias: 'i'
	},
		
	nombre:{
		demand: true,
		alias: 'n'
	},

	cedula:{
		demand: true,
		alias: 'c'
	}
}
const fs = require('fs');
const argv = require('yargs')
			.command ('inscribir','matricular', usuario)
			.argv

let matriculaCurso=[{
	
	idCurso: 1,
	nombreCurso: 'Creacion y edicion de contenido para instagram',
	tiempoCurso: '25 horas',
	costoCurso: '$30.000 pesos'
	},

	{
	idCurso: 2,
	nombreCurso: 'Cake desing: tecnicas decorativas',
	tiempoCurso: '20 horas',
	costoCurso: '$70.000 pesos'
	},
	
	{
	idCurso: 3,
	nombreCurso: 'Visualizacion arquitectonica',
	tiempoCurso: '40 horas',
	costoCurso: '$180.000 pesos'
	} 
];

function mostrarCursos() {

	var time=0;

	for (let i = 0; i < matriculaCurso.length; i ++){
		time+= 2000; 
		setTimeout(()=>{
			console.log(matriculaCurso[i].idCurso);
			console.log(matriculaCurso[i].nombreCurso);
			console.log(matriculaCurso[i].tiempoCurso);
			console.log(matriculaCurso[i].costoCurso);
		}, time);
	}
}
let crearArchivo = () => {
	texto = '¡Se ha matriculado con exito!' + '\n' +
			'Curso matriculado: ' + matriculaCurso[argv.idCurso-1].nombreCurso + '\n' +
			'Duración: ' + matriculaCurso[argv.idCurso-1].tiempoCurso + '\n' +
			'Costo: ' + matriculaCurso[argv.idCurso-1].costoCurso + '\n' +
	        'Nombre de usuario: ' + argv.nombre + '\n' +
	        'Cédula: ' + argv.cedula;
	        

	fs.writeFile('pantalla.txt',texto,(err)=>{
		if (err) throw (err);
		console.log('¡Se ha matriculado con exito!')
	});
}

if (argv.idCurso == undefined){
	mostrarCursos();
}else if(argv.idCurso != 1 && argv.idCurso != 2 && argv.idCurso != 3){
	console.log('El Id del curso que ingresó, no existe');
	mostrarCursos();
}else{
	crearArchivo();

}
