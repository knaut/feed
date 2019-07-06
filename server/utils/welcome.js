import chalk from 'chalk'
import figlet from 'figlet'
import emoji from 'node-emoji'
import Moment from 'moment'

export default function welcome (address) {
  const timestamp = Moment().format('llll')
  const fig = chalk.magenta(
    figlet.textSync('feedServer', {
      horizontalLayout: 'fit',
      verticalLayout: 'fit',
      font: 'Graffiti'
    })
  )

  console.log(fig)
  console.log(
    emoji.get('four_leaf_clover'),
    ``,
    `${chalk.bold.magenta('Feed Server')} started at ${chalk.bold.cyan(address)} on ${chalk.bold.green(timestamp)}`
  )
}
