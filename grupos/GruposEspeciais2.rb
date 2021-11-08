texto = 'supermercado superação hiperMERCADO Mercado'

puts texto.scan(/(?:super)[\wÀ-ú]+/i).join(' ')

# ?<= Positive Lookbehind (procura termo anterior)
puts texto.scan(/(?<=super)[\wÀ-ú]+/i).join(' ')

# ?<! Negative Lookbehind
puts texto.scan(/(?<!super)mercado/i)