import Block from '../../packages/block/Block'
import template from './settingsBtn.hbs'

interface SettingsBtnProps {
  to: string
  title: string
  events: {
    click: (e: Event) => void
  }
}

class SettingsBtn extends Block<SettingsBtnProps> {
  constructor(props: SettingsBtnProps) {
    super(props)
  }

  render() {
    return this.compile(template, { ...this.props })
  }
}

export default SettingsBtn
