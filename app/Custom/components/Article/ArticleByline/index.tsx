import {
  ArticleMetaStyled,
  UserLinkContainer,
  AvatarLink,
  AvatarStyled,
  NameContainer,
  NameLink,
} from './styles'
import { Link } from 'react-router'
import { ArticleData } from '../interfaces'

export const ArticleByline: React.FC<{ data: ArticleData }> = ({ data }) => (
  <ArticleMetaStyled>
    <Link to={data.path}>{data.date}</Link>
    <UserLinkContainer>
      <AvatarLink title={data.author.name} to={data.author.path}>
        <AvatarStyled>
          <img src={data.author.image} alt={data.author.name} />
        </AvatarStyled>
      </AvatarLink>
      <NameContainer>
        <NameLink to={data.author.path}>{data.author.name}</NameLink>
      </NameContainer>
    </UserLinkContainer>
  </ArticleMetaStyled>
)
