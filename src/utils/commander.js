import {Command} from 'commander'

const commander = new Command()

commander
   .option('--mode <mode>', 'Entorno de ejecucion del server')
   .parse()

export default commander