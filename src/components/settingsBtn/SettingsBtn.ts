import { PropsWithRouter, withRouter } from '../../hocs/withRouter'
import Block from '../../packages/block/Block'
import template from './settingsBtn.hbs'

interface SettingsBtnProps extends PropsWithRouter {
  to: string
  title: string
  events: {
    click: (e: Event) => void
  }
}

class SettingsBtnLink extends Block<SettingsBtnProps> {
  constructor(props: SettingsBtnProps) {
    super({
      ...props,
      events: {
        click: () => this.navigate()
      }
    })
  }

  navigate() {
    this.props.router.go(this.props.to)
  }

  render() {
    return this.compile(template, { ...this.props })
  }
}

export const SettingsBtn = withRouter(SettingsBtnLink)
