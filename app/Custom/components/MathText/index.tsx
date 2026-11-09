import ReactMarkdown from 'react-markdown'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'

export const MathText: React.FC<{ value: string }> = ({ value }) => (
  <ReactMarkdown
    remarkPlugins={[remarkMath]}
    rehypePlugins={[rehypeKatex]}
    components={{ p: ({ children }) => <>{children}</> }}
  >
    {`$${value}$`}
  </ReactMarkdown>
)
