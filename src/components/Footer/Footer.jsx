import { ColumnFooter, FooterContainer, FooterDiv, H1 } from './FooterStyles'
import { Icon } from '@iconify/react'

function Footer () {
  return (
    <FooterContainer>
      <FooterDiv>
        <ColumnFooter>
          <H1>
            ORLANDO KORZO
            <h3>Perfil Corto de Orlando Korzo</h3>
          </H1>
        </ColumnFooter>
        <ColumnFooter>
          <H1>Useful Links</H1>
        </ColumnFooter>
        <ColumnFooter>
          <H1>Follow Me</H1>
          <Icon icon='ci:instagram' font-size='2rem' />
        </ColumnFooter>
        <ColumnFooter>
          <H1>Find Me</H1>
        </ColumnFooter>
        <ColumnFooter>
          <H1>Call Me</H1>
        </ColumnFooter>
        <ColumnFooter>
          <H1>Mail Me</H1>
        </ColumnFooter>
        <ColumnFooter>
          <H1>Made with Love by Black Dog Solutions</H1>
        </ColumnFooter>
      </FooterDiv>
    </FooterContainer>
  )
}

export default Footer
