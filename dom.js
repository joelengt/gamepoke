function Pokemon(n,v,a)
{
	this.grito="Pika!!!";
	this.nombre=n;
	this.vida=v;
	this.ataque=a;
	this.gritar=function()
	{
		aler(this.grito);
	}
}

function Inicio()
{
	var pikachu=new Pokemon("Pikachu",100,55);
	var bulbasaur=new Pokemon("Bulbasaur",90,50);
	var charmander=new Pokemon("charmander",100,60);	
	var rattata=new Pokemon("rattata",60,20);
	rattata.grito="Rattttaaaaatata!!";
	bulbasaur.grito="Basourrr!!";
	charmander.grito="CHARR!!!";
	nombrePokemon.innerText=("Nombre Pokemon :"+bulbasaur.nombre);
	datosPokemon1.innerText=("Vida Pokemon: "+bulbasaur.vida);
	datosPokemon2.innerText=("Ataque Pokemon: "+bulbasaur.ataque);
	datosPokemon3.innerText=("Grito Pokemon: "+bulbasaur.grito);


}




/*function Pokemon(n,v,a)
{
	this.grito="Pika!!";
	this.nombre=n;
	this.vida=v;
	this.ataque=a;
	this.gritar=function()
	{
		alert(this.grito);
	}
}

function Inicio()
{
	var pikachu= new Pokemon("Pikachu",100,55);
	var	bulbasaur= new Pokemon("bulbasaur",90,50);
	var	rattata= new Pokemon("rattata",60,30);
	var charmander= new Pokemon("Charmander",100,60);
	rattata.grito="Rattttaaaaatata!!";
	bulbasaur.grito="Basourrr!!";
	charmander.grito="CHARR!!!";
	nombrePokemon.innerText=("Nombre Pokemon: "+charmander.nombre);
	datosPokemon1.innerText=("Vida Pokemon: "+charmander.vida);
	datosPokemon2.innerText=("Ataque Pokemon: "+charmander.ataque);
	datosPokemon3.innerText=("Grito Pokemon: "+charmander.grito);

}*/
/*
function Pokemon(n,v,a)
{
	this.grito="Pika!!";
	this.nombre=n;
	this.vida=v;
	this.ataque=a;
	this.gritar= function()
	{
		alert(this.grito);
	}
}
function Inicio()
{
	var rattata = new Pokemon("rattata",55,40);
	var pikachu= new Pokemon("pikachu",100,55);
	pikachu.vida=pikachu.vida-13;
	pikachu.grito="Rattttaaaaatata!!!!";
	nombrePokemon.innerText=("Nombre pokemon: "+pikachu.nombre);
	datosPokemon1.innerText=("Vida: "+pikachu.vida);
	datosPokemon2.innerText=("Ataque: "+pikachu.ataque);
	datosPokemon3.innerText=("Grito: "+pikachu.grito);
}
*/


	//



	//document.write("SALUDOS");
	//var pi= 3.14159;
	//pi=Math.floor(pi);
	//pi=Math.ceil(pi);
	//document.write(pi);
	/*
var numeros;
numeros=Math.max(10,15,100);
document.write(numeros);

function mostrar(pos)
{
 document.write(pos.coords.latitude + ","+ pos.coords.longitude);
}
navigator.geolocation.getCurrentPosition(mostrar);*/
/*
function Pokemon()
{
	var estructuraPokemon=
	{
		nombre:"Pikachu",
		tipo:"Electrico",
		vida:100,
		ataque:55
	};
	return estructuraPokemon;
}
var pikachu =Pokemon();
var bulbasaur=Pokemon();
bulbasaur.nombre="Bulbasaur";
bulbasaur.vida=90;
bulbasaur.ataque=50;

//document.write(pikachu.nombre);
console.log(pikachu);*/
