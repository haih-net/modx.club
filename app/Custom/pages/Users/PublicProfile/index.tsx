import { MarkdownStyled } from '../../../components/Markdown/styles'
import type { PublicProfileData } from './interfaces'
import {
  PublicProfileStyled,
  ProfileToolbarStyled,
  ProfileStatusStyled,
  ProfileInfoStyled,
  ProfileAvatarStyled,
} from './styles'

export const PublicProfile: React.FC<
  React.PropsWithChildren<{ data: PublicProfileData }>
> = ({ data, children }) => (
  <PublicProfileStyled>
    <ProfileToolbarStyled>
      <h1 tabIndex={-1}>{data.name}</h1>
      <ProfileStatusStyled>{data.status}</ProfileStatusStyled>
    </ProfileToolbarStyled>
    <ProfileInfoStyled>
      <ProfileAvatarStyled src={data.image} alt={data.name} />
      {children && <MarkdownStyled>{children}</MarkdownStyled>}
    </ProfileInfoStyled>
  </PublicProfileStyled>
)
