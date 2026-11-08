import { Link } from 'react-router'
import { ArticleData } from '../interfaces'

export const ArticleByline: React.FC<{ data: ArticleData }> = ({ data }) => (
  <div className="sc-26117dc-0 bjzUFx">
    <Link to={data.path}>{data.date}</Link>
    <div className="sc-11fbc5f9-0 jgNOfX">
      <Link
        title={data.author.name}
        className="sc-11fbc5f9-1 ercySV"
        to={data.author.path}
      >
        <div className="sc-24319205-0 hgeodZ">
          <img src={data.author.image} alt={data.author.name} />
        </div>
      </Link>
      <div className="sc-11fbc5f9-3 hPTbpG">
        <Link className="sc-11fbc5f9-4 gmvPCB" to={data.author.path}>
          {data.author.name}
        </Link>
      </div>
    </div>
  </div>
)
