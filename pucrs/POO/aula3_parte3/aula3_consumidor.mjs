import {CarroComPlaca} from "./aula3_carroComPlaca.mjs"
import {Locadora} from "./aula3_senha.mjs"

var locadora = new Locadora()
locadora.adicionarCarro(new CarroComPlaca("ABC-9123"))
locadora.adicionarCarro(new CarroComPlaca("DEF-OU74"))
locadora.consultaCarros()

locadora.abasteceCarro(0, 30)
locadora.consultaCarros()

locadora.abasteceCarro(1, 30)
locadora.abasteceCarro(0, 30)
locadora.consultaCarros()