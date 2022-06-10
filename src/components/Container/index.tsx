import { PropsWithChildren } from 'react'

import * as S from './styled'

type Props = PropsWithChildren<{}>

const Container: React.FC<Props> = ({ children }) => {
  return <S.Container>{children} </S.Container>
}

export default Container
