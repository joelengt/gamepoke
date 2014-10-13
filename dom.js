function Pokemon(n,v,a)
{	
	this.grito="Pika!!!";
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
	var pikachu =new Pokemon("Pikachu",100,55);
	var bulbasaur =new Pokemon("Bulbasaur",90,50);
	var charmander=new Pokemon("Charmander",100,52);
	var rattata =new Pokemon("Rattata",40,20);
	//asignado los gritos
	bulbasaur.grito="Basuuurr!!";
	charmander.grito="Char char!!";
	rattata.grito="rattattata!!";
	//insetando datos en html
	alert("Escoge Pokemon : Pikachu=(P) ,Bulbasaur(B),Charmander(C),Rattata(R)");
	var elec=prompt("Insertar Pokemon");
	var img = document.createElement("img");	

		if(elec=="P" || elec=="p")
		{
			var a=document.getElementById("nombrePokemon");
			a.innerHTML=("Nombre Pokemon: "+pikachu.nombre);
			var b=document.getElementById("datosPokemon1");
			b.innerHTML=("Vida Pokemon: "+ pikachu.vida+ "<br/>" +"Ataque Pokemon: "+pikachu.ataque +"<br/>"+"Grito Pokemon: "+pikachu.grito);
			img.src="image/a.png";
			document.getElementById("imagen").appendChild(img);
		}
		else if (elec=="B" || elec=="b")
		{
			var c=document.getElementById("nombrePokemon");
			c.innerHTML=("Nombre Pokemon: "+ bulbasaur.nombre);
			var d=document.getElementById("datosPokemon1");
			d.innerHTML=("Vida Pokemon: "+ bulbasaur.vida+ "<br/>"+ "Ataque Pokemon: "+bulbasaur.ataque+"<br/>"+ "Grito Pokemon: "+ bulbasaur.grito);
			img.src="image/d.png";
			document.getElementById("imagen").appendChild(img);
		}
		else if (elec=="C" || elec=="c")
		{
			var e=document.getElementById("nombrePokemon");
			e.innerHTML=("Nombre Pokemon: "+ charmander.nombre);
			var f=document.getElementById("datosPokemon1");
			f.innerHTML=("Vida Pokemon: "+ charmander.vida+ "<br/>"+ "Ataque Pokemon: "+charmander.ataque+"<br/>"+ "Grito Pokemon: "+ charmander.grito);
			img.src="image/c.gif";
			document.getElementById("imagen").appendChild(img);
		}
		else if( elec=="R" || elec=="r")
		{
			var g=document.getElementById("nombrePokemon");
			g.innerHTML=("Nombre Pokemon: "+ rattata.nombre);
			var h=document.getElementById("datosPokemon1");
			h.innerHTML=("Vida Pokemon: "+ rattata.vida+ "<br/>"+ "Ataque Pokemon: "+rattata.ataque+"<br/>"+ "Grito Pokemon: "+ rattata.grito);
			img.src	="image/b.png";
			document.getElementById("imagen").appendChild(img);
		}
		else
		{
			var l =document.getElementById("nombrePokemon");
			l.innerHTML="ELEMENTO NO CORRECTO (REFRESQUE CON F5)";
		}
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
