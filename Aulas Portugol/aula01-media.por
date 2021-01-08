programa
{
	funcao inicio ()
	{
		real n1, n2, media
		
		escreval("Informe a nota 1: ")
		leia (n1)
		
		escreval( "Informe a nota 2: ")
		leia (n2)
		
		media = (n1 + n2)/2
		
		escreval("\nA média das notas é: ", media)
se (media < 4)
{ 
escreva("Aluno
reprovado.\n")
}
senao se ((media >= 4) e (media < 6))
{
escreva("Aluno deve realizar
prova final.\n")
}
senao se (media >= 6)
{
escreva("Aluno aprovado.\n")
}
}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 308; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */