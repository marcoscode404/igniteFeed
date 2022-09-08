# Para criar a aplicação com o Vite 
-- npm create vite@latest

# biblioteca de icones
-- phosphoricons
--> npm i phosphor-react

# biblioteca para formatar datas e horas
* npm i date-fns

## ------------------------------------ ##
#  Programação imperativa
- O que deve ser feito / o tipo de Programação mias comum
-- ao invez de colocar um passo a passo que deixa meu codigo menos legivel

# Programação declarativa
- deixar  o codigo mais legivel não acessar pelo evento diretamente

## ------------------------------------ ##
# Key no React 
- ajuda o react a entender quais informações já estavam em tela se a lista for atualizada
- tira a necessidade de reconstruir a interface do total zero
# Por que não usar index como key?
- se eu mudar algum valor de posição o id muda tbm mas o index não
  exemplo: se caso eu mudar a ordem dos elementos [5,2,4,3,1]
        com id: [5,2,4,3,1]
        com index: [1,2,3,4,5]
# 3 momentos em que um componente é renderizado novamente no React 

1. Quando o estado altera;
2. Quando a propriedade altera
3. Quando um componente pai renderiza novamente